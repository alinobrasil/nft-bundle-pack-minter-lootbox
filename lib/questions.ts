export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [

  {
    questionText: "Where did Michael Jordan go to school?",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.gobankingrates.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fmichael_jordan_net_worth.jpg&f=1&nofb=1",
    answers: ["UCLA", "UNC", "USC", "Lexus"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What did Larry Bird tell Charles Barkley when he said he felt disrespected?",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sportscasting.com%2Fwp-content%2Fuploads%2F2021%2F07%2FLarry-Bird-Charles-Barkley.jpg&f=1&nofb=1",
    answers: ["You stepped on my toe", "You guys didn't hi", "You guys put the white guy on me", "You don't talk about my mother"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Which of these did not come in the Air Jordan 17 package?",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsneakernews.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fjordan101-xvii-summary.jpg&f=1&nofb=1",
    answers: ["Brush", "briefcase", "CD", "manual"],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Which of these is Tmac's cousin?",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2013%2F08%2F26%2F11063530%2FTracy%2520McGrady.jpg&f=1&nofb=1",
    answers: ["Tim Duncan", "Shawn Bradley", "Mugsy Bogues", "Vince Carter"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
