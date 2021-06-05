import { Quiz } from "../Types/types";

const quizOne :Quiz = {
  quizName: "Marvel Cinematic Universe",
  playTime: "5 minutes",
  questions: [
    {
      question: "How many avengers were there in first Avengers movie released in 2012?",
      points: 1,
      negativePoint: 1,
      options: [
        {
          text: "22",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        },
        {
             text:'78',
             isRight:false    
        },
        {
          text:'94',
          isRight:false    
        }
      ]

    },
    {
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 1,
      negativePoint: 0,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true
        },
        {
          text: "getting started with c",
          isRight: false
        },
        {
          text:"started with java",
          isRight:false
        }
      ]
    },
    {
      question: "Who's the love interest for Wanda in MCU?",
      points: 5,
      negativePoint:0,
      options: [
        {
          text: "Clint",
          isRight: false
        },
        {
          text: "Vision",
          isRight: true
        },
        {
          text: "Captain America",
          isRight: false
        },
        {
          text:"Tony Stark",
          isRight:false
        }
      ]
    }
  ]
};


export { quizOne };
