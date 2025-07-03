import React, { useState, useEffect } from 'react';
import { Trophy, Settings, Play, Lightbulb, Users, Phone, Target } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { QuizConfig, QuizState } from './types/quiz';
import { generateQuestions } from './utils/questionGenerator';

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
    questionCount: 10,
    difficulty: 'medium',
    hintsEnabled: true
  });
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],
    hintsUsed: {
      fiftyFifty: false,
      askAudience: false,
      phoneAFriend: false
    },
    timeSpent: 0
  });

  const startQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
    const questions = generateQuestions(config.questionCount, config.difficulty);
    setQuizState({
      questions,
      currentQuestion: 0,
      score: 0,
      answers: [],
      hintsUsed: {
        fiftyFifty: false,
        askAudience: false,
        phoneAFriend: false
      },
      timeSpent: 0
    });
    setGameState('quiz');
  };

  const endQuiz = (finalState: QuizState) => {
    setQuizState(finalState);
    setGameState('results');
  };

  const resetQuiz = () => {
    setGameState('welcome');
    setQuizState({
      questions: [],
      currentQuestion: 0,
      score: 0,
      answers: [],
      hintsUsed: {
        fiftyFifty: false,
        askAudience: false,
        phoneAFriend: false
      },
      timeSpent: 0
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* KBC Style Background Effects */}
      <div className="spotlight"></div>
      <div className="spotlight"></div>
      <div className="spotlight"></div>
      
      {/* Golden Particles */}
      <div className="golden-particles">
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
        <div className="golden-particle"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {gameState === 'welcome' && <WelcomeScreen onStartQuiz={startQuiz} />}
        {gameState === 'quiz' && (
          <QuizScreen 
            quizState={quizState} 
            quizConfig={quizConfig}
            onQuizEnd={endQuiz}
            onStateUpdate={setQuizState}
          />
        )}
        {gameState === 'results' && (
          <ResultsScreen 
            quizState={quizState} 
            quizConfig={quizConfig}
            onRestart={resetQuiz}
          />
        )}
      </div>
    </div>
  );
}