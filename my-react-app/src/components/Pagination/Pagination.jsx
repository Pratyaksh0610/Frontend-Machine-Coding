import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./Pagination.module.css";
import { API_URL_PRODUCTS, PAGE_SIZE_LIMIT } from "../../constants/componentConstants";

export default function Pagination() {
  const [productsData, setproductsData] = useState([]);
  const [currentPageNumber, setcurrentPageNumber] = useState(0);

  const maxPages = Math.ceil(productsData.length / PAGE_SIZE_LIMIT);
  const startIndex = currentPageNumber * PAGE_SIZE_LIMIT;
  const endIndex = Math.min(startIndex + PAGE_SIZE_LIMIT, productsData.length);

  const handlePageChange = function (idx) {
    setcurrentPageNumber(idx);
  };

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(API_URL_PRODUCTS);
      const data = await response.json();
      setproductsData(data.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>
      {Array.from({ length: maxPages }, function (_, idx) {
        return (
          <button key={idx} onClick={() => handlePageChange(idx)}>
            {idx + 1}
          </button>
        );
      })}
      <div className={styles.parentContainer}>
        {productsData &&
          productsData.length > 0 &&
          productsData.slice(startIndex, endIndex).map((product, idx) => {
            return (
              <ItemCard
                key={idx}
                imgSrc={product.thumbnail}
                name={product.title}
              />
            );
          })}
      </div>
    </>
  );
}
