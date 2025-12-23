import { useState } from "react";
import tabConfig from "../../constants/tabConstants";
import styles from "./Tab.module.css";
import TabTemplate from "./TabTemplate";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(0);
  return (
    <>
      <h1>Inside tab</h1>
      <div className={styles.parentContainer}>
        {tabConfig.map(function (tab, idx) {
          return (
            <div
              key={idx}
              className={styles.tab}
              onClick={() => setActiveTab(idx)}
            >
              {tab.tabName}
            </div>
          );
        })}
        <TabTemplate
          data={data}
          setData={setData}
          tabData={tabConfig[activeTab]}
        />
      </div>
      {activeTab === tabConfig.length - 1 && <button type="submit" >Submit</button>}
    </>
  );
}
