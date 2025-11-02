import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await api.get('/posts');
      setPosts(res.data);
    } catch {
      toast.error('Failed to load posts');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        toast.success('Post deleted');
        fetchPosts();
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  const handleExport = async () => {
    try {
      const res = await api.get('/posts/export/all', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'posts.csv');
      document.body.appendChild(link);
      link.click();
    } catch {
      toast.error('Export failed');
    }
  };

  return (
    <div className="home-container">
      <div className="header-bar">
        <h2>All Posts</h2>
        <button onClick={handleExport}>Export CSV</button>
      </div>

      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((p) => (
            <div
              key={p.id}
              className="post-card"
              onClick={() => navigate(`/post/${p.id}`)}
            >
              <div className="post-content">
                <div>
                  <h3>{p.title}</h3>
                  <p className="author">By {p.author}</p>
                </div>
                <div className="actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/edit/${p.id}`);
                    }}
                    className="edit-btn"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(p.id);
                    }}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default PostList;
