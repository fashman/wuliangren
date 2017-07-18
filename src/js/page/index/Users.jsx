import React, { Component } from 'react';
import { Table } from 'antd';
import styles from './style.less';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'name',
      dataIndex: 'login',
      key: 'login',
    }];
  }

  render() {
    return(
      <div className={styles.users}>
        <Table dataSource={this.props.dataSource} columns={this.columns} rowKey="id" />
      </div>
    )
  }
}