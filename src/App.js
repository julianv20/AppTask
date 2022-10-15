import { Heading } from './components/Heading';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-20">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
