import { render, screen } from '../../test-utils/testing-library-utils';
import Transaction from './Transaction';

test('render form without crashing', () => {
  render(<Transaction />);

  const addExpenseTitle = screen.getByRole('heading', { name: /add expense/i });
  expect(addExpenseTitle).toBeInTheDocument();

  const expenseTitle = screen.getByPlaceholderText(/title/i);
  expect(expenseTitle).toBeInTheDocument();

  const expenseCategory = screen.getByPlaceholderText(/category/i);
  expect(expenseCategory).toBeInTheDocument();

  const expenseAmount = screen.getByPlaceholderText(/amount/i);
  expect(expenseAmount).toBeInTheDocument();

  const expenseDate = screen.getByPlaceholderText(/date/i);
  expect(expenseDate).toBeInTheDocument();

  const addExpenseButton = screen.getByRole('button', { name: /add expense/i });
  expect(addExpenseButton).toBeInTheDocument();
});

