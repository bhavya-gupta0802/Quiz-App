import React, { useState } from 'react';
import { Play, Settings, Trophy, Lightbulb, Target, Users, BookOpen, Brain, Zap, Sparkles, Crown, Star } from 'lucide-react';
import { QuizConfig } from '../types/quiz';

interface WelcomeScreenProps {
  onStartQuiz: (config: QuizConfig) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  const [config, setConfig] = useState<QuizConfig>({
    questionCount: 10,
    difficulty: 'medium',
    hintsEnabled: true
  });

  const handleStart = () => {
    onStartQuiz(config);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* KBC Style Header */}
        <div className="text-center mb-16 slide-in-top">
          <div className="relative mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                    <Crown className="w-24 h-24 text-yellow-400 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl animate-bounce">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-royal font-bold golden-text mb-8">
            Quiz Master
          </h1>
          <h2 className="text-4xl md:text-5xl font-display font-semibold silver-text mb-6">
            Kaun Banega Crorepati Style
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            🎯 Test your knowledge in the ultimate quiz experience. Choose your difficulty, 
            use lifelines wisely, and climb the ladder of success! 
            <span className="golden-text font-bold">Every question brings you closer to victory!</span> ✨
          </p>
          
          {/* Stats showcase */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="text-center group slide-in-left">
              <div className="text-4xl font-bold golden-text mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4 mr-1" />
                Questions
              </div>
            </div>
            <div className="text-center group fade-in">
              <div className="text-4xl font-bold golden-text mb-2 group-hover:scale-110 transition-transform">8</div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <Target className="w-4 h-4 mr-1" />
                Categories
              </div>
            </div>
            <div className="text-center group slide-in-right">
              <div className="text-4xl font-bold golden-text mb-2 group-hover:scale-110 transition-transform">3</div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <Zap className="w-4 h-4 mr-1" />
                Lifelines
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="kbc-card max-w-5xl mx-auto mb-16 p-8 slide-in-bottom">
          <div className="flex items-center mb-10">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full mr-6 shadow-2xl">
              <Settings className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-4xl font-bold golden-text mb-2">Game Settings</h2>
              <p className="text-gray-300">Configure your quiz experience</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Question Count */}
            <div className="space-y-6 group">
              <label className="block text-xl font-semibold text-gray-200 group-hover:text-yellow-400 transition-colors">
                <Target className="w-6 h-6 inline mr-3 text-yellow-400" />
                Number of Questions
              </label>
              <div className="relative">
                <select 
                  value={config.questionCount}
                  onChange={(e) => setConfig({...config, questionCount: parseInt(e.target.value)})}
                  className="w-full px-6 py-5 rounded-2xl bg-black/50 backdrop-blur-sm border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:ring-0 transition-all duration-300 appearance-none cursor-pointer hover:shadow-lg hover:scale-105 font-medium text-lg"
                >
                  <option value={5}>🚀 5 Questions - Quick Round</option>
                  <option value={10}>⚡ 10 Questions - Standard Game</option>
                  <option value={15}>🎯 15 Questions - Extended Challenge</option>
                  <option value={20}>🏆 20 Questions - Ultimate Test</option>
                </select>
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Difficulty */}
            <div className="space-y-6 group">
              <label className="block text-xl font-semibold text-gray-200 group-hover:text-yellow-400 transition-colors">
                <Trophy className="w-6 h-6 inline mr-3 text-yellow-400" />
                Difficulty Level
              </label>
              <div className="relative">
                <select 
                  value={config.difficulty}
                  onChange={(e) => setConfig({...config, difficulty: e.target.value as QuizConfig['difficulty']})}
                  className="w-full px-6 py-5 rounded-2xl bg-black/50 backdrop-blur-sm border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:ring-0 transition-all duration-300 appearance-none cursor-pointer hover:shadow-lg hover:scale-105 font-medium text-lg"
                >
                  <option value="easy">🟢 Easy - Beginner Level</option>
                  <option value="medium">🟡 Medium - Intermediate Challenge</option>
                  <option value="hard">🔴 Hard - Expert Level</option>
                  <option value="mixed">🌈 Mixed - All Levels Combined</option>
                </select>
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Lifelines */}
            <div className="space-y-6 group">
              <label className="block text-xl font-semibold text-gray-200 group-hover:text-yellow-400 transition-colors">
                <Lightbulb className="w-6 h-6 inline mr-3 text-yellow-400" />
                Lifelines
              </label>
              <div className="flex items-center justify-center h-20">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={config.hintsEnabled}
                    onChange={(e) => setConfig({...config, hintsEnabled: e.target.checked})}
                    className="sr-only"
                  />
                  <div className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
                    config.hintsEnabled 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl' 
                      : 'bg-gray-600'
                  }`}>
                    <div className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transform transition-all duration-500 top-1 ${
                      config.hintsEnabled ? 'translate-x-11' : 'translate-x-1'
                    } flex items-center justify-center`}>
                      {config.hintsEnabled && (
                        <Zap className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                  </div>
                  <span className="ml-6 text-gray-200 font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                    {config.hintsEnabled ? '✨ Enabled' : '❌ Disabled'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="kbc-card text-center p-8 group slide-in-left">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <BookOpen className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold golden-text mb-4 group-hover:scale-105 transition-transform">Dynamic Questions</h3>
            <p className="text-gray-300 leading-relaxed">Fresh questions every game across multiple categories for endless entertainment</p>
          </div>

          <div className="kbc-card text-center p-8 group zoom-in">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-full">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold golden-text mb-4 group-hover:scale-105 transition-transform">Smart Lifelines</h3>
            <p className="text-gray-300 leading-relaxed">Strategic hints including 50:50, Ask the Audience, and Phone a Friend</p>
          </div>

          <div className="kbc-card text-center p-8 group slide-in-right">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                <Crown className="w-5 h-5 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold golden-text mb-4 group-hover:scale-105 transition-transform">Performance Tracking</h3>
            <p className="text-gray-300 leading-relaxed">Detailed analytics and scoring to track your knowledge journey</p>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center zoom-in">
          <button
            onClick={handleStart}
            className="kbc-btn py-8 px-20 text-3xl font-royal relative group overflow-hidden"
          >
            <div className="relative flex items-center">
              <Play className="w-10 h-10 mr-6" />
              Start Your Journey
              <Sparkles className="w-8 h-8 ml-6" />
            </div>
          </button>
          
          <p className="text-gray-400 mt-8 text-lg">
            🎯 Ready to test your knowledge? The hot seat awaits! 🏆
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;