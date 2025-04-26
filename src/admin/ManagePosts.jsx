import { posts } from '../data/posts';

export default function ManagePosts() {
  return (
    <div className="container mt-5">
      <h2>📝 Quản lý Bài viết</h2>
      <table className="table table-bordered">
        <thead>
          <tr><th>ID</th><th>Tiêu đề</th><th>Ngày đăng</th></tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}