const quotes = [
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨"
  },

  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드"
  },

  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임"
  },

  { quote: "자신감 있는 표정을 지으면 자신감이 생긴다.", author: "찰스다윈" },

  {
    quote:
      "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다.",
    author: "루이사 메이올콧"
  },

  {
    quote:
      "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
    author: "맹자"
  },

  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테"
  },

  {
    quote:
      "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭"
  },

  {
    quote:
      "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐"
  },

  {
    quote:
      "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
    author: "오손 웰스"
  }
];

const quoteSpanElement = document.querySelector("#quote span:first-child");
const authorSpanElement = document.querySelector("#quote span:last-child");

function getRandomQuote() {
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log("랜덤하게 선택된 명언 = ", selectedQuote);
  return selectedQuote;
}

const randomQuote = getRandomQuote();
quoteSpanElement.innerText = randomQuote.quote;
authorSpanElement.innerText = randomQuote.author;
