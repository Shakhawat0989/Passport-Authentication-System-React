import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-4 offset-lg-4"style={{paddingTop:'120px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>My Profile</h3>
        <br />
            <ul>
              <li>Name : Shakhawat Sabbir</li>
              <li>Email : shakhawat@gmail.com</li>
            </ul>
            <br />
            
            
        </form>
        </div>
      </div>
    )
  }
}
