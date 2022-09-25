import React from 'react';
import './styles/App.scss';
import { SignIn } from './pages/SignIn';
import { Portal } from './pages/Portal';
import { useAuth } from './contexts/AuthContext';
import { TasksProvider } from './contexts/TasksContext';
import { AddTaskModal } from './components/AddTaskModal';

function App() {
  const { currentUser } = useAuth();

  return (
    <div id="App">
      {!currentUser ? (
        <SignIn />
      ) : (
        <TasksProvider>
          <AddTaskModal />
          <Portal />
        </TasksProvider>
      )}
    </div>
  );
}

export default App;
