/**
 * Word Quiz Master - JavaScript Logic
 */

// Quiz database (expanded with more words for variety)
const wordDb = [
  { w: "Resilience", t: "회복 탄력성", o: ["저항력", "회복 탄력성", "의존성", "유연함"] },
  { w: "Obvious", t: "명백한", o: ["모호한", "명백한", "지루한", "복잡한"] },
  { w: "Maintain", t: "유지하다", o: ["파괴하다", "개선하다", "유지하다", "포기하다"] },
  { w: "Patience", t: "인내", o: ["열정", "지혜", "인내", "용기"] },
  { w: "Innovative", t: "혁신적인", o: ["전통적인", "혁신적인", "단순한", "어려운"] },
  { w: "Challenge", t: "도전", o: ["성공", "도전", "안정", "실패"] },
  { w: "Integrity", t: "진실성", o: ["욕심", "지식", "진실성", "교만"] },
  { w: "Persistence", t: "끈기", o: ["속도", "재능", "희망", "끈기"] }
];

let currentIdx = 0;

/**
 * Fetch phonetics from Free Dictionary API (optional enhancement)
 */
async function fetchPhonetic(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) return "";
    const data = await response.json();
    return data[0]?.phonetics?.[0]?.text || "";
  } catch {
    return "";
  }
}

/**
 * Load the current quiz item
 */
async function loadQuiz() {
  const quiz = wordDb[currentIdx];
  const targetWord = document.getElementById('target-word');
  const phoneticDisplay = document.getElementById('phonetic');
  const resultMsg = document.getElementById('result-msg');
  const optionsDiv = document.getElementById('options');

  // Reset UI
  targetWord.innerText = quiz.w;
  phoneticDisplay.innerText = "Loading phonetics...";
  resultMsg.innerText = "";
  optionsDiv.innerHTML = "";

  // Async fetch phonetic for better feel
  fetchPhonetic(quiz.w).then(phonetic => {
    phoneticDisplay.innerText = phonetic;
  });

  // Create option buttons
  quiz.o.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.setAttribute('aria-label', `선택지: ${opt}`);
    btn.onclick = () => checkAnswer(opt, quiz.t, btn);
    optionsDiv.appendChild(btn);
  });
}

/**
 * Verify user's choice
 */
function checkAnswer(selected, correct, btn) {
  const msg = document.getElementById('result-msg');
  const allBtns = document.querySelectorAll('.option-btn');
  
  if (selected === correct) {
    // Correct UI
    msg.innerText = "정답입니다! 훌륭해요! 🎉";
    msg.style.color = "#2ecc71";
    btn.style.backgroundColor = "#e8fdf0";
    btn.style.borderColor = "#2ecc71";
    
    // Disable all buttons to prevent multiple clicks
    allBtns.forEach(b => b.disabled = true);

    // Auto load next quiz after delay
    setTimeout(() => {
      currentIdx = (currentIdx + 1) % wordDb.length;
      loadQuiz();
    }, 1500);
  } else {
    // Incorrect UI
    msg.innerText = "아쉬워요! 다시 한 번 생각해보세요. 🤔";
    msg.style.color = "#e74c3c";
    btn.style.backgroundColor = "#fdf2f2";
    btn.style.borderColor = "#e74c3c";
    
    // Optional: Shake animation or temporary feedback
    btn.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)' },
      { transform: 'translateX(0)' }
    ], { duration: 200, iterations: 2 });
  }
}

/**
 * Speak the current word using Web Speech API
 */
function speakWord() {
  const word = document.getElementById('target-word').innerText;
  if (word && word !== "Loading...") {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // 미국식 영어 발음
    utterance.rate = 0.8;    // 속도를 약간 느리게 (학습용)
    window.speechSynthesis.speak(utterance);
  }
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
});