/**
 * Word Quiz Master - JavaScript Logic
 */

// Quiz database (expanded with more words for variety)
const wordDb = [
    // --- 1번부터 50번 (기본 단어) ---
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
    { w: "Frequent", t: "빈번한", o: ["드문", "빈번한", "가끔의", "조용한"] },

    // --- 51번부터 100번 (추가 단어) ---
    { w: "Abstract", t: "추상적인", o: ["구체적인", "추상적인", "복잡한", "단순한"] },
    { w: "Accurate", t: "정확한", o: ["부정확한", "정확한", "대략적인", "복잡한"] },
    { w: "Adverse", t: "불리한", o: ["유리한", "불리한", "친절한", "적극적인"] },
    { w: "Ambiguous", t: "모호한", o: ["명확한", "모호한", "단단한", "부드러운"] },
    { w: "Appropriate", t: "적절한", o: ["부적절한", "적절한", "지루한", "화려한"] },
    { w: "Authentic", t: "진본의", o: ["가짜의", "진본의", "평범한", "새로운"] },
    { w: "Bizarre", t: "기괴한", o: ["평범한", "기괴한", "아름다운", "친숙한"] },
    { w: "Coherent", t: "일관성 있는", o: ["모순되는", "일관성 있는", "복잡한", "단순한"] },
    { w: "Collide", t: "충돌하다", o: ["피하다", "충돌하다", "협력하다", "수정하다"] },
    { w: "Compensate", t: "보상하다", o: ["처벌하다", "보상하다", "무시하다", "요구하다"] },
    { w: "Compliment", t: "칭찬하다", o: ["비난하다", "칭찬하다", "무시하다", "수락하다"] },
    { w: "Consistent", t: "일치하는", o: ["변덕스러운", "일치하는", "부족한", "충분한"] },
    { w: "Contradict", t: "모순되다", o: ["동의하다", "모순되다", "지지하다", "설명하다"] },
    { w: "Deceive", t: "속이다", o: ["정직하다", "속이다", "도와주다", "무시하다"] },
    { w: "Definite", t: "명확한", o: ["불확실한", "명확한", "모호한", "위험한"] },
    { w: "Deliberate", t: "의도적인", o: ["우연한", "의도적인", "실수의", "빠른"] },
    { w: "Depict", t: "묘사하다", o: ["숨기다", "묘사하다", "파괴하다", "수정하다"] },
    { w: "Deteriorate", t: "악화되다", o: ["개선되다", "악화되다", "멈추다", "유지하다"] },
    { w: "Drastic", t: "급격한", o: ["점진적인", "급격한", "사소한", "평범한"] },
    { w: "Elaborate", t: "정교한", o: ["단순한", "정교한", "거친", "오래된"] },
    { w: "Emphasize", t: "강조하다", o: ["무시하다", "강조하다", "축소하다", "수락하다"] },
    { w: "Endure", t: "견디다", o: ["포기하다", "견디다", "즐기다", "피하다"] },
    { w: "Essential", t: "필수적인", o: ["사소한", "필수적인", "불필요한", "선택적인"] },
    { w: "Exaggerate", t: "과장하다", o: ["축소하다", "과장하다", "무시하다", "정당화하다"] },
    { w: "Exclusive", t: "독점적인", o: ["공동의", "독점적인", "평범한", "공개적인"] },
    { w: "Fascinate", t: "매료시키다", o: ["지루하게하다", "매료시키다", "겁주다", "무관심하다"] },
    { w: "Fundamental", t: "근본적인", o: ["부수적인", "근본적인", "복잡한", "사소한"] },
    { w: "Genuine", t: "진실한", o: ["거짓된", "진실한", "인공적인", "화려한"] },
    { w: "Grateful", t: "감사하는", o: ["무례한", "감사하는", "화난", "슬픈"] },
    { w: "Hostile", t: "적대적인", o: ["우호적인", "적대적인", "냉담한", "평화로운"] },
    { w: "Illustrate", t: "설명하다", o: ["혼동시키다", "설명하다", "숨기다", "무시하다"] },
    { w: "Immense", t: "거대한", o: ["작은", "거대한", "가벼운", "평범한"] },
    { w: "Imply", t: "암시하다", o: ["직설하다", "암시하다", "부인하다", "숨기다"] },
    { w: "Inevitable", t: "피할 수 없는", o: ["피할 수 있는", "피할 수 없는", "우연한", "희박한"] },
    { w: "Infer", t: "추론하다", o: ["직시하다", "추론하다", "의심하다", "무시하다"] },
    { w: "Inherent", t: "타고난", o: ["습득한", "타고난", "외적인", "인공적인"] },
    { w: "Initial", t: "처음의", o: ["최종의", "처음의", "중간의", "중요한"] },
    { w: "Insight", t: "통찰력", o: ["무지", "통찰력", "선입견", "관심"] },
    { w: "Intense", t: "강렬한", o: ["약한", "강렬한", "평범한", "부드러운"] },
    { w: "Interpret", t: "해석하다", o: ["오해하다", "해석하다", "숨기다", "수용하다"] },
    { w: "Intimate", t: "친밀한", o: ["서먹한", "친밀한", "적대적인", "불편한"] },
    { w: "Majority", t: "다수", o: ["소수", "다수", "전체", "일부"] },
    { w: "Manifest", t: "드러내다", o: ["숨기다", "드러내다", "파괴하다", "유지하다"] },
    { w: "Modify", t: "수정하다", o: ["유지하다", "수정하다", "포기하다", "비난하다"] },
    { w: "Mutual", t: "상호간의", o: ["일방적인", "상호간의", "개인적인", "공통의"] },
    { w: "Obscure", t: "모호한", o: ["선명한", "모호한", "유명한", "간단한"] },
    { w: "Prominent", t: "두드러진", o: ["평범한", "두드러진", "감춰진", "작은"] },
    { w: "Persist", t: "지속하다", o: ["멈추다", "지속하다", "포기하다", "변경하다"] },
    { w: "Phenomenon", t: "현상", o: ["본질", "현상", "실수", "환상"] },
    { w: "Potential", t: "잠재적인", o: ["현재의", "잠재적인", "확실한", "과거의"] },

    // --- 101번부터 200번 (추가 단어) ---
    { w: "Abundant", t: "풍부한", o: ["부족한", "풍부한", "희귀한", "평범한"] },
    { w: "Acquire", t: "획득하다", o: ["잃다", "획득하다", "포기하다", "기부하다"] },
    { w: "Adapt", t: "적응하다", o: ["거부하다", "적응하다", "고치다", "무시하다"] },
    { w: "Adequate", t: "적절한", o: ["부족한", "적절한", "과도한", "특별한"] },
    { w: "Advocate", t: "지지하다", o: ["반대하다", "지지하다", "비난하다", "조롱하다"] },
    { w: "Aggregate", t: "합계의", o: ["부분의", "합계의", "나누어진", "사소한"] },
    { w: "Allocate", t: "할당하다", o: ["수집하다", "할당하다", "거절하다", "유지하다"] },
    { w: "Alternative", t: "대안", o: ["고정", "대안", "결과", "원인"] },
    { w: "Ambition", t: "야망", o: ["게으름", "야망", "공포", "평화"] },
    { w: "Amplify", t: "확대하다", o: ["축소하다", "확대하다", "숨기다", "무시하다"] },
    { w: "Analyze", t: "분석하다", o: ["무시하다", "분석하다", "추측하다", "창조하다"] },
    { w: "Appreciate", t: "감사하다", o: ["비난하다", "감사하다", "무관심하다", "요구하다"] },
    { w: "Artificial", t: "인공적인", o: ["천연의", "인공적인", "우아한", "단순한"] },
    { w: "Aspect", t: "측면", o: ["전체", "측면", "결과", "원인"] },
    { w: "Assemble", t: "조립하다", o: ["분해하다", "조립하다", "파괴하다", "수정하다"] },
    { w: "Assert", t: "주장하다", o: ["부인하다", "주장하다", "의심하다", "숨기다"] },
    { w: "Assess", t: "평가하다", o: ["무시하다", "평가하다", "제안하다", "결정하다"] },
    { w: "Asset", t: "자산", o: ["부채", "자산", "손실", "비용"] },
    { w: "Assure", t: "보장하다", o: ["의심하다", "보장하다", "거짓말하다", "방해하다"] },
    { w: "Astonish", t: "놀라게 하다", o: ["진정시키다", "놀라게 하다", "지루하게하다", "무시하다"] },
    { w: "Attain", t: "달성하다", o: ["실패하다", "달성하다", "포기하다", "지연시키다"] },
    { w: "Attribute", t: "속성", o: ["결과", "속성", "원인", "행동"] },
    { w: "Audience", t: "청중", o: ["배우", "청중", "무대", "작가"] },
    { w: "Authority", t: "권위", o: ["복종", "권위", "자유", "반항"] },
    { w: "Available", t: "이용 가능한", o: ["부족한", "이용 가능한", "바쁜", "비싼"] },
    { w: "Aware", t: "알고 있는", o: ["무지한", "알고 있는", "무관심한", "어리석은"] },
    { w: "Barrier", t: "장벽", o: ["통로", "장벽", "도움", "연결"] },
    { w: "Benefit", t: "이익", o: ["손해", "이익", "비용", "노력"] },
    { w: "Bias", t: "편견", o: ["공정", "편견", "정의", "지식"] },
    { w: "Boundary", t: "경계", o: ["중심", "경계", "내부", "확장"] },
    { w: "Brief", t: "간결한", o: ["장황한", "간결한", "복잡한", "긴"] },
    { w: "Candidate", t: "후보자", o: ["유권자", "후보자", "심사관", "승리자"] },
    { w: "Capable", t: "능력 있는", o: ["무능한", "능력 있는", "게으른", "서투른"] },
    { w: "Capture", t: "포착하다", o: ["놓아주다", "포착하다", "잃다", "무시하다"] },
    { w: "Cease", t: "중단하다", o: ["시작하다", "중단하다", "계속하다", "가속하다"] },
    { w: "Challenge", t: "도전", o: ["안주", "도전", "성공", "실패"] },
    { w: "Characteristic", t: "특징", o: ["일반성", "특징", "평범함", "전체"] },
    { w: "Clarify", t: "명확하게 하다", o: ["혼란시키다", "명확하게 하다", "숨기다", "지연시키다"] },
    { w: "Collaborate", t: "협력하다", o: ["경쟁하다", "협력하다", "다투다", "방해하다"] },
    { w: "Common", t: "일반적인", o: ["특별한", "일반적인", "희귀한", "고유한"] },
    { w: "Communicate", t: "의사소통하다", o: ["침묵하다", "의사소통하다", "무시하다", "피하다"] },
    { w: "Compare", t: "비교하다", o: ["무시하다", "비교하다", "수락하다", "동의하다"] },
    { w: "Compel", t: "강요하다", o: ["설득하다", "강요하다", "요청하다", "허락하다"] },
    { w: "Competent", t: "유능한", o: ["미숙한", "유능한", "부적격한", "평범한"] },
    { w: "Complex", t: "복잡한", o: ["단순한", "복잡한", "쉬운", "명확한"] },
    { w: "Comply", t: "따르다", o: ["거부하다", "따르다", "위반하다", "무시하다"] },
    { w: "Component", t: "구성 요소", o: ["전체", "구성 요소", "완성품", "장식"] },
    { w: "Concentrate", t: "집중하다", o: ["분산하다", "집중하다", "무시하다", "졸다"] },
    { w: "Concept", t: "개념", o: ["실제", "개념", "물질", "행동"] },
    { w: "Conclude", t: "결론짓다", o: ["시작하다", "결론짓다", "추측하다", "연기하다"] },
    { w: "Conduct", t: "수행하다", o: ["멈추다", "수행하다", "방해하다", "관찰하다"] },
    { w: "Confess", t: "고백하다", o: ["숨기다", "고백하다", "거짓말하다", "부인하다"] },
    { w: "Confidence", t: "자신감", o: ["불안", "자신감", "의심", "두려움"] },
    { w: "Confirm", t: "확인하다", o: ["부인하다", "확인하다", "의심하다", "취소하다"] },
    { w: "Conflict", t: "갈등", o: ["조화", "갈등", "평화", "협력"] },
    { w: "Conform", t: "순응하다", o: ["반항하다", "순응하다", "변경하다", "창조하다"] },
    { w: "Consequence", t: "결과", o: ["원인", "결과", "시작", "의도"] },
    { w: "Considerable", t: "상당한", o: ["사소한", "상당한", "부족한", "일반적인"] },
    { w: "Constant", t: "끊임없는", o: ["일시적인", "끊임없는", "변덕스러운", "드문"] },
    { w: "Construct", t: "건설하다", o: ["파괴하다", "건설하다", "분해하다", "설계하다"] },
    { w: "Consult", t: "상담하다", o: ["명령하다", "상담하다", "무시하다", "결정하다"] },
    { w: "Consume", t: "소비하다", o: ["생산하다", "소비하다", "저장하다", "낭비하다"] },
    { w: "Contact", t: "접촉하다", o: ["피하다", "접촉하다", "무시하다", "단절하다"] },
    { w: "Contain", t: "포함하다", o: ["배제하다", "포함하다", "방출하다", "잃다"] },
    { w: "Contemporary", t: "현대의", o: ["고대의", "현대의", "미래의", "오래된"] },
    { w: "Context", t: "맥락", o: ["단어", "맥락", "문장", "결과"] },
    { w: "Contrast", t: "대조", o: ["유사", "대조", "일치", "균형"] },
    { w: "Contribute", t: "기여하다", o: ["방해하다", "기여하다", "거절하다", "받다"] },
    { w: "Convey", t: "전달하다", o: ["숨기다", "전달하다", "방해하다", "보유하다"] },
    { w: "Convince", t: "확신시키다", o: ["의심하게하다", "확신시키다", "속이다", "무시하다"] },
    { w: "Corporate", t: "기업의", o: ["개인의", "기업의", "정부의", "작은"] },
    { w: "Correspond", t: "일치하다", o: ["다르다", "일치하다", "갈등하다", "무시하다"] },
    { w: "Counter", t: "반대하다", o: ["동의하다", "반대하다", "지지하다", "수락하다"] },
    { w: "Courage", t: "용기", o: ["겁", "용기", "두려움", "불안"] },
    { w: "Create", t: "창조하다", o: ["파괴하다", "창조하다", "복사하다", "유지하다"] },
    { w: "Criterion", t: "기준", o: ["결과", "기준", "예외", "우연"] },
    { w: "Critical", t: "중요한", o: ["사소한", "중요한", "비판적인", "부수적인"] },
    { w: "Crucial", t: "결정적인", o: ["사소한", "결정적인", "일반적인", "부족한"] },
    { w: "Cultivate", t: "경작하다", o: ["파괴하다", "경작하다", "방치하다", "수확하다"] },
    { w: "Curious", t: "궁금한", o: ["무관심한", "궁금한", "지루한", "똑똑한"] },
    { w: "Current", t: "현재의", o: ["과거의", "현재의", "미래의", "낡은"] },
    { w: "Custom", t: "관습", o: ["새로움", "관습", "법률", "개인"] },
    { w: "Damage", t: "손상", o: ["회복", "손상", "보호", "개선"] },
    { w: "Decline", t: "거절하다", o: ["수락하다", "거절하다", "감소하다", "증가하다"] },
    { w: "Dedicate", t: "헌신하다", o: ["무시하다", "헌신하다", "게으르다", "포기하다"] },
    { w: "Deficiency", t: "결핍", o: ["과잉", "결핍", "충분", "완성"] },
    { w: "Degree", t: "정도", o: ["한계", "정도", "온도", "결과"] },
    { w: "Delay", t: "지연시키다", o: ["가속하다", "지연시키다", "시작하다", "마치다"] },
    { w: "Delicate", t: "섬세한", o: ["거친", "섬세한", "강한", "단순한"] },
    { w: "Deliver", t: "배달하다", o: ["받다", "배달하다", "보유하다", "숨기다"] },
    { w: "Demand", t: "요구하다", o: ["제공하다", "요구하다", "포기하다", "수락하다"] },
    { w: "Democracy", t: "민주주의", o: ["독재", "민주주의", "왕권", "무질서"] },
    { w: "Demonstrate", t: "입증하다", o: ["숨기다", "입증하다", "부인하다", "의심하다"] },
    { w: "Deny", t: "부인하다", o: ["인정하다", "부인하다", "확인하다", "지지하다"] },
    { w: "Depart", t: "떠나다", o: ["도착하다", "떠나다", "머무르다", "돌아오다"] },
    { w: "Depend", t: "의존하다", o: ["독립하다", "의존하다", "도와주다", "무시하다"] },
    { w: "Describe", t: "설명하다", o: ["숨기다", "설명하다", "무시하다", "파괴하다"] },
    { w: "Deserve", t: "가치가 있다", o: ["부적절하다", "가치가 있다", "부족하다", "나쁘다"] },
    { w: "Design", t: "설계하다", o: ["파괴하다", "설계하다", "모방하다", "우연"] },
    { w: "Desire", t: "욕망", o: ["혐오", "욕망", "만족", "무관심"] }
];

