import { createContext, useReducer } from 'react';

export const Store = createContext();

const initState = {
  Dell: {
    name: 'Dell',
    employees: [],
    tasks: {
      active: [
        {
          id: '0000001',
          requested: '',
          approved: {
            status: true,
          },
          description:
            'Description of task being performed for access request.',
          multiDay: false,
          startDate: '09/01/22',
          endDate: '09/01/22',
          startTime: '10:30:00',
          endTime: '15:30:00',
          employees: [
            {
              name: 'John Doe',
              timeIn: '12:03:00',
              timeOut: '02:29:00',
            },
            {
              name: 'Jane Doe',
              timeIn: '11:15:00',
              timeOut: '',
            },
          ],
        },
        {
          id: '0000002',
          requested: '',
          approved: {
            status: true,
          },
          description:
            'Description of task being performed for access request.',
          multiDay: false,
          startDate: '09/02/22',
          endDate: '09/02/22',
          startTime: '10:30:00',
          endTime: '15:30:00',
          employees: [
            {
              name: 'John Doe',
              timeIn: '',
              timeOut: '',
            },
            {
              name: 'Jane Doe',
              timeIn: '',
              timeOut: '',
            },
          ],
        },
      ],
    },
  },
  // IBM: {
  //   name: 'IBM',
  //   employees: [],
  //   tasks: {
  //     active: [],
  //     completed: [],
  //     pending: [],
  //   },
  // },
  // have the initial state only pull the specified company's tasks
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      console.log('Store reducer test');
      return { ...state };
    case 'GET_TASKS':
      //const tasks = state.Dell;
      console.log(state.Dell.tasks);
      return state.Dell.tasks;
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
