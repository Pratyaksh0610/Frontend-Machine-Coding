import { useState } from "react";
import styles from "./PasswordGenerator.module.css";
import {
  copyToClipboard,
  getPasswordStrength,
  getRandomLetter,
} from "../../utils/helper";
import { inputMapping } from "../../constants/componentConstants";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("PASSWORD");
  const [errorMsg, setErrorMsg] = useState(null);
  const [passwordLength, setPasswordLength] = useState(4);
  const [inputAddition, setInputAddition] = useState({});

  function generatePassword() {
    const charactersToInclude = Object.keys(inputAddition).filter((key) => {
      return inputAddition[key] === true;
    });
    if (charactersToInclude.length < 1) {
      setErrorMsg("Select at least 1 option");
      return;
    }
    const arr = Array.from({ length: passwordLength }, (_, idx) => {
      return "";
    });
    for (let i = 0; i < arr.length; i++) {
      const randomType = Math.floor(Math.random() * charactersToInclude.length);
      arr[i] = getRandomLetter(charactersToInclude[randomType]);
    }
    const updatedPassword = arr.join("");
    setErrorMsg(null);
    setPassword(updatedPassword);
  }

  function handleInputChange(e) {
    const updatedInputAddition = { ...inputAddition };
    updatedInputAddition[e.target.name] = e.target.checked;
    setInputAddition(updatedInputAddition);
  }

  return (
    <>
      <h1>Password Generator</h1>
      <div className={styles.parentContainer}>
        <div className={styles.passwordBox}>
          <span>{password}</span>
          <button onClick={() => copyToClipboard(password)}>COPY</button>
        </div>
        <div className={styles.passwordBox}>
          <span>Character Length</span>
          <span>{passwordLength}</span>
        </div>
        <input
          type="range"
          min={4}
          max={10}
          placeholder="GIVE VALUE"
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          value={passwordLength}
        />
        <div className={styles.inputContainer}>
          {Object.keys(inputMapping).map((key, idx) => {
            return (
              <label key={idx}>
                <span>Include {key} Letters</span>
                <input
                  type="checkbox"
                  name={key}
                  onChange={(e) => handleInputChange(e)}
                />
              </label>
            );
          })}
        </div>
        <div className={styles.passwordBox}>
          <span>Strength</span>
          <span>{getPasswordStrength(passwordLength)}</span>
        </div>
        {errorMsg && <span className={styles.errorText}>{errorMsg}</span>}
        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </>
  );
}
