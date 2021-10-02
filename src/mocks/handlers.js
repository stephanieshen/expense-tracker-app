import { rest } from 'msw';

const postExpense = rest.post('/expenses.json', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      id: '123',
      title: 'Chatime',
      category: 'Food',
      amount: '300.00',
      date: '31/08/2021'
    })
  )
})

const getExpenses = rest.get('/expenses.json', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: '123',
        title: 'Chatime',
        category: 'Food',
        amount: '300.00',
        date: '31/08/2021'
      },
      {
        id: '456',
        title: 'Burger',
        category: 'Food',
        amount: '300.00',
        date: '31/08/2021'
      }
    ])
  )
})

export const handlers = [
  postExpense,
  getExpenses
];
