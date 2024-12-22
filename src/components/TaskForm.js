import React, { useState } from 'react';

const TaskForm = ({ onAddTask, darkMode }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className={`w-full p-4 rounded-lg focus:outline-none ${
          darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400'
            : 'bg-white text-black placeholder-gray-500'
        }`}
      />
    </form>
  );
};

export default TaskForm;
