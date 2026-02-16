import { useEffect, useRef, useState } from "react";
import styles from "./OTPInput.module.css";

export default function OTPInput(props) {
  const { inputSize } = props;
  const [inputArr, setinputArr] = useState(
    Array.from({ length: inputSize }, (_, idx) => {
      return "";
    })
  );
  const inputRef = useRef([]);

  useEffect(() => {
    setinputArr(
      Array.from({ length: inputSize }, (_, idx) => {
        return "";
      })
    );
  }, [inputSize]);

  useEffect(() => {
    if (inputRef.current.length > 0) {
      inputRef.current[0].focus();
    }
  }, [inputSize]);

  const handleInputFilled = (e, idx) => {
    const val = e.target.value.trim();
    const enteredInput = val.slice(-1);

    if (isNaN(enteredInput)) return;

    setinputArr((prev) => {
      const arr = [...prev];
      arr[idx] = enteredInput;
      return arr;
    });
    if (idx !== inputSize - 1 && enteredInput.length) {
      inputRef.current[idx + 1].focus();
    }
    return;
  };

  const handleInputClear = (e, idx) => {
    if (e.key === "Backspace" && idx > 0) {
      inputRef.current[idx - 1].focus();
    }
    return;
  };

  return (
    <>
      <h1>OTP INPUT</h1>
      <div>
        {inputArr &&
          inputArr.map((_, idx) => {
            return (
              <input
                type="text"
                key={idx}
                ref={(input) => (inputRef.current[idx] = input)}
                onChange={(e) => handleInputFilled(e, idx)}
                onKeyUp={(e) => handleInputClear(e, idx)}
                className={styles.otpInput}
                value={inputArr[idx]}
              />
            );
          })}
      </div>
    </>
  );
}
