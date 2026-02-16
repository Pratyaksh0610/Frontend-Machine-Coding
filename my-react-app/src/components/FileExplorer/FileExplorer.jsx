import FileNode from "./FileNode";

export default function FileExplorer(props) {
  const { data, onAdd, onRemove } = props;
  
  return (
    <>
      {data &&
        data.map((file, idx) => {
          return (
            <div style={{ display: "flex" }}>
              <button onClick={() => onAdd(file.id)}>+</button>
              <button onClick={() => onRemove(file.id)}>-</button>
              <FileNode
                file={file}
                onAdd={onAdd}
                onRemove={onRemove}
                key={idx}
              />
            </div>
          );
        })}
    </>
  );
}
