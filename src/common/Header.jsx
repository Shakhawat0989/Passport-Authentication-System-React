import React, { Component } from 'react'
import Nav from './Nav';
import {BrowserRouter as Main,Routes,Route} from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Forgot from '../components/Forgot';
import Profile from '../components/Profile';
import Reset from '../components/Reset';
import axios from 'axios';


export default class Header extends Component {

  state = {
    user:{}
  }

  componentDidMount(){
   
    axios.get('/user')
    .then((response)=> {
    this.setUser(response.data)
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  setUser=(user)=>{
    this.setState({user:user})
  }
  

  render() {
    return (
        <Main>
            <div>
                <Nav user={this.state.user} setUser={this.setUser}/>
                    <Routes>
                        <Route exact path="/login" element={<Login user={this.state.user} setUser={this.setUser} />} />
                        <Route exact path="/register" element={<Register user={this.state.user} setUser={this.setUser} />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/profile" element={<Profile user={this.state.user} />} />
                        <Route exact path="/forgot" element={<Forgot />} />
                        <Route exact path="/reset" element={<Reset />} />
                        
                    </Routes>
        
            </div>
      </Main>
    )
  }
}
