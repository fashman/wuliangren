import React, { Component } from 'react';
import axios from 'axios';
//import styles from './style.less';
import UserList from './Users';
import MenuList from './MenuList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios({
      url: 'https://api.github.com/users',
    }).then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }
  render() {
    return(
      <div className={'app'}>
        <div className={'menu'}>
          <MenuList />
        </div>
        <div className={'container'}>
          <div className={'content'}>
            <p>简简单单，简约之美。</p>
            <p>仁者无敌，无敌是寂寞！</p>
          </div>
          <div className={'fllows'}>
            <UserList data={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
}
