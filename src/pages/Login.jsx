import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate(user.role === 'admin' ? '/admin/dashboard' : '/');
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <h3 className="text-center text-primary">Đăng nhập</h3>
        <input
          className="form-control mb-2"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