let currentIdx = 0;
let studyCount = localStorage.getItem('todayCount') ? parseInt(localStorage.getItem('todayCount')) : 0;
const DAILY_GOAL = 20; // 하루 목표 단어 수 (원하는 대로 수정 가능)

// Wrong words persistence
let wrongWords = localStorage.getItem('wrongWords') ? JSON.parse(localStorage.getItem('wrongWords')) : [];

let isReviewMode = false; // 현재 재시험 모드인지 확인하는 변수
let reviewIdx = 0;

/**
 * Update the study stats displayed to the user
 */
function updateStats() {
  const countEl = document.getElementById('study-count');
  const percentEl = document.getElementById('progress-percent');
  
  if (countEl) countEl.innerText = studyCount;
  if (percentEl) {
    const progress = Math.min(Math.round((studyCount / DAILY_GOAL) * 100), 100);
    percentEl.innerText = progress;
  }
}

/**
 * Render the wrong words list in the UI
 */
function displayWrongWords() {
  const listDiv = document.getElementById('wrong-word-list');
  const retryBtn = document.getElementById('retry-btn');
  if (!listDiv) return;
  
  listDiv.innerHTML = ""; // 기존 내용 비우기

  if (wrongWords.length === 0) {
    listDiv.innerHTML = "<p style='color: #a0aec0;'>틀린 단어가 없습니다. 완벽해요! 👍</p>";
    if (retryBtn) retryBtn.style.display = "none"; // 오답 없으면 버튼 숨김
    return;
  }

  if (retryBtn) retryBtn.style.display = "block"; // 오답 있으면 버튼 보임
  
  wrongWords.forEach(wordObj => {
    const item = document.createElement('div');
    item.style.cssText = "background: white; padding: 10px 15px; border-radius: 8px; border: 1px solid #fecaca; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
    item.innerHTML = `
        <strong style="color: #e53e3e;">${wordObj.w}</strong> 
        <span style="color: #718096; font-size: 0.85rem;">: ${wordObj.t}</span>
        <button onclick="speakSpecificWord('${wordObj.w}')" style="background: none; border: none; cursor: pointer;">🔊</button>
    `;
    listDiv.appendChild(item);
  });
}

