import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch {
        toast.error('Failed to load post');
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <div className="post-view">
          <h2>{post.title}</h2>
          <p className="meta">By {post.author} • {new Date(post.created_at).toLocaleString()}</p>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostView;
