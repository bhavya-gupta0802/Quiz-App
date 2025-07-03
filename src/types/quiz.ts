export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  hint?: string;
}

export interface QuizConfig {
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  hintsEnabled: boolean;
}

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  score: number;
  answers: number[];
  hintsUsed: {
    fiftyFifty: boolean;
    askAudience: boolean;
    phoneAFriend: boolean;
  };
  timeSpent: number;
}

export interface HintData {
  fiftyFiftyOptions?: number[];
  audienceVotes?: number[];
  friendAdvice?: string;
}