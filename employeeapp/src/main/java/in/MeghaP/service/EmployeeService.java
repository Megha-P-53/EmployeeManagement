package in.MeghaP.service;

import in.MeghaP.model.Employee;
import in.MeghaP.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee e) {
        return employeeRepository.save(e);
    }

    public Page<Employee> getEmployees(int page, int size) {
        return employeeRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Employee> searchEmployees(String keyword, int page, int size) {
        return employeeRepository.search(keyword, PageRequest.of(page, size));
    }
    public Page<Employee> filterByDepartment(String department, int page, int size) {
        return employeeRepository.findByDepartmentIgnoreCase(
                department,
                PageRequest.of(page, size)
        );
    }


    public Employee updateEmployee(Long id, Employee newData) {
        return employeeRepository.findById(id).map(emp -> {
            emp.setName(newData.getName());
            emp.setEmail(newData.getEmail());
            emp.setPhone(newData.getPhone());
            emp.setDepartment(newData.getDepartment());
            emp.setSalary(newData.getSalary());
            return employeeRepository.save(emp);
        }).orElse(null);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
