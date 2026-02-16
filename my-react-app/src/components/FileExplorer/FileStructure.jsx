import { useState } from "react";
import { FileStructureData } from "../../constants/componentConstants";
import FileExplorer from "./FileExplorer";

export default function FileStructure() {
  const [data, setData] = useState(FileStructureData);

  function onAddFile(nodeId) {
    const name = prompt("Enter name");

    const updateTree = (dataArray) => {
      return dataArray.map((file) => {
        if (file.id === nodeId) {
          return {
            ...file,
            isFolder: true,
            children: [
              ...file.children,
              {
                name: name,
                isFolder: false,
                id: Math.random(),
                children: [],
              },
            ],
          };
        } else {
          return {
            ...file,
            children: file.children ? updateTree(file["children"]) : [],
          };
        }
      });
    };
    setData((prev) => updateTree(prev));
  }

  function onRemoveFile(nodeId) {
    const updateTree = (dataArray) => {
      return dataArray
        .filter((file) => file.id !== nodeId)
        .map((file, idx) => {
          return {
            ...file,
            children: file.children ? updateTree(file.children) : [],
          };
        });
    };
    setData((prev) => updateTree(prev));
  }

  return (
    <>
      <FileExplorer data={data} onAdd={onAddFile} onRemove={onRemoveFile} />
    </>
  );
}
