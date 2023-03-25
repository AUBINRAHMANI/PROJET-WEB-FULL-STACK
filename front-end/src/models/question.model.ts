export interface Answer {
  answerId : number;
  type?: string;
  value: string;
  isCorrect: boolean;
}

export interface Question {
  selectedAnswerIndex?: number;
  id: string;
  label: string;
  answers: Answer[];
}


