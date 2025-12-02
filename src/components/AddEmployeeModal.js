import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddEmployeeModal({ show, handleClose, onSave }) {

  const [emp, setEmp] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(emp);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="department"
            placeholder="Department"
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="salary"
            placeholder="Salary"
            onChange={handleChange}
            className="mb-2"
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployeeModal;
