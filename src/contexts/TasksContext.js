import { createContext, useContext, useEffect, useState } from 'react';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const TasksCotnext = createContext();
export const useTasks = () => {
  return useContext(TasksCotnext);
};

export const TasksProvider = ({ children }) => {
  const { currentUser } = useAuth();

  const [vendorInfo, setVendorInfo] = useState({
    tasks: [],
    employees: [],
  });

  useEffect(() => {
    getVendorInfo();
  }, []);

  const getVendorInfo = async () => {
    const vendor = await getDoc(
      doc(collection(db, 'vendors'), `${currentUser.uid}`)
    );
    setVendorInfo(vendor.data());
  };

  const getTaskInfo = async (taskID) => {
    // return task / taskInfo
  }; // for single task details page

  const addTask = async (taskInfo) => {
    const docRef = doc(collection(db, 'companies'), 'dell');
    await updateDoc(docRef, {
      tasks: arrayUnion(taskInfo),
    });
    // getVendorInfo() - test to see if this is needed (or not) for the page to rerender newly added tasks
  }; // once testing is complete, switch 'companies' to 'vendors' and 'dell' to the uid

  const filterTasks = () => {};

  const value = {
    vendorInfo,
    addTask,
  };
  return (
    <TasksCotnext.Provider value={value}>
      {children}
      <button>Tasks Context Test</button>
    </TasksCotnext.Provider>
  );
};
