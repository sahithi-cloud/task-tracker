import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], onDelete, onComplete, darkMode }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            darkMode={darkMode}
          />
        ))
      ) : (
        <p
          className={`text-center ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          No tasks available
        </p>
      )}
    </div>
  );
};

export default TaskList;
