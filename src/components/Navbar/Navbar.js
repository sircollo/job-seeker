import React from 'react'
import '../../styles/Navbar.css'
import Logo from '../../assets/images/moringa_logo.png'
// import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/"><img src={Logo} alt="moringa_logo"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-auto">
            <li class="nav-item active">
              <a class="nav-link mr-4 text-dark">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-4 text-dark">Jobs</a>
            </li>
          </ul>
          <div className='mr-4'>
            <button className='btn btn-profile'>Profile</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar