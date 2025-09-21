let score = 0;
const scoreEl = document.getElementById("score");
const hamster = document.getElementById("hamster");
const bonusBtn = document.getElementById("bonusBtn");
const progressBar = document.getElementById("progressBar");

// Telegram Web App API
const tg = window.Telegram.WebApp;
tg.expand(); // розгортаємо на весь екран

// Клік по хом’яку
hamster.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;
    updateProgress();
});

// Кнопка бонусу
bonusBtn.addEventListener("click", () => {
    score += 5;
    scoreEl.textContent = score;
    updateProgress();
});

// Оновлення прогрес-бара
function updateProgress() {
    let percent = Math.min(score, 100); // максимум 100%
    progressBar.style.width = percent + "%";
}

// Відправка результату назад у Telegram
function sendResult() {
    tg.sendData(JSON.stringify({ score: score }));
}

// Кнопка "Відправити результат" в Telegram
tg.MainButton.text = "Відправити результат";
tg.MainButton.show();
tg.MainButton.onClick(sendResult);
