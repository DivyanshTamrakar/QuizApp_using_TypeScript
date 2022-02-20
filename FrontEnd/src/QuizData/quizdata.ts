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

const quizTwo :Quiz = {
  quizName: "Harry Potter",
  playTime: "5 minutes",
  questions: [
    {
      question:
        "What is the name of the Weasley's home?",
      points: 1,
      options: [
        {
          text: "The Lair",
          isRight: false
        },
        {
          text: "The Magic Garden",
          isRight: false
        },
        {
          text: "The Burrow",
          isRight: true
        },
        {
          text:"The Den",
          isRight:false
        }
      ]
    },
    {
      question: "What has Mr. Weasley enchanted his car to do?",
      points: 5,
      negativePoint:0,
      options: [
        {
          text: "Fly",
          isRight: true
        },
        {
          text: "Sing",
          isRight: false
        },
        {
          text: "Reptiles",
          isRight: false
        },
        {
          text:"Eat dangerous predators",
          isRight:false
        }
      ]
    },
    {
      question: "How do people who use Floo powder travel?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Underwater",
          isRight: false
        },
        {
          text: "Through fireplaces",
          isRight: true
        },
        {
          text: "Underground",
          isRight: false
        },
        {
          text:"Through the sky",
          isRight:false
        }
      ]
    },
    {
      question:'Why do Harry and Ron fly a Ford Anglia to Hogwarts?',
      points:1,
      options: [
        {
          text: "Because they want to beat the train, thus getting first choice of dorm rooms",
          isRight: false
        },
        {
          text: "Because Gate Nine-and-three-quarters closed up before they could enter",
          isRight: true
        },
        {
          text: "Because they want to impress Gilderoy Lockhart",
          isRight: false
        },
        {
          text:"Because George dared them to try it",
          isRight:false
        }
      ]

    },
    {
      question: "What is Harry instructed to do for his detention?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Polish trophies",
          isRight: false
        },
        {
          text: "Answer Gilderoy Lockhart's fan mail",
          isRight: true
        },
        {
          text: "Mop up the first floor girls' bathroom",
          isRight: false
        },
        {
          text:"Tend to Professor Sprout's Mandrakes",
          isRight:false
        }
      ]
    },
    {
      question: "What derogatory name does Malfoy call Hermione?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Mudblood",
          isRight: true
        },
        {
          text: "Miss Priss",
          isRight: false
        },
        {
          text: "Rodent Girl",
          isRight: false
        },
        {
          text:"Polyjuice Punk",
          isRight:false
        }
      ]
    },
    {
      question: "Which first year loves to photograph Harry?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Ginny Weasley",
          isRight: false
        },
        {
          text: "Colin Creevey",
          isRight: true
        },
        {
          text: "Justin Finch-Fletchley",
          isRight: false
        },
        {
          text:"Penelope Clearwater",
          isRight:false
        }
      ]
    },
    {
      question: "What does Lucius Malfoy donate to Slytherin House?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Expensive new sofas",
          isRight: false
        },
        {
          text: "A winged monster to guard its entrance",
          isRight:false
        },
        {
          text: "A library of dark magic books",
          isRight: false
        },
        {
          text:"A speedy set of broomsticks for its Quidditch team",
          isRight:true
        }
      ]
    },
    {
      question: "Who of the following is NOT petrified?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Percy Weasley",
          isRight: true
        },
        {
          text: "Penelope Clearwater",
          isRight:false
        },
        {
          text: "Hermione Granger",
          isRight: false
        },
        {
          text:"Colin Creevey",
          isRight:false
        }
      ]
    },
    {
      question: " What animal is the sworn enemy of the basilisk?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Satyr",
          isRight: false
        },
        {
          text: "Spider",
          isRight:true
        },
        {
          text: "Butterfly",
          isRight: false
        },
        {
          text:"Unicorn",
          isRight:false
        }
      ]
    },

  ]
};

