import React, { useState } from "react";
import PostCard from "../components/PostCard";
import TagFilter from "../components/TagFilter";
import { useNavigate } from "react-router-dom";

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
  {
    id: 3,
    title: "Продам место в мастерской",
    content: "Есть одно свободное рабочее место на 2 недели.",
    tags: ["ресурсы", "аренда"],
    type: "offer",
    createdAt: "2025-05-06",
  },
];

function FeedPage() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const allTags = [...new Set(mockPosts.flatMap((post) => post.tags))];
  const allTypes = ["event", "collab", "offer"];

  const filteredPosts = mockPosts
    .filter((post) =>
      selectedTag ? post.tags.includes(selectedTag) : true
    )
    .filter((post) => (selectedType ? post.type === selectedType : true));

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Лента активности</h1>
        <button
          onClick={() => navigate("/new-post")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition shadow"
        >
          + Новая публикация
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Фильтр по интересам
        </h2>
        <TagFilter
          allTags={allTags}
          selectedTag={selectedTag}
          onSelect={setSelectedTag}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Тип публикации
        </h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              selectedType === null
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Все
          </button>
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedType === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type === "event"
                ? "События"
                : type === "collab"
                ? "Коллаборации"
                : "Объявления"}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} linkTo={`/post/${post.id}`} />
          ))
        ) : (
          <p className="text-gray-500 text-center">Нет публикаций по выбранным фильтрам.</p>
        )}
      </div>
    </div>
  );
}

export default FeedPage;