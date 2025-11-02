import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

function EditPost() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setForm(res.data);
      } catch {
        toast.error('Failed to load post');
      }
    };
    loadPost();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/posts/${id}`, form);
      toast.success('Post updated!');
      navigate('/');
    } catch {
      toast.error('Update failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} required />
        <input name="author" value={form.author} onChange={handleChange} required />
        <textarea name="content" rows="6" value={form.content} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;
