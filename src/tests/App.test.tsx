import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import App from '@/App';
import { IdeaProvider } from '@/context/IdeaContext';

afterEach(() => {
  cleanup();
  localStorage.clear();
});

test('user can submit a new idea', async () => {
  render(
    <IdeaProvider>
      <App />
    </IdeaProvider>,
  );

  // Find the input fields and submit button
  const titleInput = screen.getByPlaceholderText('Title');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  // Simulate user typing into the title and description fields
  fireEvent.change(titleInput, { target: { value: 'New Idea' } });
  fireEvent.change(descriptionInput, {
    target: { value: 'This is a new idea description.' },
  });

  // Check that the inputs have the correct values
  expect(titleInput).toHaveValue('New Idea');
  expect(descriptionInput).toHaveValue('This is a new idea description.');

  // Simulate clicking the submit button
  fireEvent.click(submitButton);

  // check that the form has reset and the new idea card is displayed
  await waitFor(() => {
    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(screen.getByText('New Idea')).toBeInTheDocument();
    expect(
      screen.getByText('This is a new idea description.'),
    ).toBeInTheDocument();
  });
});

// This test first adds an idea - as there needs to be an idea available to delete
// Then it deletes the idea
test('user can delete an idea', async () => {
  render(
    <IdeaProvider>
      <App />
    </IdeaProvider>,
  );

  // Find the input fields and submit button
  const titleInput = screen.getByPlaceholderText('Title');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  // Simulate user typing into the title and description fields
  fireEvent.change(titleInput, { target: { value: 'Idea to delete' } });
  fireEvent.change(descriptionInput, {
    target: { value: 'This is a new idea description which will be deleted' },
  });

  // Simulate clicking the submit button
  fireEvent.click(submitButton);

  // Wait for the form to be reset and the new idea to appear in the idea list
  await waitFor(() => {
    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(screen.getByText('Idea to delete')).toBeInTheDocument();
    expect(
      screen.getByText('This is a new idea description which will be deleted'),
    ).toBeInTheDocument();
  });

  // Find the delete button for the newly added idea
  const deleteButton = screen.getAllByAltText('white bin icon')[0];

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // Wait for the idea to be removed from the idea list
  await waitFor(() => {
    expect(screen.queryByText('Idea to delete')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'This is a new idea description which will be deleted',
      ),
    ).not.toBeInTheDocument();
  });
});
