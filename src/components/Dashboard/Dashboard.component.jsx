import React, { useState } from "react";

// import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import ProductDashboard from "../shop/product/ProductDashboard";

const { Header, Sider, Content } = Layout;

const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(true);

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
              <UserOutlined />
              <span>Logo</span>
            </Menu.Item>
            <Menu.Item key="2">
              <UserOutlined />
              <span>Nav 1</span>
            </Menu.Item>
            <Menu.Item key="3">
              <VideoCameraOutlined />
              <span>Nav 2</span>
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
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                  style: {
                    color: "white",
                    fontSize: "25px",
                    paddingRight: "15px",
                  },
                }
              )}
              <Menu.Item key="1">Dashboard</Menu.Item>
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
            <ProductDashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