const quizThree :Quiz = {
  quizName: "DC",
  playTime: "5 minutes",
  questions: [
    {
      question:
        "What Does the S on Superman’s chest stand for in Kryptonian?",
      points: 1,
      options: [
        {
          text: "Love",
          isRight: false
        },
        {
          text: "Harmony",
          isRight: false
        },
        {
          text: "Hope",
          isRight: true
        },
        {
          text:"Faith",
          isRight:false
        }
      ]
    },
    {
      question: "What Superman propriety cast Amy Adams prior to her playing Lois Lane in Man of Steel?",
      points: 5,
      negativePoint:0,
      options: [
        {
          text: "Smallville",
          isRight: true
        },
        {
          text: "Lois and Clark the New Adventures of Superman",
          isRight: false
        },
        {
          text: "Superman the Animated Series",
          isRight: false
        },
        {
          text:"Superman Returns",
          isRight:false
        }
      ]
    },
    {
      question: "Which two large corporation logos were seen on buildings in Metropolis during Man of Steels final battle?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Lexcorp and Star Labs",
          isRight: false
        },
        {
          text: "Wayne Enterprises and Lexcorp",
          isRight: true
        },
        {
          text: "Wayne Enterprises and Kord Industries",
          isRight: false
        },
        {
          text:"Lexcorp and Queen Consolidated",
          isRight:false
        }
      ]
    },
    {
      question:'What newspaper does Clark Kent get a job at by the end of Man of Steel?',
      points:1,
      options: [
        {
          text: "Daily Bugle",
          isRight: false
        },
        {
          text: "Daily Planet",
          isRight: true
        },
        {
          text: "Daily News",
          isRight: false
        },
        {
          text:"Weekly World News",
          isRight:false
        }
      ]

    },
    {
      question: "What are the names of Superman's adopted parents?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Johnathan and Elizabeth",
          isRight: false
        },
        {
          text: "Johnathan and Martha",
          isRight: true
        },
        {
          text: "Johnathan and Mary",
          isRight: false
        },
        {
          text:"Johnathan and Betty",
          isRight:false
        }
      ]
    },
    {
      question: "Where were criminals sent to on Krypton?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "The Phantom Zone",
          isRight: true
        },
        {
          text: "The Next Dimension",
          isRight: false
        },
        {
          text: "Kessel",
          isRight: false
        },
        {
          text:"The Dark World",
          isRight:false
        }
      ]
    },
    {
      question: "What baseball team is on Clark's t-shirt in Man of Steel?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Detroit Tigers",
          isRight: false
        },
        {
          text: "Kansas City Royals",
          isRight: true
        },
        {
          text: "New York Yankees",
          isRight: false
        },
        {
          text:"St. Louis Cardinals",
          isRight:false
        }
      ]
    },
    {
      question: "Batman V Superman Dawn of Justice was loosely based on what popular Batman story?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Batman Hush",
          isRight: false
        },
        {
          text: "Batman Year One",
          isRight:false
        },
        {
          text: "Batman Death of the Family",
          isRight: false
        },
        {
          text:"The Dark Knight Returns",
          isRight:true
        }
      ]
    },
    {
      question: "What did the jar on Senator Finch's desk have written on it?",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "Granny's peach tea",
          isRight: true
        },
        {
          text: "Luthor's Urine",
          isRight:false
        },
        {
          text: "Uncle Pete's coffee",
          isRight: false
        },
        {
          text:"Lex's Soda Pop",
          isRight:false
        }
      ]
    },
    {
      question: "What show do the actors who play Thomas and Martha Wayne star together in? ",
      points: 1,
      negativePoint:0,
      options: [
        {
          text: "The Good Wife",
          isRight: false
        },
        {
          text: "The Walking Dead",
          isRight:true
        },
        {
          text: "Supernatural",
          isRight: false
        },
        {
          text:"The Vampire Dairies",
          isRight:false
        }
      ]
    },

  ]
};

export { quizOne, quizTwo , quizThree};
