import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

// Пример мок-данных
const mockUser = {
  name: "Алексей Иванов",
  bio: "Графический дизайнер. Люблю участвовать в коллаборациях и визуальных проектах.",
  tags: ["дизайн", "иллюстрация", "визуальные искусства"],
};

const mockPosts = [
  {
    id: 1,
    title: "Ищу партнёра для проекта по визуализации событий",
    content: "Нужен дизайнер, который может быстро собрать концепты. Оплата по договорённости.",
    tags: ["дизайн", "события"],
    createdAt: "2025-05-01",
  },
  {
    id: 2,
    title: "Ищу копирайтера для совместной работы",
    content: "Проект на 2 недели, желательно — с опытом.",
    tags: ["копирайтинг", "коллаборация"],
    createdAt: "2025-04-25",
  },
];

function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => {
    // можно загрузить пользователя из localStorage или API
  }, []);

  const handleSave = () => {
    setUser(form);
    setEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Мой профиль</h1>

      {editing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Имя"
          />
          <textarea
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Описание"
          />
          <input
            type="text"
            value={form.tags.join(", ")}
            onChange={(e) =>
              setForm({ ...form, tags: e.target.value.split(",").map(t => t.trim()) })
            }
            className="w-full p-2 border rounded"
            placeholder="Интересы (через запятую)"
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">Сохранить</button>
            <button onClick={() => setEditing(false)} className="bg-gray-300 px-4 py-2 rounded">Отмена</button>
          </div>
        </div>
      ) : (
        <div className="mb-6 space-y-2">
          <p className="text-xl"><strong>Имя:</strong> {user.name}</p>
          <p><strong>О себе:</strong> {user.bio}</p>
          <p><strong>Интересы:</strong> {user.tags.join(", ")}</p>
          <button
            onClick={() => {
              setForm(user);
              setEditing(true);
            }}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Редактировать профиль
          </button>
        </div>
      )}

      <hr className="my-6" />

      <h2 className="text-2xl font-semibold mb-4">Мои публикации</h2>
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;