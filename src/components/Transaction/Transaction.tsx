import { useRef, useState } from 'react';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addExpense } from '../../store/Transaction/transaction-action';
import styles from './Transaction.module.scss';

const formFields = {
  title: null,
  category: 'food',
  amount: 0,
  date: null
}

const Transaction = (): ReactElement => {
  const dispatch = useDispatch();
  const transactionForm = useRef<HTMLFormElement>(null);
  const [validated, setValidated] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<any>({...formFields});

  const isFormValid = (): boolean => {
    const invalidItems = Object.keys(formValues).filter((key: string) => (
      formValues[key] === null || formValues[key] === '' || formValues[key] === 0
    ));
    return invalidItems.length <= 0;
  }

  const handleSubmit = (event: any): void => {
    if (!isFormValid()) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    dispatch(addExpense(formValues));
    transactionForm?.current?.reset();
  }

  const handleChange = (
    value: string | number,
    key: string
  ): void => {
    setFormValues({
      ...formValues,
      [key]: value
    })
  }

  return (
    <div>
      <h4>Add Expense</h4>
      <Form validated={validated} ref={transactionForm} noValidate>
        <Container className={styles.row}>
          <Row>
            <Col className={styles.col}>
              <Form.Group>
                <Form.Label>
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={(e) => handleChange(e.target.value, 'title')}
                  className="et-input"
                  required 
                />
              </Form.Group>
            </Col>
            <Col className={styles.col}>
              <Form.Group>
                <Form.Label>
                  Category
                </Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Category"
                  onChange={(e) => handleChange(e.target.value, 'category')}
                  className="et-input"
                  required
                >
                  <option value="food">Food</option>
                  <option value="utility bill">Utility Bill</option>
                  <option value="subscription">Subscription</option>
                  <option value="transportation">Transportation</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Form.Group className={styles.row}>
          <Form.Label>
            Amount
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount"
            onChange={(e) => handleChange(e.target.value, 'amount')}
            className="et-input"
            required
          />
        </Form.Group>
        <Form.Group className={styles.row}>
          <Form.Label>
            Date
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => handleChange(e.target.value, 'date')}
            className="et-input"
            required
          />
        </Form.Group>

        <div className={styles.buttonWrapper}>
          <Button type="button" className="et-btn" onClick={handleSubmit}>
            Add Expense
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Transaction;
