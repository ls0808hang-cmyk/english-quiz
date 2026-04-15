/**
 * English Quiz Hub - JavaScript Logic
 */

// Quiz database (200 high-frequency words)
const wordDb = [
    // --- 1 to 50 ---
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

    // --- 51 to 100 ---
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

    // --- 101 to 200 ---
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
const DAILY_GOAL = 20; 
let currentStreak = 0; 
let currentExample = ""; 

// Persistence
let wrongWords = localStorage.getItem('wrongWords') ? JSON.parse(localStorage.getItem('wrongWords')) : [];
let isReviewMode = false;
let reviewIdx = 0;

/**
 * Toast Notification
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.innerText = message;
  toast.style.display = 'block';
  
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2500);
}

/**
 * Update Stats & Progress Bar
 */
function updateStats() {
  const countEl = document.getElementById('study-count');
  const percentEl = document.getElementById('progress-percent');
  const progressFill = document.getElementById('progress-bar-fill');
  
  if (countEl) countEl.innerText = studyCount;
  
  const progress = Math.min(Math.round((studyCount / DAILY_GOAL) * 100), 100);
  if (percentEl) percentEl.innerText = progress;
  if (progressFill) progressFill.style.width = `${progress}%`;

  if (studyCount === DAILY_GOAL && !localStorage.getItem('goalReached')) {
    triggerGoalCelebration();
    localStorage.setItem('goalReached', 'true');
  }
}

function triggerGoalCelebration() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#166534', '#ffbb33', '#ef4444']
    });
    showToast("🎉 축하합니다! 오늘 목표를 달성했습니다!");
}

function updateStreakUI(reset = false) {
    const streakEl = document.getElementById('current-streak');
    const streakContainer = document.getElementById('streak-container');
    
    if (reset) {
        currentStreak = 0;
    } else {
        currentStreak++;
        streakContainer.classList.remove('streak-pulse');
        void streakContainer.offsetWidth; // trigger reflow
        streakContainer.classList.add('streak-pulse');
    }
    
    if (streakEl) streakEl.innerText = currentStreak;
}

/**
 * Wrong Words Notebook Rendering
 */
