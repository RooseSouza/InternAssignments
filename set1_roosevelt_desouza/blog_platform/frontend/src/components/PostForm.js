import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PostForm() {
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/posts', form);
      toast.success('Post created!');
      navigate('/');
    } catch {
      toast.error('Creation failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" rows="6" value={form.content} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default PostForm;
