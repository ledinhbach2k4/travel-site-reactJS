import { useState } from 'react';
import { users as initialUsers } from '../data/users';

export default function ManageUsers() {
  const [users, setUsers] = useState([...initialUsers]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (!username || !password) return alert('Điền đủ thông tin');
    setUsers([...users, { id: Date.now(), username, password, role }]);
    setUsername('');
    setPassword('');
    setRole('user');
  };

  const handleEdit = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    setRole(user.role);
    setEditingId(user.id);
  };

  const handleUpdate = () => {
    setUsers(users.map(u => u.id === editingId ? { ...u, username, password, role } : u));
    setUsername('');
    setPassword('');
    setRole('user');
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Xác nhận xóa user này?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h2>👥 Quản lý Người dùng</h2>

      <div className="card p-3 mb-4">
        <h5>{editingId ? '✏️ Chỉnh sửa User' : '➕ Thêm User'}</h5>
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <select className="form-select mb-2" value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="btn btn-success" onClick={editingId ? handleUpdate : handleAdd}>
          {editingId ? 'Lưu thay đổi' : 'Thêm mới'}
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr><th>ID</th><th>Username</th><th>Role</th><th>Hành động</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user)}>Sửa</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
