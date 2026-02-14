# 💬 Real-Time Chat App (MERN + Socket.io)

A full-stack real-time chat application built using the MERN stack with Socket.io for instant messaging. Users can register, login securely, and chat in real-time with a modern responsive UI.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Socket.io Client

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.io

### 🛠 Tools
- Git & GitHub
- Postman

---

## ✨ Features

- 🔐 User Registration & Login (JWT Authentication)
- 💬 Real-Time Messaging using Socket.io
- 📡 Instant message updates without refresh
- 👤 User-based chat system
- 📱 Fully Responsive UI
- 🔒 Secure API routes
- 🧠 MongoDB for persistent data storage

---

## 📂 Project Structure

Chat-App/

├── frontend/  
│   ├── src/  
│   ├── public/  
│   ├── components/  
│   └── ...  

├── backend/  
│   ├── controllers/  
│   ├── routes/  
│   ├── models/  
│   ├── config/  
│   └── ...  

└── README.md  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/Chat-App.git  
cd Chat-App  

---

### 2️⃣ Setup Backend

cd backend  
npm install  

Create a `.env` file inside backend folder and add:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

Run backend server:

npm run dev  

---

### 3️⃣ Setup Frontend

Open new terminal:

cd frontend  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

Backend runs on:  
http://localhost:5000  

---

## 🔌 How Real-Time Works

- Socket.io establishes a WebSocket connection between client and server.
- When a user sends a message:
  - It is stored in MongoDB.
  - Socket emits the message instantly to the receiver.
- No page refresh required.

---
