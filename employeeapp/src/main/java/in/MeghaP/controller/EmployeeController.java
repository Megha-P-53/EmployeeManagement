package in.MeghaP.controller;

import in.MeghaP.model.Employee;
import in.MeghaP.repository.EmployeeRepository;
import in.MeghaP.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    
    @Autowired
    private EmployeeRepository employeeRepository;


    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee emp) {
        return employeeService.addEmployee(emp);
    }

    @GetMapping("/employees")
    public Page<Employee> listEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        return employeeService.getEmployees(page, size);
    }

    @GetMapping("/employees/search")
    public Page<Employee> search(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        return employeeService.searchEmployees(keyword, page, size);
    }
    
    @GetMapping("/employees/filter")
    public Page<Employee> filterByDepartment(
            @RequestParam String department,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {

        return employeeService.filterByDepartment(department, page, size);
    }

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboard() {
        Map<String, Object> data = new HashMap<>();
        data.put("total", employeeRepository.count());
        data.put("hr", employeeRepository.countByDepartmentIgnoreCase("HR"));
        data.put("testing", employeeRepository.countByDepartmentIgnoreCase("Testing"));
        data.put("sales", employeeRepository.countByDepartmentIgnoreCase("Sales"));
        data.put("law", employeeRepository.countByDepartmentIgnoreCase("Law"));
        data.put("development", employeeRepository.countByDepartmentIgnoreCase("Development"));

        return data;
    }


    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
        return employeeService.updateEmployee(id, emp);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Deleted";
    }
}
