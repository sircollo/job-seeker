import React from 'react'
import '../../styles/Authentication/Login.css'
import MainLogo from '../../assets/images/moringa_logo_1.png'
function Login() {
  return (
    <div className='login mt-4'>
      <div className='login-page'>
      <div style={{backgroundImage: `url(${MainLogo})`,
      width:'350px',
      height:'150px',
      backgroundRepeat: 'no-repeat' 
      }}>
      </div>
      <div className='login-form'>
        <h2 style={{color:'rgba(16, 31, 60, 0.8)', fontSize:'36px'}}>Sign In</h2>
        <form>
          <div className='form-group-lg d-flex flex-column'>
          <label htmlFor='email' className='my-1 mr-auto mb-2'>Email Address</label>
          <input name='email' className='form-control' type="text"/>
          </div>
          <div className='form-group d-flex flex-column'>
          <label htmlFor='password' className='mt-4 mr-auto'>Password</label>
          <input name='password' className='form-control' type="password"/>
          </div>
          <div className='form-group ml-auto d-flex'>
            <button className='btn login-button mt-2' type='submit'>Login</button>
          </div>
          <div className='ml-auto d-flex mb-5'>
            <a href='/'>Forgot Password?</a>
          </div>
        </form>
      </div>
      
    </div>
  </div>
  )
}

export default Login