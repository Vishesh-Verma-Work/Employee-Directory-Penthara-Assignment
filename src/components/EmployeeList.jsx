import React from "react";
import EmployeeCard from "./EmployeeCard";

/**
 * EmployeeList component renders list of employees
 * @param {Array} employees - Employee data list
 * @param {Function} onEdit - Edit handler
 */
const EmployeeList = ({ employees, onEdit }) => {
  return (
    <div>
      {employees.length > 0 ? (
        employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} onEdit={onEdit} />
        ))
      ) : (
        <p className="text-gray-500">No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
