import { Quiz } from '../models/quiz.model';
import {Answer, Question} from '../models/question.model';

const QUESTION_CAPITALES: Question[] = [
  new Question('1', 'Quelle est la capitale de la France ?', [
    new Answer(1, 'Paris', true),
    new Answer(2, 'Lyon', false),
    new Answer(3, 'Nice', false),
    new Answer(4, 'Marseille', false)
  ]),
  new Question('2', "Quelle est la capitale de l' Angleterre ?", [
    new Answer(1, 'Oxford', false),
    new Answer(2, 'Londres', true),
    new Answer(3, 'Liverpool', false),
    new Answer(4, 'Bristol', false)
  ]),
  new Question('3', "Quelle est la capitale de l' Italie ?", [
    new Answer(1, 'Rome', true),
    new Answer(2, 'Milan', false),
    new Answer(3, 'Venise', false),
    new Answer(4, 'Turin', false)
  ]),
  new Question('4', "Quelle est la capitale de l' Espagne ?", [
    new Answer(1, 'Barcelone', false),
    new Answer(2, 'Madrid', true),
    new Answer(3, 'Valence', false),
    new Answer(4, 'Séville', false)
  ]),
  new Question('5', "Quelle est la capitale de l' Australie ?", [
    new Answer(1, 'Sydney', false),
    new Answer(2, 'Melbourne', false),
    new Answer(3, 'Brisbane', false),
    new Answer(4, 'Canberra', true)
  ]),
  new Question('6', 'Quelle est la capitale de la Russie ?', [
    new Answer(1, 'Saint-Pétersbourg', false),
    new Answer(2, 'Moscou', true),
    new Answer(3, 'Kazan', false),
    new Answer(4, 'Nijni Novgorod', false)
  ]),
  new Question('7', 'Quelle est la capitale du Canada ?', [
    new Answer(1, 'Ottawa', true),
    new Answer(2, 'Toronto', false),
    new Answer(3, 'Montréal', false),
    new Answer(4, 'Québec', false)
  ]),
  new Question('8', "Quelle est la capitale de l' Égypte ?", [
    new Answer(1, 'Alexandrie', false),
    new Answer(2, 'Le Caire', true),
    new Answer(3, 'Gizeh', false),
    new Answer(4, 'Assouan', false)
  ])
];





// Mocks pour le quiz sur les animaux
const QUESTION_ANIMAUX: Question[] = [
  new Question(
    '1',
    'Quel est le plus grand mammifère terrestre ?',
    [
      new Answer(1, 'L\'éléphant', true),
      new Answer(2, 'Le lion', false),
      new Answer(3, 'Le rhinocéros', false),
      new Answer(4, 'Le gorille', false),
    ]
  ),
  new Question(
    '2',
    "Quel est l'oiseau le plus rapide ?",
    [
      new Answer(1, 'Le faucon pèlerin', true),
      new Answer(2, 'Le condor des Andes', false),
      new Answer(3, 'Le perroquet', false),
      new Answer(4, 'La cigogne', false),
    ]
  ),
  new Question(
    '3',
    'Combien de cœurs possède un poulpe ?',
    [
      new Answer(1, '1', false),
      new Answer(2, '2', false),
      new Answer(3, '3', true),
      new Answer(4, '4', false),
    ]
  ),
  new Question(
    '4',
    'Quel est le plus gros animal du monde ?',
    [
      new Answer(1, 'La baleine bleue', true),
      new Answer(2, "L'éléphant", false),
      new Answer(3, 'Le rhinocéros blanc', false),
      new Answer(4, 'Le Grand requin blanc', false),
    ]
  ),
  new Question(
    '5',
    "Quel animal est capable de reconstituer sa queue après l'avoir perdue ?",
    [
      new Answer(1, 'Le caméléon', false),
      new Answer(2, 'Le lézard', true),
      new Answer(3, 'La salamandre', false),
      new Answer(4, 'Le serpent', false),
    ]
  ),
  new Question(
    '6',
    'Quel animal est capable de voler en arrière ?',
    [
      new Answer(1, 'Le colibri', true),
      new Answer(2, 'Le faucon', false),
      new Answer(3, 'Le corbeau', false),
      new Answer(4, 'Le perroquet', false),
    ]
  ),
];



