/**
 * Word Quiz Master - JavaScript Logic
 */

// Quiz database (expanded with more words for variety)
const wordDb = [
    { w: "Accomplish", t: "성취하다", o: ["포기하다", "성취하다", "비난하다", "지연시키다"] },
    { w: "Beneficial", t: "유익한", o: ["해로운", "유익한", "무관심한", "복잡한"] },
    { w: "Comprehensive", t: "종합적인", o: ["부분적인", "간단한", "종합적인", "편협한"] },
    { w: "Distinguish", t: "구별하다", o: ["섞다", "구별하다", "무시하다", "수락하다"] },
    { w: "Enthusiastic", t: "열정적인", o: ["냉담한", "열정적인", "지루한", "우울한"] },
    { w: "Flawless", t: "결점 없는", o: ["완벽한", "평범한", "위험한", "결점 없는"] },
    { w: "Generous", t: "관대한", o: ["인색한", "관대한", "난폭한", "소심한"] },
    { w: "Hesitate", t: "주저하다", o: ["결정하다", "주저하다", "무시하다", "계획하다"] },
    { w: "Inevitably", t: "필연적으로", o: ["우연히", "필연적으로", "가능성있게", "드물게"] },
    { w: "Justify", t: "정당화하다", o: ["비난하다", "정당화하다", "수정하다", "포기하다"] },
    { w: "Knowledgeable", t: "박학다식한", o: ["무지한", "똑똑한", "박학다식한", "친절한"] },
    { w: "Lucrative", t: "수익성이 좋은", o: ["손해나는", "수익성이 좋은", "지루한", "단순한"] },
    { w: "Maintain", t: "유지하다", o: ["파괴하다", "유지하다", "변경하다", "거부하다"] },
    { w: "Negotiate", t: "협상하다", o: ["명령하다", "협상하다", "다투다", "피하다"] },
    { w: "Objective", t: "객관적인", o: ["주관적인", "객관적인", "감정적인", "편향된"] },
    { w: "Precious", t: "귀중한", o: ["흔한", "귀중한", "저렴한", "무의미한"] },
    { w: "Qualified", t: "자격이 있는", o: ["부적격의", "자격이 있는", "미숙한", "강력한"] },
    { w: "Reliable", t: "믿을 수 있는", o: ["불안정한", "믿을 수 있는", "위험한", "빠른"] },
    { w: "Sufficient", t: "충분한", o: ["부족한", "충분한", "과도한", "적절한"] },
    { w: "Tolerate", t: "참다", o: ["거절하다", "즐기다", "참다", "방해하다"] },
    { w: "Ultimate", t: "궁극적인", o: ["최초의", "궁극적인", "사소한", "일시적인"] },
    { w: "Vague", t: "모호한", o: ["선명한", "정확한", "모호한", "단단한"] },
    { w: "Widespread", t: "광범위한", o: ["제한된", "광범위한", "좁은", "희귀한"] },
    { w: "Yield", t: "산출하다", o: ["거부하다", "산출하다", "소비하다", "숨기다"] },
    { w: "Zealous", t: "열성적인", o: ["게으른", "열성적인", "무관심한", "두려워하는"] },
    { w: "Abandon", t: "버리다", o: ["유지하다", "버리다", "수집하다", "보호하다"] },
    { w: "Capacity", t: "능력", o: ["무능", "능력", "크기", "위험"] },
    { w: "Durable", t: "내구성이 있는", o: ["약한", "내구성이 있는", "부드러운", "비싼"] },
    { w: "Efficient", t: "효율적인", o: ["느린", "효율적인", "복잡한", "낭비하는"] },
    { w: "Flexible", t: "유연한", o: ["딱딱한", "유연한", "부서지기 쉬운", "강한"] },
    { w: "Guarantee", t: "보장하다", o: ["부인하다", "보장하다", "추측하다", "의심하다"] },
    { w: "Hazardous", t: "위험한", o: ["안전한", "위험한", "깨끗한", "유익한"] },
    { w: "Identify", t: "확인하다", o: ["숨기다", "확인하다", "무시하다", "혼동하다"] },
    { w: "Legitimate", t: "합법적인", o: ["불법적인", "합법적인", "부정한", "공정하지 못한"] },
    { w: "Magnificent", t: "장엄한", o: ["초라한", "장엄한", "평범한", "어두운"] },
    { w: "Noticeable", t: "두드러진", o: ["미미한", "두드러진", "감춰진", "작은"] },
    { w: "Optimistic", t: "낙관적인", o: ["비관적인", "낙관적인", "우울한", "현실적인"] },
    { w: "Precise", t: "정확한", o: ["부정확한", "정확한", "대략적인", "복잡한"] },
    { w: "Rational", t: "합리적인", o: ["비합리적인", "합리적인", "감정적인", "어리석은"] },
    { w: "Significant", t: "중요한", o: ["사소한", "중요한", "작은", "평범한"] },
    { w: "Thrive", t: "번영하다", o: ["쇠퇴하다", "번영하다", "멈추다", "고전하다"] },
    { w: "Urgent", t: "긴급한", o: ["여유로운", "긴급한", "사소한", "천천히"] },
    { w: "Versatile", t: "다재다능한", o: ["제한된", "평범한", "다재다능한", "서투른"] },
    { w: "Wander", t: "헤매다", o: ["머무르다", "헤매다", "달리다", "계획하다"] },
    { w: "Accumulate", t: "축적하다", o: ["분산시키다", "축적하다", "낭비하다", "잃다"] },
    { w: "Brave", t: "용감한", o: ["겁많은", "용감한", "수줍은", "화난"] },
    { w: "Crucial", t: "결정적인", o: ["사소한", "결정적인", "일반적인", "부수적인"] },
    { w: "Diverse", t: "다양한", o: ["동일한", "다양한", "단조로운", "복잡한"] },
    { w: "Emerge", t: "나타나다", o: ["사라지다", "나타나다", "숨다", "멈추다"] },
    { w: "Frequent", t: "빈번한", o: ["드문", "빈번한", "가끔의", "조용한"] }
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