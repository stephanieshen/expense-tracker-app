import { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";

interface AddIncomeProps {
  showModal: boolean,
  handleClose: any,
  add: any
}

const AddIncome = ({
  showModal,
  handleClose,
  add
} : AddIncomeProps) => {
  const [amount, setAmount] = useState<number>(0);

  const handleAmount = (value: number): void => {
    setAmount(value);
  }

  const addAmount = () => {
    add(amount);
  }

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Add Income
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Form.Group>
              <Form.Label>
                Amount
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="0.00"
                onChange={(e) => handleAmount(+e.target.value)}
                className="et-input"
                required 
              />
            </Form.Group>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="et-btn et-btn--danger"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="et-btn"
          onClick={addAmount}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddIncome;
