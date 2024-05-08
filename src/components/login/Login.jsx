import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({isSignedIn, onLogIn, onLogOut}) => {
    const navigate = useNavigate();

    const handleLogin =()=>{
        onLogIn();
        navigate('/product-form');
    };
  return (
    <>
    <div>Login</div>
    <Button onClick={handleLogin}>{isSignedIn ? 'Log out' : 'Log in'}</Button>
    </>
  )
}

export default Login