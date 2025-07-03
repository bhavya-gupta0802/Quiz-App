import React, { useState, useEffect } from 'react';
import { Clock, Trophy, Lightbulb, Users, Phone, Target, CheckCircle, XCircle, Brain, Zap, Star, Crown } from 'lucide-react';
import { QuizState, QuizConfig, HintData } from '../types/quiz';
import { generateHintData } from '../utils/hintGenerator';

interface QuizScreenProps {
  quizState: QuizState;
  quizConfig: QuizConfig;
  onQuizEnd: (finalState: QuizState) => void;
  onStateUpdate: (state: QuizState) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ 
  quizState, 
  quizConfig, 
  onQuizEnd, 
  onStateUpdate 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [hintData, setHintData] = useState<HintData>({});
  const [availableOptions, setAvailableOptions] = useState<number[]>([0, 1, 2, 3]);

  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.currentQuestion]);

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
    setAvailableOptions([0, 1, 2, 3]);
    setHintData({});
  }, [quizState.currentQuestion]);

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      handleAnswer(-1);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const newAnswers = [...quizState.answers, answerIndex];

    const updatedState = {
      ...quizState,
      score: newScore,
      answers: newAnswers,
      timeSpent: quizState.timeSpent + (30 - timeLeft)
    };

    onStateUpdate(updatedState);

    setTimeout(() => {
      if (quizState.currentQuestion + 1 >= quizState.questions.length) {
        onQuizEnd(updatedState);
      } else {
        onStateUpdate({
          ...updatedState,
          currentQuestion: quizState.currentQuestion + 1
        });
      }
    }, 3000);
  };

  const useFiftyFifty = () => {
    if (quizState.hintsUsed.fiftyFifty) return;

    const hintData = generateHintData(currentQuestion);
    setHintData(hintData);
    setAvailableOptions(hintData.fiftyFiftyOptions || [0, 1, 2, 3]);

    onStateUpdate({
      ...quizState,
      hintsUsed: { ...quizState.hintsUsed, fiftyFifty: true }
    });
  };

  const useAskAudience = () => {
    if (quizState.hintsUsed.askAudience) return;

    const hintData = generateHintData(currentQuestion);
    setHintData({ ...hintData, audienceVotes: hintData.audienceVotes });

    onStateUpdate({
      ...quizState,
      hintsUsed: { ...quizState.hintsUsed, askAudience: true }
    });
  };

  const usePhoneAFriend = () => {
    if (quizState.hintsUsed.phoneAFriend) return;

    const hintData = generateHintData(currentQuestion);
    setHintData({ ...hintData, friendAdvice: hintData.friendAdvice });

    onStateUpdate({
      ...quizState,
      hintsUsed: { ...quizState.hintsUsed, phoneAFriend: true }
    });
  };

  const getOptionClassName = (index: number) => {
    if (!availableOptions.includes(index)) {
      return 'kbc-option opacity-30 cursor-not-allowed';
    }

    if (!showResult) {
      return 'kbc-option cursor-pointer';
    }

    if (index === currentQuestion.correctAnswer) {
      return 'kbc-option correct';
    }

    if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
      return 'kbc-option incorrect';
    }

    return 'kbc-option opacity-50';
  };

  return (
    <div className="min-h-screen p-4 flex flex-col">
      {/* Header */}
      <div className="kbc-card mb-8 p-6 slide-in-top">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Crown className="w-10 h-10 text-yellow-400" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
                <Trophy className="w-5 h-5 text-black" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-royal font-bold golden-text">Quiz Master</h1>
              <p className="text-gray-300 text-lg">Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-10">
            <div className="text-center group">
              <div className="score-display w-20 h-20 flex items-center justify-center">
                <div className="text-3xl font-bold golden-text group-hover:scale-110 transition-transform font-tech">{quizState.score}</div>
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center mt-2">
                <Star className="w-4 h-4 mr-1" />
                Score
              </div>
            </div>
            <div className="text-center group">
              <div className={`text-4xl font-bold font-tech group-hover:scale-110 transition-transform ${
                timeLeft <= 10 ? 'timer-critical' : 'golden-text'
              }`}>
                {timeLeft}s
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                Time
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="kbc-progress h-4">
          <div 
            className="kbc-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-10">
        {/* Question Card */}
        <div className="flex-1">
          <div className="question-card h-full p-8 slide-in-left">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full mr-6 shadow-2xl">
                <Brain className="w-8 h-8 text-black" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wide flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  {currentQuestion.category}
                </span>
                <div className="flex items-center mt-2">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {currentQuestion.difficulty.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult || !availableOptions.includes(index)}
                  className={`w-full p-6 text-left transition-all duration-300 ${getOptionClassName(index)}`}
                >
                  <div className="flex items-center">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center mr-6 text-lg font-bold shadow-xl font-tech">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-xl font-medium flex-1">{option}</span>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="w-8 h-8 text-green-400 ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-8 h-8 text-red-400 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Hint Display */}
            {hintData.friendAdvice && (
              <div className="mt-10 kbc-card p-6 border-blue-500/30 fade-in">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="font-semibold text-blue-400 text-lg">Friend's Advice:</span>
                </div>
                <p className="text-blue-300 text-lg leading-relaxed">{hintData.friendAdvice}</p>
              </div>
            )}

            {hintData.audienceVotes && (
              <div className="mt-10 kbc-card p-6 border-green-500/30 fade-in">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-green-400 mr-3" />
                  <span className="font-semibold text-green-400 text-lg">Audience Poll:</span>
                </div>
                <div className="space-y-4">
                  {hintData.audienceVotes.map((percentage, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-10 text-green-400 font-bold text-lg font-tech">{String.fromCharCode(65 + index)}:</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-4 mx-4 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-500 h-4 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-green-400 font-bold w-16 text-lg font-tech">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lifelines */}
        {quizConfig.hintsEnabled && (
          <div className="lg:w-96">
            <div className="kbc-card p-6 slide-in-right">
              <h3 className="text-3xl font-bold golden-text mb-8 flex items-center">
                <Zap className="w-8 h-8 mr-4 text-yellow-400" />
                Lifelines
              </h3>

              <div className="space-y-6">
                <button
                  onClick={useFiftyFifty}
                  disabled={quizState.hintsUsed.fiftyFifty || showResult}
                  className={`lifeline-btn w-full p-6 text-left transition-all duration-300 ${
                    quizState.hintsUsed.fiftyFifty ? 'used' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-2xl font-tech">
                      50:50
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-xl">Fifty-Fifty</div>
                      <div className="text-sm text-gray-400">Remove two wrong answers</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={useAskAudience}
                  disabled={quizState.hintsUsed.askAudience || showResult}
                  className={`lifeline-btn w-full p-6 text-left transition-all duration-300 ${
                    quizState.hintsUsed.askAudience ? 'used' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full mr-6 shadow-2xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-xl">Ask the Audience</div>
                      <div className="text-sm text-gray-400">See audience poll results</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={usePhoneAFriend}
                  disabled={quizState.hintsUsed.phoneAFriend || showResult}
                  className={`lifeline-btn w-full p-6 text-left transition-all duration-300 ${
                    quizState.hintsUsed.phoneAFriend ? 'used' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-6 shadow-2xl">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-xl">Phone a Friend</div>
                      <div className="text-sm text-gray-400">Get expert advice</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Lifeline usage indicator */}
              <div className="mt-8 pt-8 border-t border-gray-600">
                <div className="text-sm text-gray-400 mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Lifelines Used:
                </div>
                <div className="flex space-x-3">
                  {Object.entries(quizState.hintsUsed).map(([key, used]) => (
                    <div
                      key={key}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        used ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;