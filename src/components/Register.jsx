import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class 
 extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-4 offset-lg-4"style={{paddingTop:'80px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>Register Account</h3>
        <br />
        <div class="mb-3">
                <label class="form-label">User Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-success" type="button">Login</button>
                
            </div>
            <br />
            <div>
              
                <br />
                I allready have an account<Link to="/login"> Login Now</Link>
            </div>
        </form>
        </div>
      </div>
    )
  }
}
