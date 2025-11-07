"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [managers, setManagers] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "employee",
    job_title: "",
    department: "",
    employment_type: "Full-time",
    employment_start_date: "",
    reporting_manager: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all employees
  const fetchEmployees = async () => {
    const res = await fetch("/api/get-employees");
    if (res.ok) setEmployees(await res.json());
  };

  // ✅ Fetch managers for dropdown
  const fetchManagers = async () => {
    const res = await fetch("/api/get-employees");
    if (res.ok) {
      const all = await res.json();
      const mgrs = all.filter((u) => u.role === "manager" || u.role === "admin");
      setManagers(mgrs);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchManagers();
  }, []);

  // ✅ Handle Add Employee
  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add employee");

      const msg = encodeURIComponent(
        `👋 Welcome to TripleHash IMS!\n\nYour login details:\nEmail: ${data.email}\nPassword: ${data.password}\n\nLogin: https://ims.triplehash.in/login`
      );

      Swal.fire({
        icon: "success",
        title: "Employee Created ✅",
        html: `
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Password:</strong> ${data.password}</p>
          <br/>
          <a href="https://wa.me/?text=${msg}" target="_blank"
             class="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold text-sm">
             📱 Send via WhatsApp
          </a>
        `,
        confirmButtonColor: "#7c3aed",
      });

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "employee",
        job_title: "",
        department: "",
        employment_type: "Full-time",
        employment_start_date: "",
        reporting_manager: "",
      });
      fetchEmployees();
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Employee Management</h1>

        {/* Add Employee Form */}
        <form
          onSubmit={handleAdd}
          className="bg-[#181b25] border border-gray-700 rounded-xl p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
              required
            />

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>

            {/* Job-related Fields */}
            <input
              type="text"
              placeholder="Job Title"
              value={form.job_title}
              onChange={(e) => setForm({ ...form, job_title: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            />
            <select
              value={form.employment_type}
              onChange={(e) => setForm({ ...form, employment_type: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
              <option>Contract</option>
            </select>
            <input
              type="date"
              placeholder="Employment Start Date"
              value={form.employment_start_date}
              onChange={(e) => setForm({ ...form, employment_start_date: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            />
            <select
              value={form.reporting_manager}
              onChange={(e) => setForm({ ...form, reporting_manager: e.target.value })}
              className="bg-[#12141b] border border-gray-700 rounded-lg px-3 py-2"
            >
              <option value="">Select Reporting Manager</option>
              {managers.map((m) => (
                <option key={m.id} value={m.full_name}>
                  {m.full_name}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            {loading ? "Creating..." : "Add Employee"}
          </button>
        </form>

        {/* Employee List */}
        <div className="bg-[#181b25] border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">All Employees</h2>
          {employees.length === 0 ? (
            <p className="text-gray-400">No employees found.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-2 text-left">Name</th>
                  <th className="py-2 text-left">Email</th>
                  <th className="py-2 text-left">Role</th>
                  <th className="py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-b border-gray-800">
                    <td className="py-2">{e.full_name}</td>
                    <td className="py-2">{e.email}</td>
                    <td className="py-2 capitalize">{e.role}</td>
                    <td className="py-2 text-green-400">{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
