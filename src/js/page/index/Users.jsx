import React, { Component } from 'react';
import {  } from 'antd';

export default class Users extends Component {
  render() {
    const users = this.props.data;
    return(
      <div>
        {
          users && users.length ? users.map((val, num)=>(
            <img src={val.avatar_url} alt={val.login} />
          )) : '<p>还没有人关注你哦！</p>'
        }
      </div>
    )
  }
}