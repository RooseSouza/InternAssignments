Blog Platform

A simple full-stack blogging platform built with React (frontend), Node.js + Express (backend), and MySQL (database).  
Users can create, edit, delete, and view blog posts, as well as export all posts to a CSV file.
----------------------------------------------------------------------------------------------------------------------
Prerequisites:
Make sure you have the following installed:

- Node.js (v16 or higher) 
- MySQL Server 
- npm (comes with Node)
- A code editor (VS Code recommended)
----------------------------------------------------------------------------------------------------------------------
Database Setup (MySQL)
1. Open your MySQL client or terminal and create a database:
   sql->
   CREATE DATABASE blog_platform;
   USE blog_platform;

   create posts table->
   CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
----------------------------------------------------------------------------------------------------------------------
Backend Setup:
Go to the backend folder:
cd backend

Install dependencies:
npm install

Create a .env file inside backend/ with your credentials:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_platform

Start the backend server:
npm start

Server runs on: http://localhost:5000
----------------------------------------------------------------------------------------------------------------------
Frontend Setup:
Open another terminal and go to the frontend folder:
cd frontend

Install frontend dependencies:
npm install

Start the React app:
npm start

The app will run on: http://localhost:3000
----------------------------------------------------------------------------------------------------------------------
CSV Export
Click the "Export CSV" button on the home page to download all posts in a .csv file.
The exported file includes:
Title
Author
Created date
Content
----------------------------------------------------------------------------------------------------------------------
Technologies Used:

Frontend
React.js
React Router
Axios
React Toastify

Backend
Node.js
Express.js
MySQL
dotenv
csv-writer

