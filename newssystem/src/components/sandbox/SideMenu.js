import React from 'react';
import { Layout, Menu } from 'antd';
import './index.css'
import { withRouter } from 'react-router-dom';

import {
    UserOutlined,
  } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const menuList = [
    {
        key: "/home",
        title: "Home Page",
        icon: <UserOutlined />
    },
    {
        key: "/user-manage",
        title: "User Manage",
        icon: <UserOutlined />,
        children: [
            {
                key: "/user-manage/list",
                title: "User List",
                icon: <UserOutlined />
            }
            
        ]
    },
    {
        key: "/right-manage",
        title: "Right Manage",
        icon: <UserOutlined />,
        children: [
            {
                key: "/right-manage/role/list",
                title: "Role List",
                icon: <UserOutlined />
            },
            {
                key: "/right-manage/right/list",
                title: "Right List",
                icon: <UserOutlined />
            }
            
        ]
    },
]

function SideMenu(props) {
    const renderMenu = (menuList) => {
        return menuList.map(item =>{
            if(item.children) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    { renderMenu(item.children) }
                </SubMenu>
            }
            return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
                console.log(props);
                props.history.push(item.key);
            }}>{item.title}</Menu.Item>
        })
    }
    
    return (
        <Sider trigger={null} collapsible collapsed={false}>
          <div className="logo">News Release System</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
          {renderMenu(menuList)}
          </Menu>
        </Sider>
    )
}
export default withRouter(SideMenu);
