export class Answer {
  constructor(
    public answerId: number,
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
  ) {}
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

  getMiniusQuestions(): Answer[] {
    const correctAnswer = this.getCorrectAnswer();
    const incorrectAnswer = this.getRandomIncorrectAnswer();
    if (!correctAnswer || !incorrectAnswer) {
      return [];
    }
    return [correctAnswer, incorrectAnswer];
  }


}


