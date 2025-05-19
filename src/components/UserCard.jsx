import React from "react";

function UserCard({ user }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{user.bio}</p>
      <p className="text-sm mt-2 text-gray-800">
        Интересы: {user.tags.join(", ")}
      </p>
      <button className="mt-3 text-blue-600 hover:underline text-sm">
        Посмотреть профиль
      </button>
    </div>
  );
}

export default UserCard;