import { fetchExpenses, postExpense, deleteExpense, fetchIncome, putIncome } from "../../data-services";
import { transactionActions } from "./transaction";

export const getExpenses = () => {
	return async (dispatch) => {

		const getAllExpensesData = async () => {
			const response = await fetchExpenses();
			return await response.json();
		}

		try {
			let expenses = await getAllExpensesData();
			expenses = expenses ? Object.keys(expenses).map(key => ({
				id: key,
				...expenses[key]
			})) : []

			dispatch(transactionActions.setExpenses(expenses));
			dispatch(transactionActions.setIsLoading(false));
		} catch (error) {
			getAllExpensesData().catch(() =>
				alert('Error fetching expenses')
			)
		}
	}
}

export const addExpense = (expense) => {
	return async (dispatch) => {

		const addExpenseData = async () => {
			const response = await postExpense(expense);
			return await response.json();
		}

		try {
			dispatch(transactionActions.setIsLoading(true));

			const addedExpense = await addExpenseData();
			dispatch(transactionActions.addExpense({
				id: addedExpense.name,
				...expense
			}));

			dispatch(transactionActions.setIsLoading(false));
		} catch (error) {
			addExpenseData.catch(() => 
				alert('Error adding expense')
			);
		}
	}
}

export const removeExpense = (expense) => {
	return async (dispatch) => {
		
		const deleteExpenseData = async () => {
			const response = await deleteExpense(expense.id);
			return response.json();
		}

		try {
			await deleteExpenseData();
			dispatch(transactionActions.removeExpense(expense))
		} catch {
			deleteExpenseData().catch(() => {
				alert('error deleting expense')
			});
		}
	}
}

export const getIncome = () => {
	return async (dispatch) => {
		
		const incomeData = async () => {
			const response = await fetchIncome();
			return response.json();
		}

		try {
			const income = await incomeData();
			dispatch(transactionActions.setIncome(income));
		} catch {
			incomeData.catch(() => {
				alert('error fetching income');
			});
		}
	}
}

export const updateIncome = (income) => {
	return async (dispatch) => {

		const incomeData = async () => {
			const response = await putIncome(income);
			return response.json();
		}

		try {
			await incomeData();
			dispatch(transactionActions.setIncome(income));
		} catch {
			incomeData.catch(() => {
				alert('error updating income data');
			});
		}
	}
}

