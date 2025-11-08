import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeCard from "../components/EmployeeCard";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
} from "../services/EmployeeService";

const HomePage = () => {
  const [employees, setEmployees] = useState(getEmployees());
  const [searchTerm, setSearchTerm] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const refresh = () => setEmployees(getEmployees());

  const handleAdd = (data) => {
    addEmployee(data);
    refresh();
    setShowForm(false);
  };

  const handleUpdate = (data) => {
    if (!editEmployee) return;
    updateEmployee(editEmployee.id, data);
    refresh();
    setEditEmployee(null);
    setShowForm(false);
  };

  const handleEditClick = (emp) => {
    setEditEmployee(emp);
    setShowForm(true);
  };


  const filteredList =
    searchTerm.trim() === ""
      ? employees
      : employees.filter((e) =>
          (e.name || "")
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
        );

  return (
    <div className="main-container">
      <div className="form-section">
        <h1>Employee Directory</h1>

        <button
          className="reset-btn"
          onClick={() => {
            localStorage.removeItem("employees");
            window.location.reload();
          }}
        >
          Reset Employee Data
        </button>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div style={{ marginBottom: 10 }}>
          <button
            className="primary"
            onClick={() => {
              setEditEmployee(null);
              setShowForm(true);
            }}
            style={{ width: "100%", marginBottom: 10 }}
          >
            + Add Employee
          </button>
        </div>
      </div>

      <div className="list-section">
        {filteredList.length === 0 ? (
          <p style={{ color: "#777" }}>No employees found.</p>
        ) : (
          filteredList.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onEdit={() => handleEditClick(emp)}
            />
          ))
        )}
      </div>

      {showForm && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <EmployeeForm
              initialData={editEmployee}
              onCancel={() => {
                setShowForm(false);
                setEditEmployee(null);
              }}
              onSave={editEmployee ? handleUpdate : handleAdd}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
