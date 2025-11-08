// src/services/EmployeeService.js
// Service to manage employees using localStorage (persistent)

const STORAGE_KEY = "employees";

const DEFAULT_EMPLOYEES = [
  { id: 1, name: "Aarav Sharma", role: "Frontend Developer", department: "IT" },
  { id: 2, name: "Priya Mehta", role: "UI/UX Designer", department: "Design" },
  { id: 3, name: "Rohan Verma", role: "Project Manager", department: "Operations" },
  { id: 4, name: "Sneha Iyer", role: "Data Analyst", department: "Analytics" },
];

/**
 * Load employees from localStorage or initialize with defaults
 */
export const getEmployees = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      // First-time load → set defaults
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EMPLOYEES));
      return [...DEFAULT_EMPLOYEES];
    }
    return JSON.parse(data);
  } catch (err) {
    console.error("Error loading employees:", err);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EMPLOYEES));
    return [...DEFAULT_EMPLOYEES];
  }
};

/**
 * Save employees list to localStorage
 */
const saveEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

/**
 * Add a new employee
 */
export const addEmployee = (employee) => {
  const employees = getEmployees();
  const newEmp = { ...employee, id: Date.now() };
  const updated = [...employees, newEmp];
  saveEmployees(updated);
  return newEmp;
};

/**
 * Update existing employee
 */
export const updateEmployee = (id, updatedData) => {
  const employees = getEmployees();
  const updated = employees.map((emp) =>
    emp.id === id ? { ...emp, ...updatedData } : emp
  );
  saveEmployees(updated);
  return updated;
};

/**
 * Optional utility: reset to defaults
 */
export const resetEmployees = () => {
  saveEmployees(DEFAULT_EMPLOYEES);
  return [...DEFAULT_EMPLOYEES];
};
