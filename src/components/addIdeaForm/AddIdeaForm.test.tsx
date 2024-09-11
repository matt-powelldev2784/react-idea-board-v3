import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import { AddIdeaForm } from './AddIdeaForm';

test('user can type in the inputs', () => {
  render(<AddIdeaForm />);

  const titleInput = screen.getByPlaceholderText('Title');
  const descriptionInput = screen.getByPlaceholderText('Description');

  // Simulate user typing into the title and description fields
  fireEvent.change(titleInput, { target: { value: 'New Idea' } });
  fireEvent.change(descriptionInput, {
    target: { value: 'This is a new idea description.' },
  });

  expect(titleInput).toHaveValue('New Idea');
  expect(descriptionInput).toHaveValue('This is a new idea description.');
});
