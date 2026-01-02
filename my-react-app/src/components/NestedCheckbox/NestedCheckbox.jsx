import { useState } from "react";
import Checkbox from "./Checkbox";

export default function NestedCheckbox(props) {
  const [data, setData] = useState(props.data);

  function updateTree(id) {
    function recursiveUpdate(childData, defaultValue = null) {
      return childData.map((child) => {
        const obj = { ...child };
        if (obj.id === id) {
          obj.isChecked = !obj.isChecked;
          obj.children = recursiveUpdate(obj.children, obj.isChecked);
        } else {
          if (defaultValue !== null) {
            obj.isChecked = defaultValue;
          }
          obj.children = recursiveUpdate(obj.children, defaultValue);
        }

        if (obj.children.length > 0) {
          obj.isChecked = obj.children.every(
            (child) => child.isChecked === true
          );
        }

        return obj;
      });
    }
    const newData = recursiveUpdate(data);
    setData(newData);
  }

  return (
    <>
      <h1>NestedCheckbox</h1>
      <Checkbox data={data} updateTree={updateTree} />
    </>
  );
}
