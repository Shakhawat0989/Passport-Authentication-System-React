import React, { Component } from 'react'
import {Navigate} from "react-router-dom"; 

export default class Profile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
      name=this.props.user.name;
      email=this.props.user.email;
    }

    if(!localStorage.getItem('token')){
      return <Navigate to='/login' />
    }
    return (
     
      <div class="row">
        <div class="col-lg-4 offset-lg-4"style={{paddingTop:'120px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>My Profile</h3>
        <br />
            <ul>
              <li>Name : {name}</li>
              <li>Email : {email}</li>
            </ul>
            <br />
            
            
        </form>
        </div>
      </div>
    )
  }
}
