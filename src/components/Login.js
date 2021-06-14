import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [userCredentials, setUserCredentials ] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: userCredentials.username,
            password: userCredentials.password
        }
        axios.post('http://localhost:5000/api/login', user)
            .then(response => localStorage.setItem('token', response.data.payload))
            .catch(error => console.log(error.message))
    }

    const handleChanges = (event) => {
        setUserCredentials({
            ...userCredentials,
            [event.target.name]: event.target.value
        })
    }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2> login form </h2>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                  <input
                      onChange={handleChanges}
                      name='username'
                      value={userCredentials.username}
                      data-testid='username'
                      placeholder='username here'
                      type="text"/>
              </label>
              <label htmlFor="password">
                  <input
                      onChange={handleChanges}
                      name='password'
                      value={userCredentials.password}
                      data-testid='password'
                      placeholder='secret sauce here'
                      type="password"/>
              </label>
              <button type={"submit"}> login </button>
          </form>
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.