import { Utilisateur } from '../models/user.model';

export const LISTE_UTILISATEUR: Utilisateur[] = [
  {
    id: '-1',
    nom: 'DEFAULT',
    prenom: 'user',
    score: [],
    stade: 'Niveau 3',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },

  {
    id: '0',
    nom: 'Psychomotricien',
    prenom: ' ',
    score: [],
    stade: '',
    image: 'https://formationepgv.com/wp-content/uploads/2020/11/avatar-femme.png',
  },

  {
    id: '1',
    nom: 'Perry',
    prenom: 'Sandra',
    score: [15, 10, 8, 9, 10],
    stade: 'Niveau 0',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },

  {
    id: '2',
    nom: 'Ferry',
    prenom:'Marry',
    score: [14, 12, 18, 9, 7],
    stade : 'Niveau 2',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },

  {
    id: '3',
    nom: 'Durcit',
    prenom: 'Pierre',
    score: [9, 10, 12, 17, 5],
    stade: 'Niveau 4',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },

];
