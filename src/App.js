import React from 'react';
import './styles/App.scss';
import { SignIn } from './pages/SignIn';
import { Portal } from './pages/Portal';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser } = useAuth();

  return <div id="App">{!currentUser ? <SignIn /> : <Portal />}</div>;
}

export default App;
