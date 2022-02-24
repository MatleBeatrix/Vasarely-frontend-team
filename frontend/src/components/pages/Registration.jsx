import React from 'react'
import { useState } from 'react'
import http from 'axios'
import { useNavigate } from "react-router-dom";
import './Registration.css'


const Registration = ({childToParentUpdate}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [page, setPage] = useState('')

  const navigate = useNavigate();


  const signup = async (event) => {
    try {
      await http.post('http://localhost:4000/api/signup', {
        username,
        password
      });
      setPage('login')
      alert('yay')
      setUsername('')
      setPassword('')

    } catch (error) {
      if (error.response.status === 400) {
        alert('missing credentials')
      } else if (error.response.status === 409) {
        alert('username taken')
      }
    }
  }

  const login = async () => {
    try {
      const response = await http.post('http://localhost:4000/api/login', {}, {
        headers: {
          'Authorization': `${loginUserName}&&&${loginPassword}`
        }
      });
      localStorage.setItem('sessionID', response.data)
      handleLogin()
      
    }
    catch (error) {
      alert('wrong username/password!')
      console.log(error)
    }
  }

  async function handleLogin(event) {
    // event.preventDefault();
    // await login(event.target);
    navigate("../mycollection", { replace: true });
    (() => childToParentUpdate('update'))()
  }

  

  return (
    <div id="reg">
      <button onClick={() => setPage('registration')}>Registration</button>

      {page === 'registration' &&
        <form>
          <h1>Registration</h1>
          <label htmlFor='username'> Username </label>
          <input type="text" name={username} onChange={e => setUsername(e.target.value)} id='username' />

          {/* temporary <br /> */}
           <br /><br />

          <label htmlFor='password'> Password </label>
          <input type="password" name={password} onChange={e => setPassword(e.target.value)} id='password' autoComplete='on' />
            <br /><br />
          <button onClick={signup}> Sign up! </button>
        </form>
      }
      {/* temporary <br /> */}
      <br /><br />

      <button onClick={() => setPage('login')}>I have an account</button>

      {page === 'login' &&
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <label htmlFor='userName'>Username </label>
          <input type="text" name={loginUserName} onChange={e => setLoginUserName(e.target.value)} id='loginUserName' />
          <br /><br></br>
          <label>Password </label>
          <input type="password" name={loginPassword} onChange={e => setLoginPassword(e.target.value)} id='loginPassword' autoComplete='on' />
          <br /><br />
          <button type="button" onClick={login}>Login</button>
        </form>
      }

    </div>
  )
}

export default Registration
