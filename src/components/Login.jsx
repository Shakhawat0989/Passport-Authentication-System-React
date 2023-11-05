import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";

import axios from 'axios';

export default class extends Component {

  state={
    email:'',
    password:'',
    message:''
  }

  formSubmit=(e)=>{
    e.preventDefault();

    const data={
      email: this.state.email,
      password: this.state.password
    }
    
    axios.post('/login', data)
    .then((response)=> {
    localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {

    if(this.state.loggedIn){
      return <Navigate to='/profile' />
    }

    //checking Authorization
    if(localStorage.getItem('token')){
      return <Navigate to='/profile' />
    }

    return (
      <div class="row">
        <div class="col-sm-4 offset-sm-4"style={{paddingTop:'120px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>Login Account</h3>
        <br />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={this.formSubmit}  class="btn btn-success" type="button">Login</button>
                
            </div>
            <br />
            <div>
                <Link to="/forgot">Forgot Password</Link>
                <br />
                I don't have an account <Link to="/register">Register Now</Link>
            </div>
        </form>
        </div>
      </div>
    )
  }
}
