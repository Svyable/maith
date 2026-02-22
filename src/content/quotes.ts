// SOTA motivational math/AI quotes, localized for all supported languages
// Joyful, inclusive, and nerdy 🧠✨

export interface Quote {
  text: string;
  author: string;
}

export const QUOTES: Record<string, Quote[]> = {
  en: [
    { text: "In mathematics you don't understand things. You just get used to them.", author: "John von Neumann" },
    { text: "The unreasonable effectiveness of mathematics in the natural sciences is a wonderful gift.", author: "Eugene Wigner" },
    { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
    { text: "Without mathematics, there's nothing you can do. Everything around you is mathematics.", author: "Shakuntala Devi" },
    { text: "To think, we must first calculate. To calculate, we must first dream.", author: "Ada Lovelace" },
    { text: "The beauty of mathematics only shows itself to more patient followers.", author: "Maryam Mirzakhani" },
    { text: "Do not worry about your difficulties in mathematics. I can assure you mine are still greater.", author: "Albert Einstein" },
    { text: "Mathematics is the language with which God has written the universe.", author: "Galileo Galilei" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Marie Curie" },
    { text: "The goal is not to be better than the other man, but your previous self.", author: "Dalai Lama" },
  ],
  es: [
    { text: "En matemáticas no entiendes las cosas. Solo te acostumbras a ellas.", author: "John von Neumann" },
    { text: "Las matemáticas son la poesía de las ideas lógicas.", author: "Albert Einstein" },
    { text: "Sin matemáticas no puedes hacer nada. Todo a tu alrededor es matemática.", author: "Shakuntala Devi" },
    { text: "La belleza de las matemáticas solo se muestra a los seguidores más pacientes.", author: "Maryam Mirzakhani" },
    { text: "No te preocupes por tus dificultades en matemáticas. Las mías son aún mayores.", author: "Albert Einstein" },
    { text: "Las matemáticas son el lenguaje en que Dios escribió el universo.", author: "Galileo Galilei" },
    { text: "Cada gran avance en la ciencia nació de una nueva audacia de la imaginación.", author: "John Dewey" },
  ],
  fr: [
    { text: "En mathématiques, on ne comprend pas les choses. On s'y habitue simplement.", author: "John von Neumann" },
    { text: "Les mathématiques pures sont, à leur manière, la poésie des idées logiques.", author: "Albert Einstein" },
    { text: "Sans les mathématiques, on ne peut rien faire. Tout autour de toi est mathématiques.", author: "Shakuntala Devi" },
    { text: "La beauté des mathématiques ne se révèle qu'aux adeptes les plus patients.", author: "Maryam Mirzakhani" },
    { text: "Les mathématiques sont la langue dans laquelle Dieu a écrit l'univers.", author: "Galileo Galilei" },
    { text: "L'imagination est plus importante que la connaissance.", author: "Albert Einstein" },
    { text: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
  ],
  de: [
    { text: "In der Mathematik versteht man die Dinge nicht. Man gewöhnt sich nur an sie.", author: "John von Neumann" },
    { text: "Die reine Mathematik ist auf ihre Weise die Poesie logischer Ideen.", author: "Albert Einstein" },
    { text: "Ohne Mathematik kann man nichts machen. Alles um dich herum ist Mathematik.", author: "Shakuntala Devi" },
    { text: "Die Schönheit der Mathematik zeigt sich nur geduldigen Nachfolgern.", author: "Maryam Mirzakhani" },
    { text: "Mathematik ist die Sprache, in der Gott das Universum geschrieben hat.", author: "Galileo Galilei" },
    { text: "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.", author: "Albert Einstein" },
  ],
  it: [
    { text: "In matematica non si capiscono le cose. Ci si abitua soltanto.", author: "John von Neumann" },
    { text: "La matematica pura è, a modo suo, la poesia delle idee logiche.", author: "Albert Einstein" },
    { text: "Senza la matematica non puoi fare nulla. Tutto intorno a te è matematica.", author: "Shakuntala Devi" },
    { text: "La bellezza della matematica si mostra solo ai seguaci più pazienti.", author: "Maryam Mirzakhani" },
    { text: "La matematica è la lingua con cui Dio ha scritto l'universo.", author: "Galileo Galilei" },
    { text: "L'immaginazione è più importante della conoscenza.", author: "Albert Einstein" },
  ],
  zh: [
    { text: "在数学中你不是去理解它，而是去适应它。", author: "冯·诺依曼" },
    { text: "纯粹数学在某种意义上是逻辑思想的诗。", author: "爱因斯坦" },
    { text: "没有数学，你什么都做不了。你周围的一切都是数学。", author: "沙坤塔拉·德维" },
    { text: "数学的美只向最有耐心的追随者展示自己。", author: "玛利亚姆·米尔扎哈尼" },
    { text: "数学是上帝书写宇宙所用的语言。", author: "伽利略" },
    { text: "天才只不过是重复努力的结果。", author: "爱迪生" },
    { text: "知识就是力量。", author: "弗兰西斯·培根" },
  ],
  ja: [
    { text: "数学において、物事を理解するのではなく、ただ慣れるだけだ。", author: "ジョン・フォン・ノイマン" },
    { text: "純粋数学はある意味で、論理的アイデアの詩である。", author: "アインシュタイン" },
    { text: "数学なしでは何もできない。あなたの周りのすべてが数学だ。", author: "シャクンタラ・デヴィ" },
    { text: "数学の美しさは、最も忍耐強い追随者にのみ姿を現す。", author: "マリアム・ミルザハニ" },
    { text: "数学は神が宇宙を書いた言語である。", author: "ガリレオ" },
    { text: "困難の中に機会がある。", author: "アインシュタイン" },
    { text: "七転び八起き。", author: "日本のことわざ" },
  ],
  ko: [
    { text: "수학에서는 것들을 이해하는 게 아니라 그냥 익숙해지는 것이다.", author: "존 폰 노이만" },
    { text: "순수수학은 논리적 아이디어의 시(詩)다.", author: "아인슈타인" },
    { text: "수학 없이는 아무것도 할 수 없다. 당신 주위의 모든 것이 수학이다.", author: "샤쿤탈라 데비" },
    { text: "수학의 아름다움은 가장 인내심 있는 추종자에게만 나타난다.", author: "마리암 미르자하니" },
    { text: "수학은 신이 우주를 쓴 언어다.", author: "갈릴레오" },
    { text: "실패는 성공의 어머니다.", author: "한국 속담" },
    { text: "하늘은 스스로 돕는 자를 돕는다.", author: "한국 속담" },
  ],
  hi: [
    { text: "गणित में आप चीज़ों को समझते नहीं, बस उनके अभ्यस्त हो जाते हैं।", author: "जॉन वॉन न्यूमान" },
    { text: "शुद्ध गणित अपने तरीके से तार्किक विचारों की कविता है।", author: "आइंस्टीन" },
    { text: "गणित के बिना कुछ नहीं किया जा सकता। तुम्हारे चारों ओर सब कुछ गणित है।", author: "शकुंतला देवी" },
    { text: "गणित की सुंदरता केवल सबसे धैर्यवान अनुयायियों को दिखती है।", author: "मरियम मिर्ज़ाखानी" },
    { text: "गणित वह भाषा है जिसमें ईश्वर ने ब्रह्मांड लिखा है।", author: "गैलीलियो" },
    { text: "करत करत अभ्यास के जड़मति होत सुजान।", author: "कबीर" },
    { text: "जहाँ चाह, वहाँ राह।", author: "हिन्दी कहावत" },
  ],
  pt: [
    { text: "Na matemática não se entendem as coisas. A gente apenas se acostuma com elas.", author: "John von Neumann" },
    { text: "A matemática pura é, à sua maneira, a poesia das ideias lógicas.", author: "Albert Einstein" },
    { text: "Sem matemática não dá pra fazer nada. Tudo ao seu redor é matemática.", author: "Shakuntala Devi" },
    { text: "A beleza da matemática só se mostra aos seguidores mais pacientes.", author: "Maryam Mirzakhani" },
    { text: "A matemática é a língua com que Deus escreveu o universo.", author: "Galileu Galilei" },
    { text: "Quem não arrisca não petisca.", author: "Provérbio Português" },
    { text: "Devagar se vai ao longe.", author: "Provérbio Português" },
  ],
};

export function getRandomQuote(locale: string): Quote {
  const pool = QUOTES[locale] ?? QUOTES.en;
  return pool[Math.floor(Math.random() * pool.length)];
}
