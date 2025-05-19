import React, { useState, useEffect } from "react";

// Мок-теги (можно потом брать из API или userData)
const allTags = [
  "дизайн",
  "ивенты",
  "коллаборация",
  "3D",
  "копирайтинг",
  "маркетинг",
  "ресурсы",
];

function SettingsPage() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    // В реальности — загрузка из API или localStorage
    const savedSubs = JSON.parse(localStorage.getItem("subscriptions")) || [];
    const savedNotif = JSON.parse(localStorage.getItem("notifications")) ?? true;

    setSubscriptions(savedSubs);
    setNotificationsEnabled(savedNotif);
  }, []);

  const toggleTag = (tag) => {
    const updated = subscriptions.includes(tag)
      ? subscriptions.filter((t) => t !== tag)
      : [...subscriptions, tag];

    setSubscriptions(updated);
    localStorage.setItem("subscriptions", JSON.stringify(updated));
  };

  const toggleNotifications = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    localStorage.setItem("notifications", JSON.stringify(newValue));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Настройки</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Подписка на интересующие темы</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 border rounded ${
                subscriptions.includes(tag)
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {subscriptions.length === 0 && (
          <p className="text-sm text-gray-500 mt-2">
            Вы пока не выбрали интересующие темы.
          </p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Уведомления</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Включить уведомления о новых постах по моим интересам
        </label>
      </div>
    </div>
  );
}

export default SettingsPage;