/**
 * Speak a specific word from the wrong words list
 */
function speakSpecificWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

/**
 * Clear the wrong words list
 */
function clearWrongWords() {
  if (confirm("오답 노트를 모두 비울까요?")) {
    wrongWords = [];
    localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    displayWrongWords();
  }
}

/**
 * Reset the user's study progress
 */
function resetProgress() {
  // 사용자에게 한 번 더 물어봅니다 (실수 방지)
  if (confirm("오늘 공부한 기록을 모두 초기화할까요?")) {
    studyCount = 0; // 숫자를 0으로 변경
    localStorage.setItem('todayCount', 0); // 브라우저 저장소도 0으로 변경
    updateStats(); // 화면에 표시되는 숫자와 그래프 업데이트
    alert("기록이 초기화되었습니다. 다시 힘내봐요! 💪");
  }
}

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

  // Shuffle options for better variety
  const shuffledOptions = [...quiz.o].sort(() => Math.random() - 0.5);

  // Create option buttons
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = opt;
    btn.setAttribute('aria-label', `선택지: ${opt}`);
    btn.onclick = () => checkAnswer(opt, quiz.t, btn);
    optionsDiv.appendChild(btn);
  });
}

// 오답 재시험 모드 시작!
function startReviewMode() {
  if (wrongWords.length === 0) return;
  
  isReviewMode = true;
  reviewIdx = 0;
  
  // 화면 상단으로 부드럽게 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  alert("지금부터 오답 노트에 있는 단어들로만 시험을 시작합니다! 파이팅! 💪");
  loadReviewQuiz();
}

