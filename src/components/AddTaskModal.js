import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';

export const AddTaskModal = () => {
  const { addTask } = useTasks();

  const [formInput, setFormInput] = useState({
    id: 2,
    description: '',
    multiDay: false,
    timeframe: {
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
    },
    employees: [
      {
        name: 'Joe Momma',
        timeIn: [],
        timeOut: [],
      },
    ],
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(formInput);
  };

  return (
    <div id="AddTaskModal">
      <div>
        <h2>Request new Task</h2>
        <form action="">
          <div>
            <label htmlFor="">Task description:</label>
            <input
              type="text"
              onChange={(e) =>
                setFormInput({ ...formInput, description: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) =>
                setFormInput({ ...formInput, multiDay: !formInput.multiDay })
              }
            />
            <label htmlFor="">Multiple days?</label>
          </div>
          <div>
            <label htmlFor="">Start date:</label>
            <input
              type="date"
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  timeframe: {
                    ...formInput.timeframe,
                    startDate: e.target.value,
                  },
                })
              }
            />
          </div>
          {formInput.multiDay && (
            <div>
              <label htmlFor="">End date:</label>
              <input
                type="date"
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    timeframe: {
                      ...formInput.timeframe,
                      endDate: e.target.value,
                    },
                  })
                }
              />
            </div>
          )}
          <div>
            <label htmlFor="">Start time:</label>
            <input
              type="time"
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  timeframe: {
                    ...formInput.timeframe,
                    startTime: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">End time:</label>
            <input
              type="time"
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  timeframe: {
                    ...formInput.timeframe,
                    endTime: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">Employees</label>
            {/* <select name="employees" id="employees">
              {companyInfo.employees.map((emp) => (
                <option value={emp} key={emp}>
                  {emp}
                </option>
              ))}
            </select> */}
          </div>
          <button type="submit" onClick={handleAddTask}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
