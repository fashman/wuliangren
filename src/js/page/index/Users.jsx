import React, { Component } from 'react';

export default class Users extends Component {
  render() {
    const users = this.props.data;
    return(
      <div>
        {
          users && users.length ? users.map((val, num)=>(
            <img key={num} src={val.avatar_url} alt={val.login} />
          )) : (<p style={{textAlign: 'center'}}>还没有人关注你哦！</p>)
        }
      </div>
    )
  }
}