import { createContext, useContext, useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const TasksCotnext = createContext();
export const useTasks = () => {
  return useContext(TasksCotnext);
};

export const TasksProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState({
    tasks: [],
    employees: [],
  });

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const getCompanyInfo = async () => {
    const employees = await getDoc(doc(collection(db, 'companies'), 'dell'));
    setCompanyInfo(employees.data());
  };

  const getTaskInfo = async (taskID) => {
    const testRef = doc(db, 'dell', 'tasks', 'active', 'testTask');
    const testSnap = await getDoc(testRef);
    console.log(testSnap.data());
  };

  const testTasksContext = async () => {
    // try {
    //   const docRef = await addDoc(collection(db, 'users'), {
    //     first: ' Another Test',
    //     last: 'Lovelace',
    //     born: 1815,
    //   });
    //   console.log('Document written with ID: ', docRef.id);
    // } catch (e) {
    //   console.error('Error adding document: ', e);
    // }
    // const usersRef = doc(db, 'users', 'wye0w9rkFajY6IxdfJm0');
    // const usersSnap = await getDoc(usersRef);
    // console.log(usersSnap.data());
    // const tasksCol = collection(db, 'dell', 'tasks', 'active');
    // const taskRef = doc(tasksCol, 'testTask');
    // const taskSnap = await getDoc(taskRef);
    // console.log(taskSnap.data());
    // const tasksSnap = await getDoc(tasksRef);
    // console.log(tasksSnap.data());
    // const querySnapshot = await getDocs(collection(db, 'companies'));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, ' => ', doc.data());
    // });
  };

  const value = {
    companyInfo,
  };
  return (
    <TasksCotnext.Provider value={value}>
      {children}
      <button onClick={getCompanyInfo}>Tasks Context Test</button>
    </TasksCotnext.Provider>
  );
};
