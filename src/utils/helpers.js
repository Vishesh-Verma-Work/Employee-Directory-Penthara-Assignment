// helpers.js
// Utility function for filtering employees by name or department

/**
 * Filter employees by search term
 * @param {Array} employees
 * @param {String} searchTerm
 * @returns {Array} filtered employees
 */
export const filterEmployees = (employees, searchTerm) => {
  if (!searchTerm) return employees;
  const lower = searchTerm.toLowerCase();
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(lower) ||
      emp.department.toLowerCase().includes(lower)
  );
};
