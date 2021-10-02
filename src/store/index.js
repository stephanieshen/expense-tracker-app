import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from './Transaction/transaction';

export const store = configureStore({
	reducer: {
		transaction: transactionReducer
	}
});

export default store;
