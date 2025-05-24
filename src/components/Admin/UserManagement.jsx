import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "rahul@gmail.com",
      role: "admin",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [editUserId, setEditUserId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUserId) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === editUserId ? { ...formData, id: editUserId } : user
        )
      );
      setEditUserId(null);
    } else {
      // Add new user
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", email: "", password: "", role: "customer" });
  };

  const handleEdit = (user) => {
    setFormData({ ...user, password: "" });
    setEditUserId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">User Management</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required={!editUserId}
          className="border p-2 w-full"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editUserId ? "Update User" : "Add User"}
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No users available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
