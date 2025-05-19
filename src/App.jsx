import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
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
}

export default App;