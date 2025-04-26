import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { comments } from '../data/comments';
import { users } from '../data/users';
import './PostDetail.scss';

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));
  const postComments = comments.filter(c => c.postId === post.id && c.isVisible);

  const getUser = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.username : 'Ẩn danh';
  };

  return (
    <div className="container mt-5 post-detail">
      <h2 className="text-primary">{post.title}</h2>
      <p>{post.content}</p>
      <hr />
      <h5>Bình luận</h5>
      {postComments.length === 0 ? (
        <p>Chưa có bình luận nào.</p>
      ) : (
        <ul className="list-group">
          {postComments.map(comment => (
            <li className="list-group-item comment__list-item" key={comment.id}>
              <strong>{getUser(comment.userId)}</strong>: {comment.content}
              <div className="text-muted" style={{ fontSize: '0.8rem' }}>{comment.createdAt}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}