import React, { useEffect, useState } from "react";
import EmployeeService from "../api/EmployeeService";
import { Card, Row, Col, Container } from "react-bootstrap";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    EmployeeService.getDashboard().then(res => {
      setData(res.data);
    });
  }, []);

  if (!data) return <h4 className="text-center mt-5">Loading Dashboard...</h4>;

  return (
    <Container>
      <h2 className="mt-4 mb-4">Employee Dashboard</h2>

      <Row>
        <Col md={3}>
          <Card className="p-3 text-center shadow">
            <h4>Total Employees</h4>
            <h2>{data.total}</h2>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 text-center shadow">
            <h5>HR</h5>
            <h3>{data.hr}</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 text-center shadow">
            <h5>Testing</h5>
            <h3>{data.testing}</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 text-center shadow">
            <h5>Sales</h5>
            <h3>{data.sales}</h3>
          </Card>
        </Col>

        <Col md={3} className="mt-3">
          <Card className="p-3 text-center shadow">
            <h5>Law</h5>
            <h3>{data.law}</h3>
          </Card>
        </Col>

        <Col md={3} className="mt-3">
          <Card className="p-3 text-center shadow">
            <h5>Development</h5>
            <h3>{data.development}</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
