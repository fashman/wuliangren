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
        <div className={styles.menu}>
          <MenuList />
        </div>
        <div className={styles.container}>
          <div className={styles.content}></div>
          <div className={styles.fllows}>
            <UserList dataSource={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
}
