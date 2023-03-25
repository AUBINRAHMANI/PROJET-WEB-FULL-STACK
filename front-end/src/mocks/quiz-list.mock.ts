import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_CAPITALES: Question [] = [{
  id: '1',
  label: 'Quelle est la capitale de la France ?',
  answers: [
    {
      value: 'Paris',
      isCorrect: true,
    },
    {
      value: 'Lyon',
      isCorrect: false,
    },
    {
      value: 'Nice',
      isCorrect: false,
    },
    {
      value: 'Marseille',
      isCorrect: false,
    }
  ],
},
  { id: '2', label: 'Quelle est la capitale de l Angleterre ?', answers: [
  {
    value: 'Oxford',
    isCorrect: false,
  },
  {
    value: 'Londres',
    isCorrect: true,
  },
  {
    value: 'Liverpool',
    isCorrect: false,
  },
  {
    value: 'Bristol',
    isCorrect: false,
  }
  ],
},
  {id: '3', label: 'Quelle est la capitale de l Italie ?', answers: [
      {
        value: 'Rome',
        isCorrect: true,
      },
      {
        value: 'Milan',
        isCorrect: false,
      },
      {
        value: 'Venise',
        isCorrect: false,
      },
      {
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
        value: 'L\'éléphant',
        isCorrect: true,
      },
      {
        value: 'Le lion',
        isCorrect: false,
      },
      {
        value: 'Le rhinocéros',
        isCorrect: false,
      },
      {
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
        value: 'Le faucon pèlerin',
        isCorrect: true,
      },
      {
        value: 'Le condor des Andes',
        isCorrect: false,
      },
      {
        value: 'Le perroquet',
        isCorrect: false,
      },
      {
        value: 'La cigogne',
        isCorrect: false,
      }
    ],
  },
];



// Mocks pour le quiz sur la musique
const QUESTION_MUSIQUE: Question [] = [
  {
    id: '3',
    label: 'Quel est le titre de la chanson de Michael Jackson qui est aussi le nom de son album sorti en 1982 ?',
    answers: [
      {
        value: 'Bad',
        isCorrect: false,
      },
      {
        value: 'Thriller',
        isCorrect: true,
      },
      {
        value: 'Off The Wall',
        isCorrect: false,
      },
      {
        value: 'Dangerous',
        isCorrect: false,
      }
    ],
  },
  {
    id: '4',
    label: 'Quel est le nom de scène de l\'artiste américaine qui a sorti l\'album "Born This Way" en 2011 ?',
    answers: [
      {
        value: 'Madonna',
        isCorrect: false,
      },
      {
        value: 'Katy Perry',
        isCorrect: false,
      },
      {
        value: 'Lady Gaga',
        isCorrect: true,
      },
      {
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
      value: 'Vanessa Hudgens',
      isCorrect: true,
    },
    {
      value: 'Ashley Tisdale',
      isCorrect: false,
    },
    {
      value: 'Monique Coleman',
      isCorrect: false,
    },
    {
      value: 'Corbin Bleu',
      isCorrect: false,
    }
  ],
},
  { id: '2', label: 'Dans quelle ville se déroule le film High School Musical ?', answers: [
      {
        value: 'Los Angeles',
        isCorrect: false,
      },
      {
        value: 'New York',
        isCorrect: false,
      },
      {
        value: 'Albuquerque',
        isCorrect: true,
      },
      {
        value: 'Chicago',
        isCorrect: false,
      }
    ],
  },
  {id: '3', label: 'Quel est le titre de la chanson phare du film High School Musical ?', answers: [
      {
        value: 'Breaking Free',
        isCorrect: true,
      },
      {
        value: 'Start of Something New',
        isCorrect: false,
      },
      {
        value: 'Getcha Head in the Game',
        isCorrect: false,
      },
      {
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
  QUIZ_MUSIQUE,
];
