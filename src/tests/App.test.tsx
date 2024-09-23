import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
  within,
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

// This test first adds an idea - as there needs to be an idea available to edit.
// Then edits the idea, submits the changes and checks that the idea has been updated
test('user can edit an idea', async () => {
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
  fireEvent.change(titleInput, { target: { value: 'Original Idea' } });
  fireEvent.change(descriptionInput, {
    target: { value: 'This is the original idea description.' },
  });

  // Check that the inputs have the correct values
  expect(titleInput).toHaveValue('Original Idea');
  expect(descriptionInput).toHaveValue(
    'This is the original idea description.',
  );

  // Simulate clicking the submit button
  fireEvent.click(submitButton);

  // Wait for the form to be reset and the new idea to appear in the idea list
  await waitFor(() => {
    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(screen.getByText('Original Idea')).toBeInTheDocument();
    expect(
      screen.getByText('This is the original idea description.'),
    ).toBeInTheDocument();
  });

  // Find the edit button for the newly added idea
  const editButton = screen.getByAltText('pen icon');

  // Simulate clicking the edit button
  fireEvent.click(editButton);

  // Wait for the edit form to load
  const editForm = await waitFor(() =>
    screen.getByText('Update Idea').closest('form'),
  );

  // add null check for edit form to avoid ts error
  if (editForm == null) {
    throw new Error('Edit form not found');
  }

  // Use within to scope the queries to the edit form
  const editTitleInput = within(editForm).getByPlaceholderText('Title');
  const editDescriptionInput =
    within(editForm).getByPlaceholderText('Description');
  const editSubmitButton = within(editForm).getByRole('button', {
    name: 'Submit',
  });

  // Simulate user typing into the title and description fields
  fireEvent.change(editTitleInput, { target: { value: 'Edited Idea' } });
  fireEvent.change(editDescriptionInput, {
    target: { value: 'This is the edited idea description.' },
  });

  // Simulate clicking the submit button
  fireEvent.click(editSubmitButton);

  // Wait for the form to submit and the edited idea to appear in the idea list
  await waitFor(() => {
    expect(screen.getByText('Edited Idea')).toBeInTheDocument();
    expect(
      screen.getByText('This is the edited idea description.'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Original Idea')).not.toBeInTheDocument();
    expect(
      screen.queryByText('This is the original idea description.'),
    ).not.toBeInTheDocument();
  });
});
