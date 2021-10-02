import { render, screen } from '../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('adding of expense', () => {
  render(<App />);

  const expenseTotal = screen.getByTestId('expense-total');
  expect(expenseTotal).toHaveTextContent('0.00');

  const titleInput = screen.getByPlaceholderText(/title/i);
  userEvent.type(titleInput, 'Chatime');

  const categorySelect = screen.getByPlaceholderText(/category/i);
  userEvent.selectOptions(categorySelect, 'food');

  const amountInput = screen.getByPlaceholderText(/amount/i);
  userEvent.type(amountInput, '300.00');

  const dateInput = screen.getByPlaceholderText(/date/i);
  userEvent.type(dateInput, '31/08/2021');

  const addExpenseButton = screen.getByRole('button', { name: /add expense/i });
  userEvent.click(addExpenseButton);
});