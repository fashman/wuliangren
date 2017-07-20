import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuList extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'mail',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">我</Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />我的足迹
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />我的经历</span>}>
          <MenuItemGroup title="2015 - 2017">
            <Menu.Item key="setting:1">A</Menu.Item>
            <Menu.Item key="setting:2">B</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="2014 - 2015">
            <Menu.Item key="setting:3">C</Menu.Item>
            <Menu.Item key="setting:4">D</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            <Icon type="mail" />联系我
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}