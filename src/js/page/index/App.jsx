import React, { Component } from 'react';
import axios from 'axios';
import styles from './style.less';
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
      <div className={styles.app}>
        <MenuList />
        <div className={styles.container}>
          <div className={styles.content}></div>
          <div className={styles.fllows}></div>
        </div>
        <UserList dataSource={this.state.users} />
      </div>
    )
  }
}
