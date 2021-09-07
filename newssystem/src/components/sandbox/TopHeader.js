import React, { useState } from "react";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapse = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item>Super Admin</Menu.Item>
      <Menu.Item danger>Log out</Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapse} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapse} />
      )}
      <div style={{ float: "right" }}>
        <span>Welcome Admin Back</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