// Mocks pour le quiz sur la musique
const QUESTION_MUSIQUE: Question[] = [
  new Question('1', 'Quel est le titre de la chanson de Michael Jackson qui est aussi le nom de son album sorti en 1982 ?', [
    new Answer(1, 'Bad', false),
    new Answer(2, 'Thriller', true),
    new Answer(3, 'Off The Wall', false),
    new Answer(4, 'Dangerous', false),
  ]),
  new Question('2', 'Quel est le nom de scène de l\'artiste américaine qui a sorti l\'album "Born This Way" en 2011 ?', [
    new Answer(1, 'Madonna', false),
    new Answer(2, 'Katy Perry', false),
    new Answer(3, 'Lady Gaga', true),
    new Answer(4, 'Beyoncé', false),
  ]),
  new Question('3', 'Quel est le titre de la chanson de Queen qui est devenue un hymne populaire en 1977 ?', [
    new Answer(1, 'Bohemian Rhapsody', true),
    new Answer(2, 'Another One Bites the Dust', false),
    new Answer(3, 'We Will Rock You', false),
    new Answer(4, 'Somebody to Love', false),
  ]),
  new Question('4', 'Quel est le nom de l\'artiste canadien qui a sorti les albums "Views" et "Take Care" ?', [
    new Answer(1, 'Justin Bieber', false),
    new Answer(2, 'Drake', true),
    new Answer(3, 'The Weeknd', false),
    new Answer(4, 'Shawn Mendes', false),
  ]),
  new Question('5', 'Quel est le nom de l\'album de Kendrick Lamar qui a remporté le prix Pulitzer en 2018 ?', [
    new Answer(1, 'good kid, m.A.A.d city', false),
    new Answer(2, 'To Pimp a Butterfly', false),
    new Answer(3, 'Section.80', false),
    new Answer(4, 'DAMN.', true),
  ]),
  new Question('6', 'Quel est le nom du guitariste légendaire connu pour son jeu de scène excentrique et qui a sorti l\'album "Purple Haze" en 1967 ?', [
    new Answer(1, 'Jimi Hendrix', true),
    new Answer(2, 'Eric Clapton', false),
    new Answer(3, 'Jimmy Page', false),
    new Answer(4, 'Keith Richards', false),
  ]),
];

