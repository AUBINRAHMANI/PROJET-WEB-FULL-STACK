import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_CAPITALES: Question [] = [{
  id: '1',
  label: 'Quelle est la capitale de la France ?',
  answers: [
    {
      answerId : 1,
      value: 'Paris',
      isCorrect: true,
    },
    {
      answerId : 2,
      value: 'Lyon',
      isCorrect: false,
    },
    {
      answerId : 3,
      value: 'Nice',
      isCorrect: false,
    },
    {
      answerId : 4,
      value: 'Marseille',
      isCorrect: false,
    }
  ],
},
  { id: '2', label: 'Quelle est la capitale de l Angleterre ?', answers: [
  {
    answerId : 1,
    value: 'Oxford',
    isCorrect: false,
  },
  {
    answerId : 2,
    value: 'Londres',
    isCorrect: true,
  },
  {
    answerId : 3,
    value: 'Liverpool',
    isCorrect: false,
  },
  {
    answerId : 4,
    value: 'Bristol',
    isCorrect: false,
  }
  ],
},
  {id: '3', label: 'Quelle est la capitale de l Italie ?', answers: [
      {
        answerId : 1,
        value: 'Rome',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Milan',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Venise',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Turin',
        isCorrect: false,
      }
    ],
}];


// Mocks pour le quiz sur les animaux
const QUESTION_ANIMAUX: Question [] = [
  {
    id: '1',
    label: 'Quel est le plus grand mammifère terrestre ?',
    answers: [
      {
        answerId : 1,
        value: 'L\'éléphant',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Le lion',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Le rhinocéros',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Le gorille',
        isCorrect: false,
      }
    ],
  },
  {
    id: '2',
    label: 'Quel est l\'oiseau le plus rapide ?',
    answers: [
      {
        answerId : 1,
        value: 'Le faucon pèlerin',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Le condor des Andes',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Le perroquet',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'La cigogne',
        isCorrect: false,
      }
    ],
  },
];



// Mocks pour le quiz sur la musique
const QUESTION_MUSIQUE: Question [] = [
  {
    id: '1',
    label: 'Quel est le titre de la chanson de Michael Jackson qui est aussi le nom de son album sorti en 1982 ?',
    answers: [
      {
        answerId : 1,
        value: 'Bad',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Thriller',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Off The Wall',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Dangerous',
        isCorrect: false,
      }
    ],
  },
  {
    id: '2',
    label: 'Quel est le nom de scène de l\'artiste américaine qui a sorti l\'album "Born This Way" en 2011 ?',
    answers: [
      {
        answerId : 1,
        value: 'Madonna',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Katy Perry',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Lady Gaga',
        isCorrect: true,
      },
      {
        answerId : 4,
        value: 'Beyoncé',
        isCorrect: false,
      }
    ],
  },
];

/*QUESTION HS_ MUSICAL*/
export const QUESTION_HS_MUSICAL: Question [] = [{
  id: '1',
  label: 'Qui joue le personnage de Gabriella Montez dans le film High School Musical ?',
  answers: [
    {
      answerId : 1,
      value: 'Vanessa Hudgens',
      isCorrect: true,
    },
    {
      answerId : 2,
      value: 'Ashley Tisdale',
      isCorrect: false,
    },
    {
      answerId : 3,
      value: 'Monique Coleman',
      isCorrect: false,
    },
    {
      answerId : 4,
      value: 'Corbin Bleu',
      isCorrect: false,
    }
  ],
},
  { id: '2', label: 'Dans quelle ville se déroule le film High School Musical ?', answers: [
      {
        answerId : 1,
        value: 'Los Angeles',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'New York',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Albuquerque',
        isCorrect: true,
      },
      {
        answerId : 4,
        value: 'Chicago',
        isCorrect: false,
      }
    ],

  },
  {id: '3', label: 'Quel est le titre de la chanson phare du film High School Musical ?', answers: [
      {
        answerId : 1,
        value: 'Breaking Free',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Start of Something New',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Getcha Head in the Game',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: "We're All in This Together",
        isCorrect: false,
      }
    ],
  }];


/* LES QUIZ*/



const QUIZ_CAPITALE: Quiz = {
  id: '1',
  name: 'Les Capitales',
  theme: 'Géographie',
  questions: QUESTION_CAPITALES,
};

const QUIZ_HS_MUSICAL: Quiz = {
  id: '2',
  name: 'High School Musical',
  theme: 'Musique',
  questions: QUESTION_HS_MUSICAL,
};

const QUIZ_ANIMAUX: Quiz = {
  id: '3',
  name: 'Les Animaux',
  theme: 'Nature',
  questions: QUESTION_ANIMAUX,
};

const QUIZ_MUSIQUE: Quiz = {
  id: '4',
  name: 'La Musique',
  theme: 'Culture',
  questions: QUESTION_MUSIQUE,
};

export const QUIZ_LIST: Quiz[] = [
  QUIZ_CAPITALE,
  QUIZ_HS_MUSICAL,
  QUIZ_ANIMAUX,
  QUIZ_MUSIQUE
];
