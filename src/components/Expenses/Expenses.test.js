import { render, screen, waitFor } from "../../test-utils/testing-library-utils";
import Expenses from "./Expenses";

test('render each expense item without crashing', async () => {
  render(<Expenses />);

  const title = screen.getByRole('heading', { name: /all expenses/i });
  expect(title).toBeInTheDocument();

  const loading = screen.getByTestId('loading-wrapper');
  expect(loading).toBeInTheDocument();

  await waitFor(async () => {
    const expenses = await screen.queryAllByTestId('expense-item');
    const icon = await screen.queryAllByTestId('expense-icon');
    const title = await screen.queryAllByRole('heading');
    const price = await screen.queryAllByText('Php', { exact: false });

    expenses.map((expense, index) => {
      expect(expense).toContainElement(icon[index])
      expect(title[index]).toBeInTheDocument()
      expect(price[index]).toBeInTheDocument()
    });
  });
});
