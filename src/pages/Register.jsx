import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const exist = users.find(u => u.username === username);
    if (exist) {
      alert('Username đã tồn tại!');
    } else {
      users.push({ id: Date.now(), username, password, role: 'user' });
      alert('Đăng ký thành công!');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <h3 className="text-center text-primary">Đăng ký</h3>
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}