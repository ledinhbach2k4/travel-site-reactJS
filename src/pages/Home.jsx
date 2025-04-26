import React, { useState } from 'react';
import './Home.scss';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';

export default function Home() {
  const initialVisible = 6;
  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const showLessPosts = () => {
    setVisiblePosts(initialVisible);
  };

  return (
    <div className="home-page container mt-4">
      <div className="banner">
        <img src="../assets/images/banner.jpg" alt="Banner" />
        <div className="banner-text">
          <h2>Địa điểm nổi bật</h2>
          <p>Tìm eigen những điểm đến đầy thắng đẹp trong quê hương của bạn.</p>
        </div>
      </div>
      <div className="row initial-visible">
        {posts.slice(0, visiblePosts).map(post => (
          <div key={post.id} className="post-container">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.slice(0, 50)}...</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">Xem chi tiết</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {visiblePosts < posts.length && (
          <button className="btn btn-secondary me-2 initial-visible" type="button" onClick={loadMorePosts}>
            Xem thêm
          </button>
        )}
        {visiblePosts > initialVisible && (
          <button className="btn btn-outline-secondary" type="button" onClick={showLessPosts}>
            Ẩn bớt
          </button>
        )}
      </div>
    </div>
  );
}