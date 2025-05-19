import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [type, setType] = useState("collab");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      type,
      createdAt: new Date().toISOString(),
    };

    console.log("Создан пост:", newPost);
    // В реальном проекте — отправка на сервер или сохранение
    navigate("/feed");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Новая публикация</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Описание"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Теги (через запятую)"
          className="w-full p-2 border rounded"
        />

        <div className="space-y-2">
          <label className="block font-semibold">Тип публикации:</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="event"
                checked={type === "event"}
                onChange={() => setType("event")}
              />{" "}
              Событие
            </label>
            <label>
              <input
                type="radio"
                value="collab"
                checked={type === "collab"}
                onChange={() => setType("collab")}
              />{" "}
              Коллаборация
            </label>
            <label>
              <input
                type="radio"
                value="offer"
                checked={type === "offer"}
                onChange={() => setType("offer")}
              />{" "}
              Объявление
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Опубликовать
        </button>
      </form>
    </div>
  );
}

export default NewPostPage;