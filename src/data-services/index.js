import { endpoint } from "../firebase/firebase";

export const postExpense = async (expense) => {
  return await fetch(
    endpoint + 'expenses.json',
    {
      method: 'POST',
      body: JSON.stringify(expense)
    }
  ); 
}

export const fetchExpenses = async () => {
  return await fetch(
    endpoint + 'expenses.json',
    {
      method: 'GET'
    }
  );
}

export const deleteExpense = async (expenseId) => {
  return await fetch(
    endpoint + `expenses/${expenseId}.json`,
    {
      method: 'DELETE'
    }
  )
}

export const fetchIncome = async () => {
  return await fetch(
    endpoint + 'income.json',
    {
      method: 'GET'
    }
  );
}

export const putIncome = async (income) => {
  return await fetch(
    endpoint + 'income.json',
    {
      method: 'PUT',
      body: JSON.stringify(income)
    }
  );
}
