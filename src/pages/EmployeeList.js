import React, { useEffect, useState } from "react";
import EmployeeService from "../api/EmployeeService";
import EmployeeCard from "../components/EmployeeCard";
import AddEmployeeModal from "../components/AddEmployeeModal";
import EditEmployeeModal from "../components/EditEmployeeModal";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");  

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const loadEmployees = () => {

  
    if (department !== "") {
      EmployeeService.filterByDepartment(department, page, 5).then(res => {
        setEmployees(res.data.content);
        setTotalPages(res.data.totalPages);
      });
      return;
    }

    
    if (search.trim() !== "") {
      EmployeeService.searchEmployees(search, page, 5).then(res => {
        setEmployees(res.data.content);
        setTotalPages(res.data.totalPages);
      });
    } 
    
    else {
      EmployeeService.getEmployees(page, 5).then(res => {
        setEmployees(res.data.content);
        setTotalPages(res.data.totalPages);
      });
    }
  };

  useEffect(() => {
    loadEmployees();
  }, [page, department]);  

  const handleAdd = (emp) => {
    EmployeeService.addEmployee(emp).then(() => loadEmployees());
  };

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
    setShowEdit(true);
  };

  const handleUpdate = (emp) => {
    EmployeeService.updateEmployee(emp.id, emp).then(() => loadEmployees());
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.deleteEmployee(id).then(() => loadEmployees());
    }
  };

  const handleSearch = () => {
    setPage(0);
    loadEmployees();
  };

  return (
    <Container>

      <h2 className="mt-3">Employee Management</h2>

      
      <Row className="mt-3">
        <Col md={4}>
          <Form.Control
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
        <Col className="text-end">
          <Button onClick={() => setShowAdd(true)}>Add Employee</Button>
        </Col>
      </Row>

      
      <Row className="mt-3">
        <Col md={4}>
          <Form.Select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setPage(0);
            }}
          >
            <option value="">Filter by Department</option>
            <option value="HR">HR</option>
            <option value="Testing">Testing</option>
            <option value="Sales">Sales</option>
            <option value="Law">Law</option>
            <option value="Development">Development</option>
          </Form.Select>
        </Col>
      </Row>

      
      {employees.length === 0 && (
        <h4 className="text-center mt-4 text-muted">No records found</h4>
      )}

      
      <Row className="mt-4">
        {employees.map(emp => (
          <Col md={4} key={emp.id}>
            <EmployeeCard
              emp={emp}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Col>
        ))}
      </Row>

      
      <Row className="mt-4">
        <Col className="text-center">
          <Button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Previous
          </Button>{" "}
          <Button disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </Col>
      </Row>

      
      <AddEmployeeModal
        show={showAdd}
        handleClose={() => setShowAdd(false)}
        onSave={handleAdd}
      />

      {selectedEmployee && (
        <EditEmployeeModal
          show={showEdit}
          handleClose={() => setShowEdit(false)}
          onSave={handleUpdate}
          employee={selectedEmployee}
        />
      )}

    </Container>
  );
}

export default EmployeeList;

