import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton
from aiogram.filters import Command
from aiogram.fsm.storage.memory import MemoryStorage

BOT_TOKEN = ""
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(storage=MemoryStorage())

# Пользовательские роли: user_id -> "resident" / "organizer" / "moderator"
user_roles = {}

# --- START / ROLE SELECTION ---

@dp.message(Command("start"))
async def start_handler(message: Message):
    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="🧑 Я резидент")],
            [KeyboardButton(text="📅 Я организатор")],
            [KeyboardButton(text="🛠 Я модератор")]
        ],
        resize_keyboard=True
    )
    await message.answer(
        "👋 Добро пожаловать в Telegram-бот креативного пространства!\n\n"
        "Пожалуйста, выберите вашу роль, чтобы мы могли показать подходящие функции:",
        reply_markup=keyboard
    )

@dp.message(lambda msg: msg.text in ["🧑 Я резидент", "📅 Я организатор", "🛠 Я модератор"])
async def set_role(message: Message):
    role_map = {
        "🧑 Я резидент": "resident",
        "📅 Я организатор": "organizer",
        "🛠 Я модератор": "moderator"
    }
    role = role_map[message.text]
    user_roles[message.from_user.id] = role
    await message.answer(
        f"✅ Ваша роль установлена: {role.capitalize()}.\n"
        f"Напишите /help, чтобы увидеть доступные команды."
    )

# --- ROLE CHECK DECORATOR ---

def require_role(allowed_roles):
    async def checker(message: Message):
        return user_roles.get(message.from_user.id) in allowed_roles
    return checker

# --- RESIDENT COMMANDS ---

@dp.message(Command("search"))
async def search_people(message: Message):
    if user_roles.get(message.from_user.id) != "resident":
        return await message.answer("⛔ Команда доступна только резидентам.")
    await message.answer("🔍 Введите интерес (например: 'дизайн') для поиска резидентов.")

@dp.message(Command("subscribe"))
async def subscribe_topics(message: Message):
    if user_roles.get(message.from_user.id) != "resident":
        return await message.answer("⛔ Подписка доступна только резидентам.")
    await message.answer("📬 Вы подписаны на обновления по интересам.\nВы будете получать уведомления о новых публикациях.")

@dp.message(Command("respond"))
async def respond_to_opportunity(message: Message):
    if user_roles.get(message.from_user.id) != "resident":
        return await message.answer("⛔ Отклики доступны только резидентам.")
    await message.answer("✉️ Вы можете откликнуться на публикацию. Просто введите ID или ссылку на неё.")

# --- ORGANIZER COMMANDS ---

@dp.message(Command("new_event"))
async def publish_event(message: Message):
    if user_roles.get(message.from_user.id) != "organizer":
        return await message.answer("⛔ Только организаторы могут создавать события.")
    await message.answer("📢 Напишите описание мероприятия для публикации в ленту.")

@dp.message(Command("myevents"))
async def list_events(message: Message):
    if user_roles.get(message.from_user.id) != "organizer":
        return await message.answer("⛔ Только организаторы могут просматривать свои события.")
    await message.answer("📅 Ваши мероприятия:\n1. Воркшоп по дизайну (22 мая)\n2. Meetup: видео-контент (25 мая)")

# --- MODERATOR COMMANDS ---

@dp.message(Command("moderate"))
async def moderate_interface(message: Message):
    if user_roles.get(message.from_user.id) != "moderator":
        return await message.answer("⛔ Доступ только для модераторов.")
    await message.answer("🛠 Модераторский режим активирован.\nВы можете проверять заявки, жалобы и публикации.")

@dp.message(Command("newusers"))
async def new_users_notification(message: Message):
    if user_roles.get(message.from_user.id) != "moderator":
        return await message.answer("⛔ Команда доступна только модераторам.")
    await message.answer("🆕 Новые участники за сегодня:\n- @anna_design\n- @art_vision\n- @soundlab")

# --- HELP MENU ---

@dp.message(Command("help"))
async def help_handler(message: Message):
    role = user_roles.get(message.from_user.id)
    if role == "resident":
        await message.answer("""👤 Резидент — Доступные команды:
  /search — найти резидентов по интересам
  /subscribe — подписаться на темы
  /respond — откликнуться на публикацию
""")
    elif role == "organizer":
        await message.answer("""📅 Организатор — Доступные команды:
  /new_event — опубликовать мероприятие
  /myevents — мои мероприятия
""")
    elif role == "moderator":
        await message.answer("""🛠 Модератор — Доступные команды:
  /moderate — панель управления
  /newusers — список новых участников
""")
    else:
        await message.answer("❓ Пожалуйста, начните с команды /start и выберите роль.")

# --- BOT RUNNER ---

async def main():
    print("🤖 Бот запущен...")
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())