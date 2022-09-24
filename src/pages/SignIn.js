import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const SignIn = () => {
  const { signin } = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    signin(form.email, form.password);
  };

  return (
    <div id="SignIn">
      <div className="card">
        <div>
          <h1>Sign In</h1>
          <p>Use your company profile to sign in.</p>
        </div>
        <form action="" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name=""
              id="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};
