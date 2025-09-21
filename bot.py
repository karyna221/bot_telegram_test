from telegram import Update, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [KeyboardButton("🎮 Грати у хом’ячка", web_app=WebAppInfo(url="https://karyna221.github.io/bot_telegram_test/"))]
    ]
    reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    await update.message.reply_text(
        "Привіт! Натисни кнопку, щоб запустити гру 🐹",
        reply_markup=reply_markup
    )

app = ApplicationBuilder().token("8376457244:AAFJJw-we82pRFRxumrOE_okoIYjTx5EptU").build()
app.add_handler(CommandHandler("start", start))

print("Бот запущений ✅")
app.run_polling()