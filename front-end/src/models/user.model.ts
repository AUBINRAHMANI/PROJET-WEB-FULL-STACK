export interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  score?: number[];
  stade:number;
  droit: boolean;
  image?: string;


}
