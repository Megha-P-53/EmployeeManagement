import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

class EmployeeService {

  getEmployees(page = 0, size = 5) {
    return axios.get(`${API_URL}?page=${page}&size=${size}`);
  }

  searchEmployees(keyword, page = 0, size = 5) {
    return axios.get(`${API_URL}/search?keyword=${keyword}&page=${page}&size=${size}`);
  }
 
  filterByDepartment(department, page = 0, size = 5) {
    return axios.get(`${API_URL}/filter?department=${department}&page=${page}&size=${size}`);
}

  addEmployee(employee) {
    return axios.post(API_URL, employee);
  }

  updateEmployee(id, employee) {
    return axios.put(`${API_URL}/${id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new EmployeeService();
