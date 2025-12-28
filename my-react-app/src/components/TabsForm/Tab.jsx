import { useState } from "react";
import tabConfig from "../../constants/tabConstants";
import styles from "./Tab.module.css";
import TabTemplate from "./TabTemplate";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(0);
  const [error, setError] = useState({});
  const handleTabSwitch = function (idx) {
    let err = {};
    if (tabConfig[activeTab].validation(data, err)) {
      setActiveTab(idx);
    }
    console.log("<<",err);
    setError((prev) => ({ ...err }));
  };
  return (
    <>
      <h1>Inside tab</h1>
      <div className={styles.parentContainer}>
        {tabConfig.map(function (tab, idx) {
          return (
            <div
              key={idx}
              className={styles.tab}
              onClick={() => handleTabSwitch(idx)}
            >
              {tab.tabName}
            </div>
          );
        })}
        <TabTemplate
          data={data}
          setData={setData}
          tabData={tabConfig[activeTab]}
          error = {error}
        />
      </div>
      {activeTab === tabConfig.length - 1 && (
        <button type="submit">Submit</button>
      )}
    </>
  );
}
