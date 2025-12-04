package in.MeghaP.repository;

import in.MeghaP.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE " +
           "LOWER(e.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(e.email) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(e.department) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<Employee> search(String keyword, Pageable pageable);
    Page<Employee> findByDepartmentIgnoreCase(String department, Pageable pageable);
    long count();
    long countByDepartmentIgnoreCase(String department);

}
