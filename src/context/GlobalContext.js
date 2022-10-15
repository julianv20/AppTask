import { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Title one',
      description: 'Description one',
      done: false,
    },
    {
      id: '2',
      title: 'Title two',
      description: 'Description two',
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: v4() } });
  };

  const updateTask = (task) => {
    dispatch({ type: 'UPDATE_TASK', payload: task });
  };
  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, updateTask, deleteTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
