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

## 🔌 How Real-Time Works

- Socket.io establishes a WebSocket connection between client and server.
- When a user sends a message:
  - It is stored in MongoDB.
  - Socket emits the message instantly to the receiver.
- No page refresh required.

---

## ✨ Features

- 🔐 User Registration & Login (JWT Authentication)
- 💬 Real-Time Messaging using Socket.io
- 🖼️ Image Upload via Cloudinary
- 📡 Instant message updates without refresh
- 👤 User-based chat system
- 📱 Fully Responsive UI
- 🔒 Secure API routes
- 🧠 MongoDB for persistent data storage

---

## ⚙️ Installation & Setup

### Clone Repository

```
git clone https://github.com/vivekvaria24/Chat-App.git
cd Chat-App
```

---

## 🔧 Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside **backend** and paste the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start backend:

```
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open new terminal:

```
cd frontend
npm install
```

Create a `.env` file inside **frontend** and paste:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start frontend:

```
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```
