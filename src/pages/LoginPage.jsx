import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Здесь можно реализовать проверку логина (временно пропустим)
    if (email.trim() !== "") {
      // Сохраняем пользователя в локальное хранилище
      localStorage.setItem("user", JSON.stringify({ email }));
      // Переход к главной ленте
      navigate("/feed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-semibold mb-4">Вход</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Войти
      </button>
    </div>
  );
}

export default LoginPage;