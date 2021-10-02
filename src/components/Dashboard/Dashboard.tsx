import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Dashboard.module.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddIncome from '../AddIncome/AddIncome';
import { updateIncome } from '../../store/Transaction/transaction-action';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const transaction = useSelector((state: RootStateOrAny) => state.transaction);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const addIncome = async (amount: number) => {
    const updatedIncome = transaction.income + amount;
    await dispatch(updateIncome(updatedIncome));
    handleClose();
  }

  return (
    <div>
      <div className={styles.income}>
        <h5 className={styles.label}>
          Income
        </h5>
        <h2 className={styles.amount}>
          Php &nbsp;
          <span data-testid="income">
            {formatCurrency(transaction.income)}
          </span>
          <button
            className={`et-btn ${styles.addIcon}`}
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </h2>

        <AddIncome
          showModal={showModal}
          handleClose={handleClose}
          add={addIncome}
        />
      </div>

      <Container>
        <Row>
          <Col className={styles.col}>
            <div className={styles.card}>
              <h5 className={`${styles.label} ${styles.white}`}>
                Expense
              </h5>
              <h2 className={styles.amount}>
                Php &nbsp;
                <span data-testid="expense-total">
                  {formatCurrency(transaction.totalExpenses)}
                </span>
              </h2>
            </div>
          </Col>
          <Col className={styles.col}>
            <div className={styles.card}>
              <h5 className={`${styles.label} ${styles.white}`}>
                Balance
              </h5>
              <h2 className={styles.amount}>
                Php &nbsp;
                <span data-testid="balance">
                  {formatCurrency(transaction.income - transaction.totalExpenses)}
                </span>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
