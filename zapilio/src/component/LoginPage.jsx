import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import '../style/login-page.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate =useNavigate();

  const handleLogin = () => {
    if(name && isEmailValid(email)){
    dispatch(login(name, email));
    navigate('/questions-page');}
  };


const isEmailValid = (email) => {
    // A regular expression for email validation
     const emailRegex = /^(?!.*\.{2})(?!^\.)[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}$/;
     const emailRegexTrailingDot = /[^.]\@/;
     const emailDomainVarifivation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/;
     return (
       emailRegex.test(email) &&
       emailRegexTrailingDot.test(email) &&
       emailDomainVarifivation.test(email)
     );
 };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button disabled={!name && !isEmailValid(email)} type="button" onClick={handleLogin}>Login</button>
          </form>
          {name && isEmailValid(email)? <></> : <span>**Please Enter valid email and name</span>}
      </div>
    </div>
  );
};

export default LoginPage;
