import React from 'react'

const AdminLogin = () => {
  return (
    <>
      <div className="center-container">
        <div className="login-container">
          <h1>Log In</h1>
          <form>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="login-button">Login</button>
          </form>
          <a href="#" className="signup-link">Sign Up</a>
        </div>
      </div>
    </>
  )
}

export default AdminLogin