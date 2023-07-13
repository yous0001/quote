var quotenum;
//i solve the problem of repetition the quotes
function newquote() {
  var quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  ];
  var newquotenum;
  do {
    newquotenum = Math.round(Math.random() * 10);
  } while (newquotenum == quotenum);
  quotenum = newquotenum;
  document.getElementById("thequote").innerHTML = quotes[newquotenum];
}