/*QUESTION HS_ MUSICAL*/
export const QUESTION_HS_MUSICAL: Question[] = [
  new Question('1', 'Qui joue le personnage de Gabriella Montez dans le film High School Musical ?', [
    new Answer(1, 'Vanessa Hudgens', true),
    new Answer(2, 'Ashley Tisdale', false),
    new Answer(3, 'Monique Coleman', false),
    new Answer(4, 'Corbin Bleu', false)
  ]),
  new Question('2', 'Dans quelle ville se déroule le film High School Musical ?', [
    new Answer(1, 'Los Angeles', false),
    new Answer(2, 'New York', false),
    new Answer(3, 'Albuquerque', true),
    new Answer(4, 'Chicago', false)
  ]),
  new Question('3', 'Quel est le titre de la chanson phare du film High School Musical ?', [
    new Answer(1, 'Breaking Free', true),
    new Answer(2, 'Start of Something New', false),
    new Answer(3, 'Getcha Head in the Game', false),
    new Answer(4, "We're All in This Together", false)
  ]),
  new Question('4', 'Quel acteur joue le rôle de Troy Bolton dans le film High School Musical ?', [
    new Answer(1, 'Zac Efron', true),
    new Answer(2, 'Lucas Grabeel', false),
    new Answer(3, 'Corbin Bleu', false),
    new Answer(4, 'Chris Warren Jr.', false)
  ]),
  new Question('5', 'Quel personnage joue Ashley Tisdale dans le film High School Musical ?', [
    new Answer(1, 'Gabriella Montez', false),
    new Answer(2, 'Taylor McKessie', false),
    new Answer(3, 'Sharpay Evans', true),
    new Answer(4, 'Chad Danforth', false)
  ]),
  new Question('6', 'Quel est le titre de la chanson chantée par Sharpay Evans dans High School Musical 2 ?', [
    new Answer(1, 'Bop to the Top', false),
    new Answer(2, 'Fabulous', true),
    new Answer(3, 'You Are The Music In Me', false),
    new Answer(4, 'Gotta Go My Own Way', false)
  ]),
  new Question('7', 'Quel est le nom du groupe de musique formé par les personnages dans High School Musical 2 ?', [
    new Answer(1, 'East High Wildcats', false),
    new Answer(2, 'Sharpay and the Sharpettes', false),
    new Answer(3, 'Troy and the Trojans', false),
    new Answer(4, 'Ryan and the Rockets', true)
  ]),
  new Question("8", "Quel est le titre de la chanson d'ouverture de High School Musical 3 ?", [
    new Answer(1, 'Now or Never', true),
    new Answer(2, 'The Boys Are Back', false),
    new Answer(3, 'High School Musical', false),
    new Answer(4, 'Just Getting Started', false)
  ])
];
/* QUESTION DESSERT */  //
export const QUESTION_DESSERT: Question[] = [
  new Question('1', ' Quel dessert est originaire de France et est fait de feuilletage en couches garni de crème pâtissière ?', [
    new Answer(1, 'Macarons', false),
    new Answer(2, 'Croissant', false),
    new Answer(3, 'Tarte Tatin', false),
    new Answer(4, 'Mille-Feuille', true),
  ]),
  new Question('2', "Quel est l'ingrédient principale pour faire un Tiramisu Italien ?", [
    new Answer(1, 'Chocolate', false),
    new Answer(2, 'Coffee', true),
    new Answer(3, 'Strawberry', false),
    new Answer(4, 'Vanilla', false),
  ]),
  new Question('3', "Quel dessert n'est pas une tarte ?", [
    new Answer(1, 'Key Lime Pie', false),
    new Answer(2, 'Peach Cobbler', false),
    new Answer(3, 'Eclairs', true),
    new Answer(4, 'Blueberry Pie', false),
  ]),
  new Question('4', "Quel est l'ingredient principal dans le dessert français : La crème brulée ?", [
    new Answer(1, 'Caramel', false),
    new Answer(2, 'Raspberry', false),
    new Answer(3, 'Chocolate', false),
    new Answer(4, 'Vanilla', true),
  ]),
  new Question('5', "Quel est est l'ingrédient principal dans le célèbre dessert grecque, le baklava ?", [
    new Answer(1, 'Honey', false),
    new Answer(2, 'Cinnamon', false),
    new Answer(3, 'Walnuts', true),
    new Answer(4, 'Lemon', false),
  ]),
];
const QUESTION_LANGUES_ETRANGERES: Question[] = [
  new Question('1', 'Comment dit-on "bonjour" en espagnol ?', [
    new Answer(1, 'Bonjour', false),
    new Answer(2, 'Hola', true),
    new Answer(3, 'Ciao', false),
    new Answer(4, 'Hello', false),
  ]),
  new Question('2', 'Comment dit-on "merci" en allemand ?', [
    new Answer(1, 'Merci', false),
    new Answer(2, 'Danke', true),
    new Answer(3, 'Gracias', false),
    new Answer(4, 'Grazie', false),
  ]),
  new Question('3', 'Comment écrit-on "au revoir" en japonais ?', [
    new Answer(1, 'Sayonara', true),
    new Answer(2, 'Konichiwa', false),
    new Answer(3, 'Arigatou', false),
    new Answer(4, 'Konnichiwa', false),
  ]),
  new Question("4", 'Comment dit-on "je t\'aime" en italien ?', [
    new Answer(1, 'Ti amo', true),
    new Answer(2, "Je t'aime", false),
    new Answer(3, 'Te quiero', false),
    new Answer(4, 'Ich liebe dich', false),
  ]),
  new Question('5', 'Comment dit-on "bon appétit" en anglais ?', [
    new Answer(1, 'Good appetite', false),
    new Answer(2, 'Enjoy your meal', true),
    new Answer(3, 'Bon appétit', false),
    new Answer(4, 'Buen provecho', false),
  ]),
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
