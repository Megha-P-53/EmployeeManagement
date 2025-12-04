import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

class EmployeeService {

  getEmployees(page = 0, size = 5) {
    return axios.get(`${BASE_URL}/employees?page=${page}&size=${size}`);
  }

  searchEmployees(keyword, page = 0, size = 5) {
    return axios.get(`${BASE_URL}/employees/search?keyword=${keyword}&page=${page}&size=${size}`);
  }

  filterByDepartment(department, page = 0, size = 5) {
    return axios.get(`${BASE_URL}/employees/filter?department=${department}&page=${page}&size=${size}`);
  }

  addEmployee(employee) {
    return axios.post(`${BASE_URL}/employees`, employee);
  }

  updateEmployee(id, employee) {
    return axios.put(`${BASE_URL}/employees/${id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${BASE_URL}/employees/${id}`);
  }

  
  getDashboard() {
    return axios.get(`${BASE_URL}/dashboard`);
  }
}

export default new EmployeeService();
