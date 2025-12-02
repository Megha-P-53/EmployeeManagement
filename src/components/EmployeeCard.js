import React from "react";
import { Card, Button } from "react-bootstrap";

function EmployeeCard({ emp, onEdit, onDelete }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{emp.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{emp.department}</Card.Subtitle>
        <Card.Text>
          <strong>Email:</strong> {emp.email} <br />
          <strong>Phone:</strong> {emp.phone} <br />
          <strong>Salary:</strong> ₹{emp.salary}
        </Card.Text>

        <Button variant="primary" size="sm" onClick={() => onEdit(emp)}>
          Edit
        </Button>{" "}
        <Button variant="danger" size="sm" onClick={() => onDelete(emp.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;
