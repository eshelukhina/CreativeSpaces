import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Креативное пространство
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Добро пожаловать! Здесь вы можете находить партнёров, делиться ресурсами, участвовать в событиях и развивать своё сообщество.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Войти
          </button>

          <button
            onClick={() => navigate("/feed")}
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Лента публикаций
          </button>

          <button
            onClick={() => navigate("/users")}
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Участники
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Мой профиль
          </button>

          <button
            onClick={() => navigate("/new-post")}
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Новая публикация
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow"
          >
            Настройки
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;