import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expense } from "../../../models/expense.model";
import { formatCurrency } from "../../../services";
import CategoryIcon from "../../CategoryIcon/CategoryIcon";
import styles from './ExpenseItem.module.scss';
interface ExpenseItemProps {
  expense: Expense,
  deleteExpense: Function
}

const ExpenseItem = ({ expense, deleteExpense } : ExpenseItemProps) => {
  return (
    <>
      <div data-testid="expense-item" className={styles.expenseItem}>
        <div data-testid="expense-icon" className={styles.iconWrapper}>
          <CategoryIcon category={expense.category} />
        </div>
        <div className={styles.info}>
          <h5 className={styles.title}>
            {expense.title}
          </h5>
          <p className={styles.category}>
            {expense.category}
          </p>
        </div>
        <p className={styles.amount}>
          Php {formatCurrency(expense.amount)}
        </p>

        <button
          className={`et-btn ${styles.deleteExpenseBtn}`}
          onClick={() => deleteExpense(expense)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </>
  )
}

export default ExpenseItem;
