import React, { useState } from 'react';
import {useMutation} from '@apollo/client'
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import "nes.css/css/nes.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <section className="nes-container is-dark with-title container">
        <p className="title" >Sign in to Your Account</p>

        <form onSubmit={handleFormSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="pasword"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {error ? (
          <div>
            <p className="nes-text is-error">The provided credentials are incorrect</p>
          </div>
        ) : null}
          <div className="form-group">
            <button type="submit"className="nes-btn btn">Submit</button>
          </div>
        </form>
        <Link to="/register" className='nes-btn btn'>Dont have an Account? Signup Here</Link>
      </section>
    </>
  );
}

export default Login;
