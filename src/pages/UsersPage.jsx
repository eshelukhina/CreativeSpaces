import React, { useState } from "react";
import UserCard from "../components/UserCard";
import TagFilter from "../components/TagFilter";

// Мок-данные
const mockUsers = [
  {
    id: 1,
    name: "Анна Смирнова",
    bio: "Организатор мероприятий и куратор проектов.",
    tags: ["ивенты", "менеджмент", "арт"],
  },
  {
    id: 2,
    name: "Михаил Лебедев",
    bio: "3D-художник, ищу проекты с визуальной направленностью.",
    tags: ["3D", "дизайн", "иллюстрация"],
  },
  {
    id: 3,
    name: "Екатерина Иванова",
    bio: "Маркетолог. Интересует коллаборация с креативными командами.",
    tags: ["маркетинг", "соцсети", "анализ"],
  },
];

function UsersPage() {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredUsers = selectedTag
    ? mockUsers.filter((user) => user.tags.includes(selectedTag))
    : mockUsers;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Участники сообщества</h1>

      <TagFilter
        allTags={[...new Set(mockUsers.flatMap((user) => user.tags))]}
        selectedTag={selectedTag}
        onSelect={setSelectedTag}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;