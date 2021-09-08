import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import "./index.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const iconList = {
  "/home": <UserOutlined />,
  "/user-manage/list": <UserOutlined />,
  "/right-manage/role/list": <UserOutlined />,
  "/right-manage/right/list": <UserOutlined />,
};

function SideMenu(props) {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7000/rights?_embed=children").then((res) => {
      console.log(res.data);
      setMenu(res.data);
    });
  }, []);
  const checkPagePermission = (item) => {
    return item.pagepermisson === 1;
  };

  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item
            key={item.key}
            icon={iconList[item.key]}
            onClick={() => {
              console.log(props);
              props.history.push(item.key);
            }}
          >
            {item.title}
          </Menu.Item>
        )
      );
    });
  };
const selectKeys = [props.location.pathname];
const openKeys = ["/" + props.location.pathname.split("/")[1]];
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className="logo">News Release System</div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu theme="dark" mode="inline" selectedKeys={selectKeys} defaultOpenKeys={openKeys}>
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
}
export default withRouter(SideMenu);
