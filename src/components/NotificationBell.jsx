import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react"; // или любая иконка по выбору
import { useNavigate } from "react-router-dom";

// Моки — условно «новые посты по интересам»
const mockNewPosts = [
  { id: 5, tags: ["дизайн"] },
  { id: 6, tags: ["коллаборация", "ивенты"] },
];

function NotificationBell() {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];

    // Фильтрация постов по подписанным тегам
    const relevantPosts = mockNewPosts.filter((post) =>
      post.tags.some((tag) => subscriptions.includes(tag))
    );

    setUnreadCount(relevantPosts.length);
  }, []);

  const handleClick = () => {
    navigate("/feed");
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={handleClick}
        className="relative text-gray-700 hover:text-blue-600"
        title="Уведомления"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
}

export default NotificationBell;