import React, { Component } from 'react'
import Nav from './Nav';
import {BrowserRouter as Main,Routes,Route} from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Forgot from '../components/Forgot';
import Profile from '../components/Profile';
import Reset from '../components/Reset';


export default class Header extends Component {
  render() {
    return (
        <Main>
            <div>
                <Nav />
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path="/forgot" element={<Forgot />} />
                        <Route exact path="/reset" element={<Reset />} />
                        
                    </Routes>
        
            </div>
      </Main>
    )
  }
}
