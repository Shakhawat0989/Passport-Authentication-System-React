import React, { Component } from 'react'
import {Navigate} from "react-router-dom";



export default class 
 extends Component {
  render() {

    //checking Authorization
    if(localStorage.getItem('token')){
      return <Navigate to='/profile' />
    }

    return (
      <div class="row">
        <div class="col-lg-4 offset-lg-4"style={{paddingTop:'120px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>Forgot Password</h3>
        <br />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-success" type="button">Submit</button>
                
            </div>
            <br />
            
        </form>
        </div>
      </div>
    )
  }
}
