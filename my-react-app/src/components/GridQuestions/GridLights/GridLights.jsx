import { useEffect, useState } from "react";
import styles from "./GridLights.module.css";

//Question: https://www.youtube.com/watch?v=sAF7Km_znjA&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo&index=10

export default function GridLights(props) {
  const [grid, setGrid] = useState([]);
  const [path, setPath] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { gridSize = 3 } = props;

  useEffect(() => {
    const arr = Array.from({ length: gridSize }, (_, id) => {
      return Array.from({ length: gridSize }, (_, idx) => {
        return 0;
      });
    });
    setGrid(arr);
  }, [props]);

  const handleClick = function (idx, id, shouldUpdatePath = true) {
    if (isLoading || (grid[idx][id] == 1 && shouldUpdatePath)) {
      console.log("RETURNING DURING LOADING");
      return;
    }
    setGrid((prev) => {
      const arr = prev.map((row, idx) => {
        return [...row];
      });
      arr[idx][id] = shouldUpdatePath === true ? 1 : 0;
      return arr;
    });
    if (shouldUpdatePath) {
      setPath((prev) => {
        const updatedPath = [...prev];
        updatedPath.push(`${idx}-${id}`);

        if (updatedPath.length === gridSize * gridSize) {
          setIsLoading(true);
          for (let i = 0; i < updatedPath.length; i++) {
            const splitPath = updatedPath[i].split("-");
            setTimeout(() => {
              //Closure ki wajah se yaha setTimout mei isLoading ki poorani value use hoti hai
              handleClick(splitPath[0], splitPath[1], false);
              i === updatedPath.length - 1 && setIsLoading(false);
            }, (i + 1) * 300);
          }
          return [];
        }
        return updatedPath;
      });
    }
  };

  return (
    <>
      {grid &&
        grid.map((row, idx) => {
          return (
            <div className={styles.row} key={idx}>
              {row.map((col, id) => {
                return (
                  <div
                    key={id}
                    className={`${styles.col} ${
                      col === 0 ? "" : styles.gridBoxChecked
                    }`}
                    onClick={() => handleClick(idx, id)}
                  ></div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}
