import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";

import NotificationBell from "./components/NotificationBell";

function App() {
  return (
    <Router>
      <div className="p-4 max-w-5xl mx-auto">
        <NotificationBell />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
  // return (
  //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  //     <div className="bg-white p-8 rounded-2xl shadow max-w-md text-center">
  //       <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind работает?</h1>
  //       <p className="text-gray-700 mb-2">Если ты это видишь в цвете — всё ОК ✅</p>
  //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
  //         Кнопка
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default App;