// 오답 전용 퀴즈 로드
function loadReviewQuiz() {
  const quiz = wrongWords[reviewIdx];
  
  // 퀴즈 헤더 제목 변경 (현재 모드 표시)
  const headerTitle = document.getElementById('quiz-header-text');
  if (headerTitle) {
      headerTitle.innerText = "📕 오답 복습 모드";
      headerTitle.style.color = "#e53e3e";
  }

  const targetWord = document.getElementById('target-word');
  const resultMsg = document.getElementById('result-msg');
  const optionsDiv = document.getElementById('options');
  const phoneticDisplay = document.getElementById('phonetic');

  targetWord.innerText = quiz.w;
  resultMsg.innerText = "";
  optionsDiv.innerHTML = "";
  
  if (phoneticDisplay) {
    phoneticDisplay.innerText = "Loading phonetics...";
    fetchPhonetic(quiz.w).then(phonetic => {
      phoneticDisplay.innerText = phonetic;
    });
  }
  
  const shuffledOptions = [...quiz.o].sort(() => Math.random() - 0.5);
  
  shuffledOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerText = opt;
      btn.onclick = () => checkReviewAnswer(opt, quiz.t, btn);
      optionsDiv.appendChild(btn);
  });
}

/**
 * Verify user's choice
 */
