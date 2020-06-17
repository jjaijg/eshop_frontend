import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ShopOutlined,
  ProfileOutlined,
  HddOutlined,
} from "@ant-design/icons";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";

import ProductDashboard from "../shop/product/ProductDashboard";
import BillDashboard from "../shop/bill/BillDashboard";

const { Header, Sider, Content } = Layout;

const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  console.log(location);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <VideoCameraOutlined />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <NavLink exact to="/">
                <ShopOutlined />
                <span>Logo</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink exact to="/">
                <HddOutlined />
                <span>Products</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink exact to="/bill">
                <ProfileOutlined />
                <span>Bills</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <UploadOutlined />
              <span>Nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              padding: "0px",
            }}
          >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={"2"}>
              <Menu.Item key="1">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggle,
                    style: {
                      color: "white",
                      fontSize: "1.2rem",
                      paddingRight: "15px",
                    },
                  }
                )}
              </Menu.Item>
              <Menu.Item key="2">Dashboard</Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "60px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/" component={ProductDashboard} />
              <Route path="/bill" component={BillDashboard} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
