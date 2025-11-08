import React from "react";

/**
 * EmployeeCard displays a single employee info
 * @param {Object} employee - Employee data
 * @param {Function} onEdit - Function to handle edit action
 */

const EmployeeCard = ({ employee, onEdit }) => {
  return (
    <div className="employee-card">
      <div className="employee-details">
        <h3>{employee.name}</h3>
        <p>Role: {employee.role}</p>
        <p>Department: {employee.department}</p>
      </div>
      <div>
        <button className="ghost" onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
