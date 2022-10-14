import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const AddTaskModal = ({ setModalOpen }) => {
  const tasksURL = '/1/tasks';
  const initForm = {
    // id: uuid,
    // status: 'pending',
    // requested: timestamp,
    description: 'Testing: Add new task to API from form.',
    timeframe: {
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
    },
    employees: [],
  };
  const [formInput, setFormInput] = useState(initForm);

  const handleAddTask = (e) => {
    e.preventDefault();
    // perform form checks (e.g. start date AFTER end date, etc.) before submitting the form to addTask()
    axios.post(tasksURL, formInput);
    setModalOpen(false);
  };

  const employeesURL = '/1/employees';
  const [userEmployees, setUserEmployees] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(employeesURL)
        .then((response) => setUserEmployees(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [query, setQuery] = useState('');
  const filteredEmps = userEmployees.filter(
    (emp) => query !== '' && emp.name.toLowerCase().includes(query)
  );
  const addEmployee = (e, emp) => {
    e.preventDefault();
    const existingEmp = formInput.employees.find(
      (employee) => employee.id == emp.id
    );
    if (!existingEmp) {
      setFormInput({
        ...formInput,
        employees: [
          ...formInput.employees,
          {
            id: emp.id,
            name: emp.name,
            checkIn: [],
            checkOut: [],
          },
        ],
      });
    }
  };
  const removeEmployee = (e, empId) => {
    e.preventDefault();
    const newList = formInput.employees.filter((emp) => emp.id !== empId);
    setFormInput({ ...formInput, employees: newList });
  };

  return (
    <div id="AddTaskModal">
      <div className="card">
        <button className="close" onClick={() => setModalOpen(false)}>
          X
        </button>
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
          <div className="employees">
            <label htmlFor="">Employees:</label>
            <input
              type="text"
              placeholder="Search for employee."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="lists">
              <div className="added">
                <h3>Added:</h3>
                {formInput.employees.map((emp) => (
                  <div>
                    <p>{emp.name}</p>
                    <button
                      key={emp.id}
                      onClick={(e) => removeEmployee(e, emp.id)}
                    >
                      remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="searched">
                {filteredEmps &&
                  filteredEmps.map((emp) => (
                    <button key={emp.id} onClick={(e) => addEmployee(e, emp)}>
                      {emp.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div className="buttons">
            <button type="submit" onClick={handleAddTask}>
              Submit
            </button>
            <button type="reset" onClick={() => setFormInput(initForm)}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
