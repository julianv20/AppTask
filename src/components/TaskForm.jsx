import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

export const TaskForm = () => {
  const { addTask, updateTask, tasks } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  console.log();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate('/');
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    console.log(taskFound, params.id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center  items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1 font-semibold">
          {task.id ? 'Editing' : 'Creating a task'}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="mb5">
          <textarea
            name="description"
            rows="2"
            placeholder="Write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="bg-green-400 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {task.id ? 'Edite task' : 'Create task'}
        </button>
      </form>
    </div>
  );
};
