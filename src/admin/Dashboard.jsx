import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <h2>📊 Quản trị hệ thống</h2>
      <p>Chào mừng Admin! Truy cập nhanh các chức năng quản lý:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/admin/users">👥 Quản lý người dùng</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/posts">📝 Quản lý bài viết</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/comments">💬 Quản lý bình luận</Link>
        </li>
      </ul>
    </div>
  );
}
