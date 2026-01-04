import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion() {
  const [selectedId, setselectedId] = useState(-1);
  const data = [
    {
      heading: "h1",
      text: "t1",
      id: 0,
    },
    {
      heading: "h2",
      text: "t2",
      id: 1,
    },
    {
      heading: "h3",
      text: "t3",
      id: 2,
    },
  ];
  return (
    <div>
      <h1>Accordion</h1>
      {!data || data.length === 0 ? (
        <>Nothing to show</>
      ) : (
        data.map((d) => {
          return (
            <div
              key={d.id}
              className={styles.item}
              onClick={() =>
                setselectedId((prev) => {
                  if (prev === d.id) {
                    return -1;
                  }
                  return d.id;
                })
              }
            >
              <p>{d.heading}</p>
              {d.id === selectedId && <p>{d.text}</p>}
            </div>
          );
        })
      )}
    </div>
  );
}
