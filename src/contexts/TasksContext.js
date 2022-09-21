import { createContext, useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { app, db } from '../firebase';

const TasksCotnext = createContext();
export const useTasks = () => {
  return useContext(TasksCotnext);
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState();
  const [status, setStatus] = useState({
    loading: true,
    error: null,
  });

  const testTasksContext = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: ' Another Test',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const value = {
    // tasks,
    // status,
  };
  return (
    <TasksCotnext.Provider value={value}>
      <button onClick={testTasksContext}>Tasks Context Test</button>
    </TasksCotnext.Provider>
  );
};
