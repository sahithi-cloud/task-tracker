# Task Tracker Application

## Description
A responsive Task Tracker application built with **React.js** and **Tailwind CSS**. It helps users manage their daily tasks with features inspired by the "My Day" UI. The code is designed to emphasize organization, reuse of components, and responsive design.

---

## Features
- **Add Tasks**: Input field to add new tasks.
- **Complete Tasks**: Checklist button for marking tasks as complete.
- **Delete Tasks**: Trash icon for removing tasks.
- **Dynamic Title**: "My Day" title with current date.
- **Dark Mode**: Toggle between light and dark themes.

---

## Installation
1. Create a React app:
   ```bash
   npx create-react-app task-tracker
   cd task-tracker
   ```
2. Install dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer react-icons
   npx tailwindcss init
   ```
3. Configure Tailwind:
   - Update `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}'],
       theme: { extend: {} },
       plugins: [],
     };
     ```
   - Add to `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
4. Replace default files with provided components.
5. Start the app:
   ```bash
   npm start
   ```

---

## Components
1. **`Header.js`**: Displays the title, date, and dark mode toggle.
2. **`TaskForm.js`**: Input field for adding tasks.
3. **`TaskList.js`**: Displays tasks or an empty message.
4. **`TaskItem.js`**: Checklist and trash icons for task management.

---
# Example Usage

# Adding a Task

Enter a task in the input field.

Click the "Add" button to add it to the task list.

# Marking a Task as Complete

Click the green checklist icon to mark a task as complete.

Completed tasks are visually indicated by a green background on the checklist button.

# Deleting a Task

Click the trash icon to remove the task from the list.

---

## Future Enhancements
- Task categories (e.g., Work, Personal).
- Assign due dates to tasks.
- Save tasks to local storage.
- Progress bar for completed tasks.

---

## Technologies Used
- **React.js** for UI development.
- **Tailwind CSS** for styling.
- **React Icons** for interactive icons.

