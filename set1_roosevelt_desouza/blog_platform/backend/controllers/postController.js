import db from '../config/db.js';
import { Parser } from 'json2csv';
import fs from 'fs';

export const getPosts = (req, res) => {
  db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getPostById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

export const createPost = (req, res) => {
  const { title, content, author } = req.body;
  db.query(
    'INSERT INTO posts (title, content, author, created_at) VALUES (?, ?, ?, NOW())',
    [title, content, author],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Post created successfully' });
    }
  );
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  db.query(
    'UPDATE posts SET title=?, content=?, author=? WHERE id=?',
    [title, content, author, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Post updated successfully' });
    }
  );
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM posts WHERE id=?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Post deleted successfully' });
  });
};

export const exportCSV = (req, res) => {
  db.query('SELECT title, author,content, created_at FROM posts', (err, results) => {
    if (err) return res.status(500).send(err);

    const parser = new Parser({ fields: ['title', 'author', 'content', 'created_at'] });
    const csv = parser.parse(results);

    res.header('Content-Type', 'text/csv');
    res.attachment('posts.csv');
    res.send(csv);
  });
};
