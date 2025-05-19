import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";

// Мок-данные
const mockPosts = [
  {
    id: 1,
    title: "Ищу партнёра для визуального проекта",
    content: "Нужен дизайнер для концептов. Оплата обсуждается.",
    tags: ["дизайн", "коллаборация"],
    type: "collab",
    createdAt: "2025-05-10",
  },
  {
    id: 2,
    title: "Открыто мероприятие: Дизайн-хакатон",
    content: "Будет проходить 22 мая. Регистрируйтесь заранее!",
    tags: ["ивенты", "дизайн"],
    type: "event",
    createdAt: "2025-05-08",
  },
];

const mockComments = {
  1: [
    { id: 1, author: "Мария", content: "Очень интересно! Я могу помочь.", createdAt: "2025-05-11" },
    { id: 2, author: "Алексей", content: "Написал в личку", createdAt: "2025-05-11" },
  ],
  2: [
    { id: 3, author: "Катя", content: "А где будет проходить?", createdAt: "2025-05-09" },
  ],
};

function PostPage() {
  const { id } = useParams();
  const postId = parseInt(id);

  const post = mockPosts.find((p) => p.id === postId);
  const [comments, setComments] = useState(mockComments[postId] || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const comment = {
      id: Date.now(),
      author: "Вы", // В реальности — из авторизации
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  if (!post) {
    return <div className="mt-10 text-center text-gray-600">Публикация не найдена</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="mb-4">{post.content}</p>
      <p className="text-sm text-gray-700 mb-6">Теги: {post.tags.join(", ")}</p>

      <hr className="mb-6" />

      <h2 className="text-2xl font-semibold mb-4">Комментарии</h2>
      <CommentList comments={comments} />

      <div className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Напишите комментарий..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

export default PostPage;