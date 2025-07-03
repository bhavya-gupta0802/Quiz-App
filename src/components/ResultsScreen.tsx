import React from 'react';
import { Trophy, RotateCcw, Star, Clock, Target, Award, Medal, Crown, Sparkles, Rocket, Zap } from 'lucide-react';
import { QuizState, QuizConfig } from '../types/quiz';

interface ResultsScreenProps {
  quizState: QuizState;
  quizConfig: QuizConfig;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ quizState, quizConfig, onRestart }) => {
  const percentage = (quizState.score / quizState.questions.length) * 100;
  const avgTimePerQuestion = quizState.timeSpent / quizState.questions.length;
  
  const getPerformanceLevel = () => {
    if (percentage >= 90) return { 
      level: 'Outstanding Champion!', 
      color: 'golden-text', 
      icon: Crown,
      bgColor: 'from-yellow-400 to-orange-500',
      message: 'You are a true Quiz Master! 👑',
      emoji: '🏆'
    };
    if (percentage >= 75) return { 
      level: 'Excellent Performance!', 
      color: 'golden-text', 
      icon: Trophy,
      bgColor: 'from-blue-500 to-purple-600',
      message: 'Outstanding knowledge display! 🎯',
      emoji: '🥇'
    };
    if (percentage >= 60) return { 
      level: 'Great Job!', 
      color: 'silver-text', 
      icon: Medal,
      bgColor: 'from-green-500 to-teal-600',
      message: 'Well done, keep learning! 🌟',
      emoji: '🥈'
    };
    if (percentage >= 40) return { 
      level: 'Good Effort!', 
      color: 'text-orange-400', 
      icon: Star,
      bgColor: 'from-orange-500 to-red-500',
      message: 'You are on the right track! 📈',
      emoji: '🥉'
    };
    return { 
      level: 'Keep Learning!', 
      color: 'text-gray-400', 
      icon: Target,
      bgColor: 'from-gray-500 to-gray-600',
      message: 'Practice makes perfect! 💪',
      emoji: '🎯'
    };
  };

  const performance = getPerformanceLevel();
  const PerformanceIcon = performance.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 slide-in-top">
          <div className="relative mb-12">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-2 shadow-2xl mx-auto">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                <PerformanceIcon className="w-24 h-24 text-yellow-400 z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
              </div>
            </div>
            <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${performance.bgColor} p-6 rounded-full shadow-2xl`}>
              <Crown className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-royal font-bold golden-text mb-6">
            Quiz Complete!
          </h1>
          <p className={`text-4xl font-semibold ${performance.color} mb-4`}>
            {performance.emoji} {performance.level}
          </p>
          <p className="text-2xl text-gray-300 mb-6">
            You scored <span className="golden-text font-bold">{quizState.score}</span> out of <span className="golden-text font-bold">{quizState.questions.length}</span> questions
          </p>
          <p className="text-xl text-gray-400">
            {performance.message}
          </p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-16 zoom-in">
          <div className="score-display w-80 h-80 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 2.83} 283`}
                className="transition-all duration-3000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#ffd700" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold golden-text font-tech">{percentage.toFixed(1)}%</div>
                <div className="text-xl text-gray-400 flex items-center justify-center mt-2">
                  <Target className="w-5 h-5 mr-2" />
                  Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="kbc-card text-center p-6 group slide-in-left">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-full w-fit mx-auto mb-6 shadow-2xl">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold golden-text mb-3 group-hover:scale-110 transition-transform font-tech">{quizState.score}</div>
            <div className="text-gray-400 flex items-center justify-center">
              <Star className="w-4 h-4 mr-2" />
              Correct Answers
            </div>
          </div>

          <div className="kbc-card text-center p-6 group fade-in">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-full w-fit mx-auto mb-6 shadow-2xl">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold golden-text mb-3 group-hover:scale-110 transition-transform font-tech">{avgTimePerQuestion.toFixed(1)}s</div>
            <div className="text-gray-400 flex items-center justify-center">
              <Zap className="w-4 h-4 mr-2" />
              Avg Time/Question
            </div>
          </div>

          <div className="kbc-card text-center p-6 group fade-in">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-full w-fit mx-auto mb-6 shadow-2xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold golden-text mb-3 group-hover:scale-110 transition-transform font-tech">
              {Object.values(quizState.hintsUsed).filter(Boolean).length}
            </div>
            <div className="text-gray-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Lifelines Used
            </div>
          </div>

          <div className="kbc-card text-center p-6 group slide-in-right">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-full w-fit mx-auto mb-6 shadow-2xl">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold golden-text mb-3 group-hover:scale-110 transition-transform font-tech">{quizConfig.difficulty.toUpperCase()}</div>
            <div className="text-gray-400 flex items-center justify-center">
              <Medal className="w-4 h-4 mr-2" />
              Difficulty Level
            </div>
          </div>
        </div>

        {/* Question Review */}
        <div className="kbc-card mb-16 p-8 slide-in-bottom">
          <h2 className="text-4xl font-bold golden-text mb-10 flex items-center">
            <Star className="w-10 h-10 mr-6 text-yellow-400" />
            Question Review
          </h2>
          
          <div className="space-y-6 max-h-96 overflow-y-auto">
            {quizState.questions.map((question, index) => {
              const userAnswer = quizState.answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="kbc-card p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-white font-medium mb-3 text-xl leading-relaxed">
                        {index + 1}. {question.question}
                      </p>
                      <div className="flex items-center space-x-6 text-sm">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isCorrect 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {isCorrect ? '✅ Correct' : '❌ Incorrect'}
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Your answer: <span className="font-medium ml-2 text-white">
                            {userAnswer >= 0 ? question.options[userAnswer] : 'No answer'}
                          </span>
                        </span>
                        {!isCorrect && (
                          <span className="text-gray-400 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-green-400" />
                            Correct: <span className="font-medium text-green-400 ml-2">
                              {question.options[question.correctAnswer]}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center zoom-in">
          <button
            onClick={onRestart}
            className="kbc-btn py-8 px-20 text-3xl font-royal relative group overflow-hidden"
          >
            <div className="relative flex items-center">
              <Rocket className="w-10 h-10 mr-6" />
              Play Again
              <Sparkles className="w-8 h-8 ml-6" />
            </div>
          </button>
          
          <p className="text-gray-400 mt-8 text-xl">
            🚀 Ready for another challenge? The hot seat awaits! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;