export class Answer {
  constructor(
    public id: number,
    public value: string,
    public isCorrect: boolean,
    public type?: string
  ) {}
}


export class Question {
  constructor(
    public id: string,
    public label: string,
    public answers: Answer[]
  ) {
  }
  selectedAnswerIndex?: number;
  // @ts-ignore
  id: string;
  // @ts-ignore
  label: string;
  // @ts-ignore
  answers: Answer[];
  // Propriétés et constructeur de la classe Question

  getCorrectAnswer(): Answer | undefined {
    return this.answers.find((answer) => answer.isCorrect);
  }

  getRandomIncorrectAnswer(): Answer | undefined {
    const incorrectAnswers = this.answers.filter((answer) => !answer.isCorrect);
    if (incorrectAnswers.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
    return incorrectAnswers[randomIndex];
  }

  getMiniusQuestions(): Question {
    const correctAnswer = this.getCorrectAnswer();
    const incorrectAnswer = this.getRandomIncorrectAnswer();

    // Permute les réponses de manière aléatoire
    const randomPosition = Math.floor(Math.random() * 2); // Génère 0 ou 1 aléatoirement
    const answers = [correctAnswer, incorrectAnswer];
    if (randomPosition === 1) {
      answers.reverse(); // Inverse la liste si le nombre aléatoire est 1
    }

    // Crée et retourne l'objet Question
    // @ts-ignore
    return new Question(this.id, this.label, answers);
  }



}


