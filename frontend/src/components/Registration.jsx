import React from 'react'
import { useState } from 'react'
import http from 'axios'

const Registration = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    try {
      await http.post('http://localhost:4000/api/signup', {
        username,
        password
      });
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
  return (
    <div>
      <h1>Registration</h1>
      <label htmlFor='username'> Username </label>
      <input type="text" name={username} onChange={e => setUsername(e.target.value)} id='username' />

      {/* temporary <br /> */}
      <br /><br /> 

      <label htmlFor='password'> Password </label>
      <input type="password" name={password} onChange={e => setPassword(e.target.value)} id='password' />

      <button onClick={signup}> Sign up! </button>

      {/* temporary <br /> */}
      <br /><br />

    </div>
  )
}

export default Registration