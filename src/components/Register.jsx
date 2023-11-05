import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";
import axios from 'axios';

export default class 
 extends Component {

  state={
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    message:''
  }

  formSubmit=(e)=>{
    e.preventDefault();

    const data={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    
    axios.post('/register', data)
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
      return <Navigate to='/login' />
    }

    //checking Authorization
    if(localStorage.getItem('token')){
      return <Navigate to='/profile' />
    }

    return (
      <div class="row">
        <div class="col-lg-4 offset-lg-4"style={{paddingTop:'80px'}}>
        <form class="p-3 mb-2 bg-success-subtle text-emphasis-success border border-success" style={{borderRadius:'10px'}}>
        <h3 style={{textAlign:'center'}}>Register Account</h3>
        <br />
        <div class="mb-3">
                <label class="form-label">User Name</label>
                <input type="text" class="form-control" name="name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" email="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" password="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" password_confirmation="password_confirmation" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}/>
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={this.formSubmit} class="btn btn-success" type="button">Register</button>
                
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
