import { createSlice } from "@reduxjs/toolkit"
import { findIndex } from 'lodash'

const getTotalExpenses = (expenses) => {
	return expenses.reduce((total, expense) => {
		total += +expense.amount
		return total;
	}, 0);
}

const transactionsState = {
	isLoading: true,
	income: 0,
  expenses: [],
	totalExpenses: 0
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState: transactionsState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
		setIncome(state, action) {
			state.income = action.payload
		},
		setExpenses(state, action) {
			state.expenses = action.payload;
			state.totalExpenses = getTotalExpenses(state.expenses);
		},
		addExpense(state, action) {
			state.expenses.push(action.payload);
			state.totalExpenses = getTotalExpenses(state.expenses);
		},
		removeExpense(state, action) {
			const index = findIndex(state.expenses, { 
				id: action.payload.id 
			}); 
			state.expenses.splice(index, 1);
			state.totalExpenses = getTotalExpenses(state.expenses);
		}
	}
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
