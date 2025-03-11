// 情緒資料（16 種：8 正面 + 8 負面）
const emotions = [
    { name: "開心 😊", type: "positive", description: "覺得高興和舒服", scenario: "你在學校和朋友玩遊戲，贏了比賽！", suggestion: ["和朋友說謝謝，一起開心", "畫一張畫記住這一刻", "告訴家人你今天很開心"] },
    { name: "興奮 🎉", type: "positive", description: "很期待，覺得很有活力", scenario: "明天要去動物園玩，你等不及了！", suggestion: ["準備好你的背包", "和朋友聊聊你想看什麼動物", "畫一隻你最喜歡的動物"] },
    { name: "驕傲 🌟", type: "positive", description: "覺得自己很棒", scenario: "你在畫畫比賽中得了第一名！", suggestion: ["把畫給家人看", "和朋友分享你的快樂", "再畫一張新的畫"] },
    { name: "滿足 😌", type: "positive", description: "覺得一切都很好", scenario: "你做完功課，坐在沙發上看卡通。", suggestion: ["给自己一個微笑", "吃點喜歡的點心", "和家人聊聊今天的事"] },
    { name: "勇敢 💪", type: "positive", description: "覺得自己很厲害，不怕困難", scenario: "你第一次自己騎腳踏車，沒有摔倒！", suggestion: ["告訴朋友你做到了", "再騎一次，練得更好", "給自己一個大大的讚"] },
    { name: "好奇 🤓", type: "positive", description: "很想知道新東西", scenario: "老師說下週要做一個科學實驗，你好想試試！", suggestion: ["問老師更多問題", "找一本書來看一看", "猜猜實驗會怎麼樣"] },
    { name: "輕鬆 🌈", type: "positive", description: "覺得沒壓力，很舒服", scenario: "放假了，你躺在草地上看雲。", suggestion: ["閉上眼睛聽聽風聲", "和朋友玩捉迷藏", "吃一根冰棒放鬆一下"] },
    { name: "感謝 🙏", type: "positive", description: "覺得有人幫你很棒", scenario: "同學借你橡皮擦，讓你順利寫完作業。", suggestion: ["說謝謝給同學", "幫他一次回報他", "畫張小卡片送給他"] },
    { name: "難過 😢", type: "negative", description: "覺得不開心，想哭", scenario: "你的玩具壞了，不能玩了。", suggestion: ["告訴爸爸媽媽你的感覺", "抱抱你的娃娃或枕頭", "休息一下，明天會好一點"] },
    { name: "害怕 😨", type: "negative", description: "覺得緊張和不安", scenario: "晚上聽到怪聲，害怕有怪獸。", suggestion: ["開燈看看四周", "找爸爸媽媽抱抱", "蓋好被子，告訴自己沒事"] },
    { name: "生氣 😡", type: "negative", description: "覺得不公平，很火大", scenario: "弟弟搶走你的零食，不給你吃。", suggestion: ["深呼吸，數到五", "告訴大人發生什麼事", "找別的事做，比如看書"] },
    { name: "孤單 😔", type: "negative", description: "覺得一個人，很無聊", scenario: "朋友都去玩了，你自己在家。", suggestion: ["打電話給好朋友", "玩你喜歡的玩具", "畫畫或寫故事給自己看"] },
    { name: "緊張 😰", type: "negative", description: "覺得心跳很快，很擔心", scenario: "明天要上台講故事，你怕忘詞。", suggestion: ["練習一次給家人聽", "閉上眼睛深呼吸", "告訴自己你很棒"] },
    { name: "失望 😞", type: "negative", description: "想要的沒發生，覺得不好", scenario: "你想去公園玩，但下雨了。", suggestion: ["在室內玩桌遊", "看一部喜歡的卡通", "等雨停再計畫出去"] },
    { name: "無聊 😐", type: "negative", description: "沒事做，覺得沒意思", scenario: "下課時間太長，你不知道幹嘛。", suggestion: ["找朋友聊天", "畫一張怪獸圖", "走一走，看看周圍"] },
    { name: "害羞 🙈", type: "negative", description: "覺得不好意思，不敢說話", scenario: "老師叫你回答問題，你臉紅了。", suggestion: ["慢慢說，沒關係", "先在心裡練習答案", "找朋友幫你一起回答"] }
];

