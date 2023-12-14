import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('adding a task updates the tasks state', () => {
  // Render the component
  const { getByPlaceholderText, getByText } = render(<App />);

  // Type a task into the input
  const input = getByPlaceholderText('Enter task');
  fireEvent.changeText(input, 'New Task');

  // Click the Add Task button
  const addButton = getByText('Add Task');
  fireEvent.press(addButton);

  // Check if the task is added to the tasks state
  const addedTask = getByText('New Task');
  expect(addedTask).toBeDefined();
});

test('editing a task updates it in the tasks state', () => {
  // Render the component
  const { getByText, getByPlaceholderText } = render(<App />);

  // Mock some tasks
  const originalTask = 'Original Task';
  const updatedTask = 'Updated Task';

  // Add a task to the state
  fireEvent.changeText(getByPlaceholderText('Enter task'), originalTask);
  fireEvent.press(getByText('Add Task'));

  // Edit the task
  const editButton = getByText('Edit');
  fireEvent.press(editButton);

  // Update the task
  fireEvent.changeText(getByPlaceholderText('Enter task'), updatedTask);
  fireEvent.press(getByText('Update Task'));

  // Check if the task is updated in the tasks state
  const updatedTaskElement = getByText(updatedTask);
  expect(updatedTaskElement).toBeDefined();
});
