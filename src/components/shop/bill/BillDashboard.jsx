import React, { useState } from "react";
import { Tabs } from "antd";

import BillProductTable from "./BillProductTable";

const BillDashboard = (props) => {
  const { TabPane } = Tabs;

  const panes = [
    {
      title: "Bill List",
      content: "Content of Bill List",
      key: "0",
      closable: false,
    },
  ];

  const [tab, settab] = useState({
    activeKey: panes[0].key,
    panes,
  });
  const [nextTabIndex, setNextTabIndex] = useState(1);

  const onEdit = (targetKey, action) => {
    if (action === "add") add();
    if (action === "remove") remove(targetKey);
  };

  const add = () => {
    const { panes } = tab;
    const activeKey = nextTabIndex.toString(10);
    panes.push({
      title: `Bill ${nextTabIndex}`,
      content: <BillProductTable name={`Bill_${nextTabIndex}`} />,
      key: activeKey,
    });
    settab({ panes, activeKey });
    setNextTabIndex(nextTabIndex + 1);
  };

  const remove = (key) => {
    let { activeKey } = tab;
    const targetKey = key;
    let lastIndex;
    tab.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    console.log(targetKey, lastIndex, activeKey);
    const panes = tab.panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    settab({ panes, activeKey });
  };

  return (
    <Tabs
      type="editable-card"
      activeKey={tab.activeKey}
      onChange={(activeKey) =>
        settab((prevState) => ({
          panes: prevState.panes,
          activeKey,
        }))
      }
      onEdit={onEdit}
    >
      {tab.panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default BillDashboard;
