import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class 
 extends Component {
  render() {
    return (
      <div>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/profile">Profile</Link>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <button style={{marginRight:'30px'}} class="btn btn-outline-success" type="submit"><Link to="/login">Login</Link></button>
                    <button style={{marginRight:'30px'}} class="btn btn-outline-success" type="submit"><Link to="/register">Register</Link></button>
                </form>
                </div>
            </div>
</nav>
      </div>
    )
  }
}
