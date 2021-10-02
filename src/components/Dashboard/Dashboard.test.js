import { render, screen } from '../../test-utils/testing-library-utils';
import Dashboard from './Dashboard';

test('render dashboard without crashing', () => {
  render(<Dashboard />);

  const income = screen.getByRole('heading', { name: /income/i });
  expect(income).toBeInTheDocument();

  const expense = screen.getByRole('heading', { name: /expense/i });
  expect(expense).toBeInTheDocument();

  const balance = screen.getByRole('heading', { name: /balance/i });
  expect(balance).toBeInTheDocument();

  const amount = screen.getAllByText('Php', { exact: false });
  expect(amount).toHaveLength(3);
});
