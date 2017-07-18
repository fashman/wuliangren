import React, { Component } from 'react';
import axios from 'axios';
import styles from './style.less';
import UserList from './Users';

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
      const users = res;
      this.setState({ users });
    })
  }
  render() {
    return(
      <div className={styles.app}>
        <UserList dataSource={this.props.list} />
      </div>
    )
  }
}
