import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onComplete, darkMode }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg mb-2 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="flex items-center">
        <button
          onClick={() => onComplete(task.id)}
          className={`p-2 rounded-full ${
            task.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          <FaCheck />
        </button>
        <span className="ml-4">{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="p-2 text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
