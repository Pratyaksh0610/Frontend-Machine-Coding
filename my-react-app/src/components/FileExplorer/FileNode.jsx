import { useState } from "react";
import styles from "./FileExplorer.module.css";
import FileExplorer from "./FileExplorer";

export default function FileNode(props) {
  const { file } = props;
  const { name, isFolder, children } = file;
  const [showChildren, setshowChildren] = useState(false);
  return (
    <div style={{ marginLeft: '10px' }}>
      <span className={styles.text}>{name}</span>
      {isFolder && (
        <>
          <img
            src="./image.png"
            width={"10px"}
            className={showChildren ? styles.arrowImg : ""}
            onClick={() => {
              setshowChildren((prev) => !prev);
            }}
          />
          {showChildren && (
            <FileExplorer data={children} />
          )}
        </>
      )}
    </div>
  );
}
