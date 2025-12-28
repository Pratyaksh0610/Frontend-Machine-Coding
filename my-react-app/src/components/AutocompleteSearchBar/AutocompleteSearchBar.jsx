import { useEffect, useRef, useState } from "react";
import { API_URL_SEARCH } from "../../constants/mockAPI";
import { debouncedFunction } from "../../utils/helper";
import styles from "./AutocompleteSearchBar.module.css";
import { AUTOCOMPLETE_SEARCH_BAR } from "../../constants/autcompleteSearchBarConstants";

export default function AutocompleteSearchBar() {
  const [recipeData, setrecipeData] = useState([]);
  const [showRecipeSuggestions, setshowRecipeSuggestions] = useState(false);
  const inputRef = useRef(null);
  const [inputName, setInputName] = useState("");

  async function getData(searchText = "") {
    try {
      if (typeof searchText !== "string") {
        throw new Error(`SearchText is not in the form of string`);
      }
      const trimmedSearchText = searchText.trim().toLowerCase();
      const params = new URLSearchParams({
        q: trimmedSearchText,
      });
      const getCachedData = JSON.parse(
        sessionStorage.getItem(AUTOCOMPLETE_SEARCH_BAR) || "{}"
      );
      if (
        trimmedSearchText !== "" &&
        Object.keys(getCachedData).includes(trimmedSearchText)
      ) {
        setrecipeData(getCachedData[trimmedSearchText]);
        return;
      }
      const apiData = await fetch(API_URL_SEARCH + `?${params.toString()}`);
      if (!apiData.ok) {
        throw new Error(`HTTP ${apiData.status}`);
      }

      const response = await apiData.json();
      sessionStorage.setItem(
        AUTOCOMPLETE_SEARCH_BAR,
        JSON.stringify({ ...getCachedData, [trimmedSearchText]: response?.recipes })
      );
      setrecipeData(response?.recipes);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("DONE WITH THE API");
    }
  }

  const handeleDebouncedSearch = debouncedFunction(getData, 300);
  useEffect(() => {
    function handlePointerDown(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setshowRecipeSuggestions(false);
      }
    }
    window.addEventListener("pointerdown", handlePointerDown);
    getData();
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <>
      <div>
        <h1>This is the autcomplete search bar</h1>
        <div className={styles.inputContainer} ref={inputRef}>
          <label>
            Search bar
            <input
              type="text"
              name="searchText"
              onChange={(e) => {
                setInputName(e.target.value);
                handeleDebouncedSearch(e.target.value);
              }}
              style={{ marginLeft: "8px" }}
              value={inputName}
              onFocus={() => setshowRecipeSuggestions(true)}
            />
          </label>
          <div className={styles.recipeContainer}>
            {showRecipeSuggestions &&
              recipeData &&
              recipeData.map((recipe, idx) => (
                <p
                  key={idx}
                  className={styles.recipe}
                  onClick={() => {
                    setInputName(recipe.name);
                    setshowRecipeSuggestions(false);
                  }}
                >
                  {recipe.name}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
