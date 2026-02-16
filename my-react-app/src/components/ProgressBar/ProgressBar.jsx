import { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar(props) {
  const [progress, setprogress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setprogress(props.progress);
    }, 300);

    intervalRef.current = setInterval(() => {
      setprogress((prev) => {
        if (prev === 100) {
          clearInterval(intervalRef.current);
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, [props.progress]);

  return (
    <>
      <h1>Progress Bar at {progress}</h1>
      <div className={styles.bar}>
        <div
          className={styles.loadedBar}
          style={{
            transform: `translateX(${progress - 100}%)`,
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax={100}
          aria-valuemin={0}
        />
        <span className={styles.progressText}>{progress}%</span>
      </div>
    </>
  );
}
