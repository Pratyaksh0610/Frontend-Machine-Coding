import styles from "./NestedCheckbox.module.css";

export default function Checkbox(props) {
  const { data, updateTree } = props;
  return (
    <>
      {data.map((d, idx) => {
        return (
          <div className={styles.checkboxContainer} key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.isChecked}
                onChange={(e) => updateTree(d.id)}
              />
              <span className={styles.text}>{d.name}</span>
            </label>
            {d.children && (
              <Checkbox data={d.children} updateTree={updateTree} />
            )}
          </div>
        );
      })}
    </>
  );
}