// DOM 元素
const showListBtn = document.getElementById("showListBtn");
const playGameBtn = document.getElementById("playGameBtn");
const emotionList = document.getElementById("emotionList");
const emotionDisplay = document.getElementById("emotionDisplay");
const emotionName = document.getElementById("emotionName");
const emotionDesc = document.getElementById("emotionDesc");
const emotionScenario = document.getElementById("emotionScenario");
const emotionSuggestions = document.getElementById("emotionSuggestions");
const userNote = document.getElementById("userNote");
const saveBtn = document.getElementById("saveBtn");
const gameDisplay = document.getElementById("gameDisplay");
const gameScenario = document.getElementById("gameScenario");
const gameOptions = document.getElementById("gameOptions");
const gameFeedback = document.getElementById("gameFeedback");
const nextGameBtn = document.getElementById("nextGameBtn");
const backToMainBtn = document.getElementById("backToMainBtn");
const diaryList = document.getElementById("diaryList");

// 顯示所有情緒選項
function loadEmotions() {
    emotionList.innerHTML = "";
    emotions.forEach(emotion => {
        const item = document.createElement("div");
        item.className = "emotion-item";
        item.textContent = emotion.name;
        item.addEventListener("click", () => displayEmotion(emotion));
        emotionList.appendChild(item);
    });
}

// 顯示選中的情緒內容
function displayEmotion(emotion) {
    emotionName.textContent = emotion.name;
    emotionDesc.textContent = emotion.description;
    emotionScenario.textContent = emotion.scenario;
    emotionSuggestions.innerHTML = "";
    emotion.suggestion.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        emotionSuggestions.appendChild(li);
    });
    userNote.value = "";
    emotionDisplay.style.display = "block";
    gameDisplay.style.display = "none";
    saveBtn.onclick = () => saveToDiary(emotion);
}

// 儲存到日記
function saveToDiary(emotion) {
    const entry = {
        date: new Date().toLocaleString("zh-TW", { dateStyle: "short", timeStyle: "short" }),
        name: emotion.name,
        note: userNote.value || "沒有寫心得"
    };
    let diary = JSON.parse(localStorage.getItem("diary") || "[]");
    diary.push(entry);
    localStorage.setItem("diary", JSON.stringify(diary));
    updateDiary();
    userNote.value = "";
    emotionDisplay.style.display = "none";
}

// 更新日記顯示
function updateDiary() {
    const diary = JSON.parse(localStorage.getItem("diary") || "[]");
    diaryList.innerHTML = "";
    diary.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.date}: ${entry.name} - ${entry.note}`;
        diaryList.appendChild(li);
    });
}

// 開始遊戲
function startGame() {
    emotionList.style.display = "none";
    emotionDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    nextGameBtn.style.display = "none";
    gameFeedback.textContent = "";

    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    gameScenario.textContent = randomEmotion.scenario;

    const options = [randomEmotion];
    while (options.length < 4) {
        const randomOption = emotions[Math.floor(Math.random() * emotions.length)];
        if (!options.some(opt => opt.name === randomOption.name)) {
            options.push(randomOption);
        }
    }
    shuffleArray(options);

    gameOptions.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("div");
        btn.className = "option-btn";
        btn.textContent = opt.name;
        btn.addEventListener("click", () => checkAnswer(opt, randomEmotion));
        gameOptions.appendChild(btn);
    });
}

// 檢查遊戲答案
function checkAnswer(selected, correct) {
    if (selected.name === correct.name) {
        gameFeedback.textContent = "太棒了！你答對了！⭐";
        gameFeedback.style.color = "#4caf50";
    } else {
        gameFeedback.textContent = `再試試看！正確答案是「${correct.name}」。`;
        gameFeedback.style.color = "#d81b60";
    }
    nextGameBtn.style.display = "inline-block";
}

// 打亂陣列
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 按鈕事件
showListBtn.addEventListener("click", () => {
    emotionList.style.display = "flex";
    gameDisplay.style.display = "none";
    emotionDisplay.style.display = "none";
    loadEmotions();
});

playGameBtn.addEventListener("click", startGame);

nextGameBtn.addEventListener("click", startGame);

backToMainBtn.addEventListener("click", () => {
    emotionList.style.display = "none";
    gameDisplay.style.display = "none";
    emotionDisplay.style.display = "none";
});

// 初始化
updateDiary();