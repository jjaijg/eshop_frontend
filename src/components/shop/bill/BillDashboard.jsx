import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import Bill from "./Bill.componentList";
// import ProductAdd from "./ProductAdd.component";
// import { getAllProducts } from "../../../app/dispatchers/productDispatchers";

let newTabIndex = 0;
const BillDashboard = (props) => {
  // const dispatch = useDispatch();

  const { TabPane } = Tabs;

  const panes = [
    {
      title: "Bill List",
      content: "Content of Bill List",
      key: "1",
      closable: false,
    },
  ];

  const [tab, settab] = useState({
    activeKey: panes[0].key,
    panes,
  });

  const onEdit = (targetKey, action) => {
    if (action === "add") add();
    if (action === "remove") remove(targetKey);
  };

  const add = () => {
    const { panes } = tab;
    const activeKey = `newBill${newTabIndex++}`;
    panes.push({
      title: `Bill ${newTabIndex}`,
      content: <Bill />,
      key: activeKey,
    });
    settab({ panes, activeKey });
  };

  const remove = (targetKey) => {
    let { activeKey } = tab;
    let lastIndex;
    tab.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
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

BillDashboard.propTypes = {};

export default BillDashboard;