function displayWrongWords() {
  const listDiv = document.getElementById('wrong-word-list');
  const retryBtn = document.getElementById('retry-btn');
  if (!listDiv) return;
  
  listDiv.innerHTML = ""; 

  if (wrongWords.length === 0) {
    listDiv.innerHTML = '<p class="empty-note-text">아직 저장된 오답이 없습니다. 퀴즈를 먼저 풀고 틀린 단어를 오답노트에 저장해 보세요.</p>';
    if (retryBtn) retryBtn.style.display = "none";
    return;
  }

  if (retryBtn) retryBtn.style.display = "block";
  
  wrongWords.forEach(wordObj => {
    const item = document.createElement('div');
    item.className = "wrong-item fade-in";
    item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <strong>${wordObj.w}</strong> 
                <span>: ${wordObj.t}</span>
            </div>
            <button onclick="speakSpecificWord('${wordObj.w}')" style="background: none; border: none; cursor: pointer; font-size: 1.2rem;">🔊</button>
        </div>
    `;
    listDiv.appendChild(item);
  });
}

function speakSpecificWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function clearWrongWords() {
  if (confirm("오답 노트를 모두 비울까요?")) {
    wrongWords = [];
    localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    displayWrongWords();
  }
}

function resetProgress() {
  if (confirm("오늘 공부한 기록을 모두 초기화할까요?")) {
    studyCount = 0;
    currentStreak = 0;
    localStorage.setItem('todayCount', 0);
    localStorage.removeItem('goalReached');
    updateStats();
    updateStreakUI(true);
    showToast("기록이 초기화되었습니다. 💪");
  }
}

/**
 * Dictionary API Integration
 */
async function fetchPhoneticAndExample(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) return { phonetic: "", example: "" };
    const data = await response.json();
    
    const phonetic = data[0]?.phonetics?.find(p => p.text)?.text || data[0]?.phonetic || "";
    
    let example = "";
    for (const meaning of data[0].meanings) {
        for (const definition of meaning.definitions) {
            if (definition.example) {
                example = definition.example;
                break;
            }
        }
        if (example) break;
    }
    
    return { phonetic, example };
  } catch {
    return { phonetic: "", example: "" };
  }
}

/**
 * Quiz Logic
 */
async function loadQuiz() {
  const quiz = wordDb[currentIdx];
  const targetWord = document.getElementById('target-word');
  const phoneticDisplay = document.getElementById('phonetic');
  const resultMsg = document.getElementById('result-msg');
  const optionsDiv = document.getElementById('options');
  const exampleContainer = document.getElementById('example-sentence-container');

  // UI Reset
  targetWord.innerText = quiz.w;
  targetWord.classList.remove('fade-in');
  void targetWord.offsetWidth; 
  targetWord.classList.add('fade-in');

  phoneticDisplay.innerText = "/발음 기호 불러오는 중.../";
  resultMsg.className = "status-box";
  resultMsg.innerHTML = '문제를 풀고 정답을 확인한 뒤, 헷갈린 단어는 오답노트에 저장해 반복 복습해 보세요.';
  optionsDiv.innerHTML = "";
  exampleContainer.style.display = 'none';

  // Async fetch
  fetchPhoneticAndExample(quiz.w).then(data => {
    phoneticDisplay.innerText = data.phonetic || "/기호 정보 없음/";
    currentExample = data.example;
  });

  // Options
  const shuffledOptions = [...quiz.o].sort(() => Math.random() - 0.5);
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, quiz.t, btn);
    optionsDiv.appendChild(btn);
  });
}

function revealExample() {
    const exampleContainer = document.getElementById('example-sentence-container');
    const exampleText = document.getElementById('example-text');
    if (currentExample) {
        exampleText.innerText = currentExample;
        exampleContainer.style.display = 'flex';
    }
}

function checkAnswer(selected, correct, selectedBtn) {
  const allBtns = document.querySelectorAll('.option-btn');
  const quiz = wordDb[currentIdx];
  const resultMsg = document.getElementById('result-msg');
  
  allBtns.forEach(btn => btn.style.pointerEvents = 'none');

  if (selected === correct) {
    selectedBtn.classList.add('correct');
    selectedBtn.classList.add('correct-anim');
    resultMsg.className = "status-box success";
    resultMsg.innerText = "정답입니다! 정말 멋져요! 👏";
    
    studyCount++;
    localStorage.setItem('todayCount', studyCount);
    updateStats();
    updateStreakUI();
    revealExample(); 
    
    setTimeout(() => {
      currentIdx = (currentIdx + 1) % wordDb.length;
      loadQuiz();
    }, 2500); 
  } else {
    selectedBtn.classList.add('wrong');
    selectedBtn.classList.add('wrong-anim');
    resultMsg.className = "status-box error";
    resultMsg.innerText = `아쉬워요! 정답은 '${correct}'입니다. 오답 노트에 저장할게요. ✍️`;
    updateStreakUI(true); 
    
    if (!wrongWords.some(item => item.w === quiz.w)) {
      wrongWords.push(quiz);
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
      displayWrongWords();
    }

    setTimeout(() => {
      selectedBtn.classList.remove('wrong-anim');
      allBtns.forEach(btn => btn.style.pointerEvents = 'auto');
    }, 1000);
  }
}

/**
 * Review Mode Logic
 */
function startReviewMode() {
  if (wrongWords.length === 0) return;
  isReviewMode = true;
  reviewIdx = 0;
  window.scrollTo({ top: document.getElementById('quiz-section').offsetTop - 100, behavior: 'smooth' });
  showToast("오답 복습 모드를 시작합니다! 💪");
  loadReviewQuiz();
}

function loadReviewQuiz() {
  const quiz = wrongWords[reviewIdx];
  const headerTitle = document.getElementById('quiz-header-text');
  if (headerTitle) {
      headerTitle.innerText = "📕 오답 복습 모드";
      headerTitle.style.color = "var(--error)";
  }

  const targetWord = document.getElementById('target-word');
  const resultMsg = document.getElementById('result-msg');
  const optionsDiv = document.getElementById('options');
  const phoneticDisplay = document.getElementById('phonetic');
  const exampleContainer = document.getElementById('example-sentence-container');

  targetWord.innerText = quiz.w;
  targetWord.classList.add('fade-in');
  resultMsg.className = "status-box";
  resultMsg.innerText = "이전에 틀렸던 단어입니다. 다시 한번 맞춰보세요!";
  optionsDiv.innerHTML = "";
  exampleContainer.style.display = 'none';
  
  if (phoneticDisplay) {
    phoneticDisplay.innerText = "/발음 기호 불러오는 중.../";
    fetchPhoneticAndExample(quiz.w).then(data => {
      phoneticDisplay.innerText = data.phonetic || "/기호 정보 없음/";
      currentExample = data.example;
    });
  }
  
  const shuffledOptions = [...quiz.o].sort(() => Math.random() - 0.5);
  shuffledOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerText = opt;
      btn.onclick = () => checkReviewAnswer(opt, quiz.t, btn);
      optionsDiv.appendChild(btn);
  });
}

function checkReviewAnswer(selected, correct, selectedBtn) {
  const allBtns = document.querySelectorAll('.option-btn');
  const resultMsg = document.getElementById('result-msg');
  
  allBtns.forEach(btn => btn.style.pointerEvents = 'none');

  if(selected === correct) {
      selectedBtn.classList.add('correct');
      selectedBtn.classList.add('correct-anim');
      resultMsg.className = "status-box success";
      resultMsg.innerText = "오답 정복 완료! 🎉";
      revealExample(); 
      
      setTimeout(() => {
          wrongWords.splice(reviewIdx, 1);
          localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
          displayWrongWords();

          if (wrongWords.length > 0) {
              loadReviewQuiz(); 
          } else {
              alert("모든 오답을 마스터했습니다! 대단해요! 🏆");
              location.reload(); 
          }
      }, 2500);
  } else {
      selectedBtn.classList.add('wrong');
      selectedBtn.classList.add('wrong-anim');
      resultMsg.className = "status-box error";
      resultMsg.innerText = "조금 더 공부가 필요해요! 💪";
      
      setTimeout(() => {
          selectedBtn.classList.remove('wrong-anim');
          allBtns.forEach(btn => btn.style.pointerEvents = 'auto');
      }, 1000);
  }
}

function speakWord() {
  const word = document.getElementById('target-word').innerText;
  if (word && !word.includes("Loading") && !word.includes("불러오는 중")) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  displayWrongWords(); 
  loadQuiz();
});
