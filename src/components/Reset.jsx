import React, { Component } from 'react'

export default class Reset extends Component {
  render() {
    return (
        <div class="row">
        <div class="col-md-4 offset-md-4"style={{paddingTop:'80px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>Reset Password</h3>
        <br />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">PINCODE</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">New Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
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
