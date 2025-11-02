import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './pages/PostList';
import PostView from './pages/PostView';
import EditPost from './pages/EditPost';
import PostForm from './components/PostForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Blog Platform</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Post</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>

        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
