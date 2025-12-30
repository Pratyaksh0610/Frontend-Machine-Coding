import FileNode from "./FileNode";

export default function FileExplorer(props) {
  const { data} = props;

  return (
    <>
      {data &&
        data.map((file, idx) => {
          return <FileNode file = {file} key={idx}/>
        })}
    </>
  );
}
