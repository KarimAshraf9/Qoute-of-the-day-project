var qutoes = [
  {
    quoteline: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "--Oscar Wilde",
  },

  {
    quoteline: "“So many books, so little time.”",
    quoteAuthor: "--Frank Zappa",
  },
  {
    quoteline: "“A room without books is like a body without a soul.”",
    quoteAuthor: "--Marcus Tullius Cicero",
  },

  {
    quoteline: "“You only live once, but if you do it right, once is enough.”",
    quoteAuthor: "--Mae West",
  },

  {
    quoteline: "“Be the change that you wish to see in the world.”",
    quoteAuthor: "--Mahatma Gandhi",
  },

  {
    quoteline:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    quoteAuthor: "--Mahatma Gandhi",
  },

  {
    quoteline: "“Without music, life would be a mistake.”",
    quoteAuthor: "--Friedrich Nietzsche",
  },
];

var previousIndex;
function generateNewQuote() {
  var index = Math.floor(Math.random() * qutoes.length);
  while (index === previousIndex) {
    index = Math.floor(Math.random() * qutoes.length);
  }
  previousIndex = index;
  document.getElementById("quoteLine").innerHTML = qutoes[index].quoteline;
  document.getElementById("quoteAuthor").innerHTML = qutoes[index].quoteAuthor;
}
