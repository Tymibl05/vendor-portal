import React, { useState } from 'react';
import './styles/App.scss';
import { SignIn } from './pages/SignIn';
import { Portal } from './pages/Portal';
import { StoreProvider } from './Store';
import { useAuth } from './contexts/AuthContext';
import { TasksProvider } from './contexts/TasksContext';

function App() {
  // const [isLogIn, setLogIn] = useState(false);
  const { currentUser } = useAuth();

  return (
    <div id="App">
      {!currentUser ? (
        <SignIn />
      ) : (
        <StoreProvider>
          <Portal />
        </StoreProvider>
      )}
      <TasksProvider></TasksProvider>
    </div>
  );
  // TasksContext to replace Store
}

export default App;
