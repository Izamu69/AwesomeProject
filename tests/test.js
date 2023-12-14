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

