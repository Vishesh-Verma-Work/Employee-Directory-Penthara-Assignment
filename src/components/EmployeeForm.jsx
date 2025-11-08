import React, { useEffect, useState } from "react";

const EmployeeForm = ({ initialData = null, onCancel, onSave }) => {
  const [form, setForm] = useState({ name: "", role: "", department: "" });

  useEffect(() => {
    if (initialData) setForm({ name: initialData.name || "", role: initialData.role || "", department: initialData.department || "" });
  }, [initialData]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.department) return alert("Please fil all field");
    onSave(form);
  };

  return (
    <form onSubmit={submit}>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Employee Name</label>
        <input name="name" value={form.name} onChange={change} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Role</label>
        <input name="role" value={form.role} onChange={change} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Department</label>
        <input name="department" value={form.department} onChange={change} />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" className="ghost" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>
        <button type="submit" className="primary" style={{ flex: 1 }}>{initialData ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
