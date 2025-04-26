import { comments } from '../data/comments';
import { posts } from '../data/posts';

export default function ManageComments() {
  return (
    <div className="container mt-5">
      <h2>💬 Quản lý Bình luận</h2>
      <ul className="list-group">
        {comments.map(comment => (
          <li key={comment.id} className="list-group-item">
            <strong>Post:</strong> {posts.find(p => p.id === comment.postId)?.title}<br/>
            <strong>Bình luận:</strong> {comment.content}
            <span className="badge bg-secondary ms-2">{comment.isVisible ? 'Hiển thị' : 'Đã ẩn'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
