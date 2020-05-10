import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// import PropTypes from "prop-types";
import { Layout, Menu, Row, Col } from "antd";
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
  const dispatch = useDispatch();

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
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
                style: { color: "white" },
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
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
