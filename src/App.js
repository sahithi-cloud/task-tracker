import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  // Update current date
  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    setCurrentDate(today.toLocaleDateString('en-US', options));
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      } min-h-screen`}
    >
      <div className="max-w-md mx-auto p-4">
        <Header
          title="My Day"
          subtitle={currentDate}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <TaskForm onAddTask={addTask} darkMode={darkMode} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onComplete={toggleComplete}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default App;
