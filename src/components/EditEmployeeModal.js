import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditEmployeeModal({ show, handleClose, onSave, employee }) {

  const [emp, setEmp] = useState(employee);

  useEffect(() => {
    setEmp(employee);
  }, [employee]);

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
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            name="name"
            value={emp?.name}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="email"
            value={emp?.email}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="phone"
            value={emp?.phone}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="department"
            value={emp?.department}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            name="salary"
            value={emp?.salary}
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
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditEmployeeModal;
