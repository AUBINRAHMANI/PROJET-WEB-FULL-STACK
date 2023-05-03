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
  { id: '2', label: "Quelle est la capitale de l' Angleterre ?", answers: [
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
  {id: '3', label: "Quelle est la capitale de l' Italie ?", answers: [
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
},
  {
    id: '4',
    label: "Quelle est la capitale de l' Espagne ?",
    answers: [
      {
        answerId : 1,
        value: 'Barcelone',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Madrid',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Valence',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Séville',
        isCorrect: false,
      }
    ],
  },
  {
    id: '5',
    label: "Quelle est la capitale de l' Australie ?",
    answers: [
      {
        answerId : 1,
        value: 'Sydney',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Melbourne',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Brisbane',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Canberra',
        isCorrect: true,
      }
    ],
  },
  {
    id: '6',
    label: 'Quelle est la capitale de la Russie ?',
    answers: [
      {
        answerId : 1,
        value: 'Saint-Pétersbourg',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Moscou',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Kazan',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Nijni Novgorod',
        isCorrect: false,
      }
    ],
  },
  {
    id: '7',
    label: 'Quelle est la capitale du Canada ?',
    answers: [
      {
        answerId : 1,
        value: 'Ottawa',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Toronto',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Montréal',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Québec',
        isCorrect: false,
      }
    ],
  },
  {
    id: '8',
    label: "Quelle est la capitale de l' Égypte ?",
    answers: [
      {
        answerId : 1,
        value: 'Alexandrie',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Le Caire',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Gizeh',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Assouan',
        isCorrect: false,
      }
    ],
  },
];



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
    label: "Quel est l'oiseau le plus rapide ?",
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
  {
    id: '3',
    label: 'Combien de cœurs possède un poulpe ?',
    answers: [
      {
        answerId: 1,
        value: '1',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: '2',
        isCorrect: false,
      },
      {
        answerId: 3,
        value: '3',
        isCorrect: true,
      },
      {
        answerId: 4,
        value: '4',
        isCorrect: false,
      },
    ],
  },
  {
    id: '4',
    label: 'Quel est le plus gros animal du monde ?',
    answers: [
      {
        answerId: 1,
        value: 'La baleine bleue',
        isCorrect: true,
      },
      {
        answerId: 2,
        value: "L'éléphant",
        isCorrect: false,
      },
      {
        answerId: 3,
        value: 'Le rhinocéros blanc',
        isCorrect: false,
      },
      {
        answerId: 4,
        value: 'Le requin blanc',
        isCorrect: false,
      },
    ],
  },
  {
    id: '5',
    label: "Quel animal est capable de reconstituer sa queue après l'avoir perdue ?",
      answers: [
  {
    answerId: 1,
    value: 'Le caméléon',
    isCorrect: false,
  },
  {
    answerId: 2,
    value: 'Le lézard',
    isCorrect: true,
  },
  {
    answerId: 3,
    value: 'La salamandre',
    isCorrect: false,
  },
  {
    answerId: 4,
    value: 'Le serpent',
    isCorrect: false,
  },
],
},
{
  id: '6',
    label: 'Quel animal est capable de voler en arrière ?',
  answers: [
  {
    answerId: 1,
    value: 'Le colibri',
    isCorrect: true,
  },
  {
    answerId: 2,
    value: 'Le faucon',
    isCorrect: false,
  },
  {
    answerId: 3,
    value: 'Le corbeau',
    isCorrect: false,
  },
  {
    answerId: 4,
    value: 'Le perroquet',
    isCorrect: false,
  },
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
  {
    id: '3',
    label: 'Quel est le titre de la chanson de Queen qui est devenue un hymne populaire en 1977 ?',
    answers: [
      {
        answerId : 1,
        value: 'Bohemian Rhapsody',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Another One Bites the Dust',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'We Will Rock You',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Somebody to Love',
        isCorrect: false,
      }
    ],
  },
  {
    id: '4',
    label: 'Quel est le nom de l\'artiste canadien qui a sorti les albums "Views" et "Take Care" ?',
    answers: [
      {
        answerId : 1,
        value: 'Justin Bieber',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Drake',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'The Weeknd',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Shawn Mendes',
        isCorrect: false,
      }
    ],
  },
  {
    id: '5',
    label: 'Quel est le nom de l\'album de Kendrick Lamar qui a remporté le prix Pulitzer en 2018 ?',
    answers: [
      {
        answerId : 1,
        value: 'good kid, m.A.A.d city',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'To Pimp a Butterfly',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Section.80',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'DAMN.',
        isCorrect: true,
      }
    ],
  },
  {
    id: '6',
    label: 'Quel est le nom du guitariste légendaire connu pour son jeu de scène excentrique et qui a sorti l\'album "Purple Haze" en 1967 ?',
    answers: [
      {
        answerId : 1,
        value: 'Jimi Hendrix',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Eric Clapton',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Jimmy Page',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Keith Richards',
        isCorrect: false,
      }
    ],
  },
];

/*QUESTION HS_ MUSICAL*/
export const QUESTION_HS_MUSICAL: Question [] = [
  {
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
  },
  {
    id: '4',
    label: 'Quel acteur joue le rôle de Troy Bolton dans le film High School Musical ?',
    answers: [
      {
        answerId : 1,
        value: 'Zac Efron',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Lucas Grabeel',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Corbin Bleu',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Chris Warren Jr.',
        isCorrect: false,
      }
    ],
  },
  {
    id: '5',
    label: 'Quel personnage joue Ashley Tisdale dans le film High School Musical ?',
    answers: [
      {
        answerId : 1,
        value: 'Gabriella Montez',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Taylor McKessie',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Sharpay Evans',
        isCorrect: true,
      },
      {
        answerId : 4,
        value: 'Chad Danforth',
        isCorrect: false,
      }
    ],
  },
  {
    id: '6',
    label: 'Quel est le titre de la chanson chantée par Sharpay Evans dans High School Musical 2 ?',
    answers: [
      {
        answerId : 1,
        value: 'Bop to the Top',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Fabulous',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'You Are The Music In Me',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Gotta Go My Own Way',
        isCorrect: false,
      }
    ],
  },
  {
    id: '7',
    label: 'Quel est le nom du groupe de musique formé par les personnages dans High School Musical 2 ?',
    answers: [
      {
        answerId : 1,
        value: 'East High Wildcats',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Sharpay and the Sharpettes',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Troy and the Trojans',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Ryan and the Rockets',
        isCorrect: true,
      }
    ],
  },
  {
    id: '8',
    label: "Quel est le titre de la chanson d'ouverture de High School Musical 3 ?",
      answers: [
  {
    answerId : 1,
    value: 'Now or Never',
    isCorrect: true,
  },
  {
    answerId : 2,
    value: 'The Boys Are Back',
    isCorrect: false,
  },
  {
    answerId : 3,
    value: 'High School Musical',
    isCorrect: false,
  },
  {
    answerId : 4,
    value: 'Just Getting Started',
    isCorrect: false,
  }
],
},
];
/* QUESTION DESSERT */
export const QUESTION_DESSERT: Question [] = [
  {
    id: '1',
    label: 'Which dessert originated in France and consists of puff pastry layers filled with pastry cream?',
    answers: [
      {
        answerId: 1,
        value: 'Macarons',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: 'Croissant',
        isCorrect: false,
      },
      {
        answerId: 3,
        value: 'Tarte Tatin',
        isCorrect: false,
      },
      {
        answerId: 4,
        value: 'Mille-Feuille',
        isCorrect: true,
      },
    ],
  },
  {
    id: '2',
    label: 'What is the main ingredient in the Italian dessert Tiramisu?',
    answers: [
      {
        answerId: 1,
        value: 'Chocolate',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: 'Coffee',
        isCorrect: true,
      },
      {
        answerId: 3,
        value: 'Strawberry',
        isCorrect: false,
      },
      {
        answerId: 4,
        value: 'Vanilla',
        isCorrect: false,
      },
    ],
  },
  {
    id: '3',
    label: 'Which of the following desserts is not a type of pie?',
    answers: [
      {
        answerId: 1,
        value: 'Key Lime Pie',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: 'Peach Cobbler',
        isCorrect: false,
      },
      {
        answerId: 3,
        value: 'Eclairs',
        isCorrect: true,
      },
      {
        answerId: 4,
        value: 'Blueberry Pie',
        isCorrect: false,
      },
    ],
  },
  {
    id: '4',
    label: 'What is the main ingredient in the French dessert crème brûlée?',
    answers: [
      {
        answerId: 1,
        value: 'Caramel',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: 'Raspberry',
        isCorrect: false,
      },
      {
        answerId: 3,
        value: 'Chocolate',
        isCorrect: false,
      },
      {
        answerId: 4,
        value: 'Vanilla',
        isCorrect: true,
      },
    ],
  },
  {
    id: '5',
    label: 'What is the main ingredient in the Greek dessert baklava?',
    answers: [
      {
        answerId: 1,
        value: 'Honey',
        isCorrect: false,
      },
      {
        answerId: 2,
        value: 'Cinnamon',
        isCorrect: false,
      },
      {
        answerId: 3,
        value: 'Walnuts',
        isCorrect: true,
      },
      {
        answerId: 4,
        value: 'Lemon',
        isCorrect: false,
      },
    ],
  },
];

const QUESTION_LANGUES_ETRANGERES: Question [] = [
  {
    id: '1',
    label: 'Comment dit-on "bonjour" en espagnol ?',
    answers: [
      {
        answerId : 1,
        value: 'Bonjour',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Hola',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Ciao',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Hello',
        isCorrect: false,
      }
    ],
  },
  {
    id: '2',
    label: 'Comment dit-on "merci" en allemand ?',
    answers: [
      {
        answerId : 1,
        value: 'Merci',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Danke',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Gracias',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Grazie',
        isCorrect: false,
      }
    ],
  },
  {
    id: '3',
    label: 'Comment écrit-on "au revoir" en japonais ?',
    answers: [
      {
        answerId : 1,
        value: 'Sayonara',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: 'Konichiwa',
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Arigatou',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Konnichiwa',
        isCorrect: false,
      }
    ],
  },
  {
    id: '4',
    label: "Comment dit-on \"je t'aime\" en italien ?",
    answers: [
      {
        answerId : 1,
        value: 'Ti amo',
        isCorrect: true,
      },
      {
        answerId : 2,
        value: "Je t'aime",
        isCorrect: false,
      },
      {
        answerId : 3,
        value: 'Te quiero',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Ich liebe dich',
        isCorrect: false,
      }
    ],
  },
  {
    id: '5',
    label: 'Comment dit-on "bon appétit" en anglais ?',
    answers: [
      {
        answerId : 1,
        value: 'Good appetite',
        isCorrect: false,
      },
      {
        answerId : 2,
        value: 'Enjoy your meal',
        isCorrect: true,
      },
      {
        answerId : 3,
        value: 'Bon appétit',
        isCorrect: false,
      },
      {
        answerId : 4,
        value: 'Buen provecho',
        isCorrect: false,
      }
    ],
  },
];

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

const QUIZ_DESSERT: Quiz = {
  id: '5',
  name: 'Les desserts',
  theme: 'Nourriture',
  questions: QUESTION_DESSERT,
};

const QUIZ_LANGUES_ETRANGERES: Quiz = {
  id: '6',
  name: 'Les langues',
  theme: 'Langues',
  questions: QUESTION_LANGUES_ETRANGERES,
};


export const QUIZ_LIST: Quiz[] = [
  QUIZ_CAPITALE,
  QUIZ_HS_MUSICAL,
  QUIZ_ANIMAUX,
  QUIZ_MUSIQUE,
  QUIZ_DESSERT,
  QUIZ_LANGUES_ETRANGERES
];
