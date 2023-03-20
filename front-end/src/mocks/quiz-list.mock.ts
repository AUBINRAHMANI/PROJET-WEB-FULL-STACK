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


export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Les Capitales',
    theme: 'Géographie',
    questions: [],
  },
  {
    id: '2',
    name: 'High School Musical',
    questions: [],
  }
];
