import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '@/App';
import { IdeaProvider } from '@/context/IdeaContext';

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