function checkAnswer(selected, correct, selectedBtn) {
  const msg = document.getElementById('result-msg');
  const allBtns = document.querySelectorAll('.opt-btn');
  const quiz = wordDb[currentIdx];
  
  if (selected === correct) {
    // Correct UI
    studyCount++;
    localStorage.setItem('todayCount', studyCount); // 브라우저에 저장
    updateStats(); // 화면 업데이트
    
    msg.innerText = "정답입니다! 훌륭해요! 🎉";
    msg.style.color = "#2ecc71";
    
    // Highlight correct button
    allBtns.forEach(btn => {
      if (btn.innerText === correct) {
        btn.classList.add('correct');
      }
      btn.disabled = true; // Disable all to prevent double-clicks
    });

    // Auto load next quiz after slightly shorter delay
    setTimeout(() => {
      currentIdx = (currentIdx + 1) % wordDb.length;
      loadQuiz();
    }, 1200);
  } else {
    // Incorrect UI
    msg.innerText = "아쉬워요! 다시 한 번 생각해보세요. 🤔";
    msg.style.color = "#e74c3c";
    selectedBtn.classList.add('wrong');
    
    // --- 오답 노트 저장 로직 추가 ---
    // 이미 저장된 단어인지 확인 후 없으면 추가
    if (!wrongWords.some(item => item.w === quiz.w)) {
      wrongWords.push(quiz); // 전체 데이터 저장
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
      displayWrongWords(); // 화면 업데이트
    }
    // ------------------------------
    
    // Optional: Shake animation or temporary feedback
    selectedBtn.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)' },
      { transform: 'translateX(0)' }
    ], { duration: 200, iterations: 2 });
  }
}

// 오답 모드 정답 체크
function checkReviewAnswer(selected, correct, selectedBtn) {
  const allBtns = document.querySelectorAll('.opt-btn');
  
  if(selected === correct) {
      selectedBtn.classList.add('correct');
      allBtns.forEach(btn => btn.disabled = true);
      
      setTimeout(() => {
          alert("오답 정복 완료! 🎉");
          
          // 정복한 단어는 오답 노트에서 삭제
          wrongWords.splice(reviewIdx, 1);
          localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
          displayWrongWords();

          if (wrongWords.length > 0) {
              loadReviewQuiz(); // 다음 오답으로
          } else {
              alert("모든 오답을 마스터했습니다! 대단해요! 🏆");
              location.reload(); // 원래 모드로 복귀 (새로고침)
          }
      }, 500);
  } else {
      selectedBtn.classList.add('wrong');
      selectedBtn.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
      ], { duration: 200, iterations: 2 });
      setTimeout(() => {
          alert("아직 조금 더 공부가 필요해요! 다시 도전해보세요.");
          selectedBtn.classList.remove('wrong');
      }, 500);
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
  updateStats();
  displayWrongWords(); // Render the wrong words on load
  loadQuiz();
});
