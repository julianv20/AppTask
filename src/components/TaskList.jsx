import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);
  return (
    <div className="flex justify-center">
      {/* <button onClick={() => deleteTask()}>delete all</button> */}
      <div className="w-6/12">
        {tasks.map(({ id, title, description }) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={id}
          >
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div>
              <Link
                to={`/edit/${id}`}
                className="bg-gray600 hover:bg-gray-500 py-2 px-4 mr-2"
                t
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
