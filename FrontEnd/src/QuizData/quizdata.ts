import { Quiz } from "../Types/types";

const quizOne :Quiz = {
  quizName: "Marvel Cinematic Universe",
  playTime: "5 minutes",
  questions: [
    {
      question:
        "In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
      points: 1,
      options: [
        {
          text: "That he wants to study The Hulk",
          isRight: false
        },
        {
          text: "That he knows about S.H.I.E.L.D",
          isRight: false
        },
        {
          text: "That they are putting a team together",
          isRight: true
        },
        {
          text:"That Thaddeus owes him money",
          isRight:false
        }
      ]
    },
    {
      question: "The Flerkens are a race of extremely dangerous aliens that resembles what?",
      points: 5,
      negativePoint:0,
      options: [
        {
          text: "Cats",
          isRight: true
        },
        {
          text: "Ducks",
          isRight: false
        },
        {
          text: "Reptiles",
          isRight: false
        },
        {
          text:"Raccoons",
          isRight:false
        }
      ]
    },
    {
      question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "H.O.M.E.R.",
          isRight: false
        },
        {
          text: "J.A.R.V.I.S",
          isRight: true
        },
        {
          text: "A.L.F.R.E.D",
          isRight: false
        },
        {
          text:"M.A.R.V.I.N",
          isRight:false
        }
      ]
    },
    {
      question:'What is the alien race Loki sends to invade Earth in The Avengers?',
      points:1,
      options: [
        {
          text: "The Flerkens",
          isRight: false
        },
        {
          text: "The Chitaur",
          isRight: true
        },
        {
          text: "The Kree",
          isRight: false
        },
        {
          text:"The Skrulls",
          isRight:false
        }
      ]

    },
    {
      question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Thor",
          isRight: false
        },
        {
          text: "Loki",
          isRight: true
        },
        {
          text: "The Collector",
          isRight: false
        },
        {
          text:"Tony Stark",
          isRight:false
        }
      ]
    },
    {
      question: "What fake name does Natasha use when she first meets Tony?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Natalie Rushman",
          isRight: true
        },
        {
          text: "Natalia Romanoff",
          isRight: false
        },
        {
          text: "Nicole Rohan",
          isRight: false
        },
        {
          text:"Naya Rabe",
          isRight:false
        }
      ]
    },
    {
      question: "Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "The Cotton Club",
          isRight: false
        },
        {
          text: "The Stork Club",
          isRight: true
        },
        {
          text: "El Morocco",
          isRight: false
        },
        {
          text:"The Copacabana",
          isRight:false
        }
      ]
    },
    {
      question: " Where do Lady Sif and Volstagg keep the Reality Stone after the Dark Elves tried to steal it?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "On Vormir",
          isRight: false
        },
        {
          text: "In a vault on Asgard",
          isRight:false
        },
        {
          text: "Inside Sif’s sword",
          isRight: false
        },
        {
          text:"To the Collector",
          isRight:true
        }
      ]
    },
    {
      question: "What does the Winter Soldier say after Steve recognizes him for the first time?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Who the hell is Bucky?",
          isRight: true
        },
        {
          text: "Do I know you?",
          isRight:false
        },
        {
          text: "He’s gone.",
          isRight: false
        },
        {
          text:"What did you say?",
          isRight:false
        }
      ]
    },
    {
      question: "What were the three items Rocket claims he needs in order to escape the prison?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "A security card, a fork, and an ankle monitor",
          isRight: false
        },
        {
          text: "A security band, a battery, and a prosthetic leg",
          isRight:true
        },
        {
          text: "A pair of binoculars, a detonator, and a prosthetic leg",
          isRight: false
        },
        {
          text:"A knife, cable wires, and Peter’s mixtape",
          isRight:false
        }
      ]
    },












    
  ]
};


export { quizOne };
