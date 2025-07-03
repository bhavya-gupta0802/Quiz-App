import { Question, HintData } from '../types/quiz';

export const generateHintData = (question: Question): HintData => {
  const hintData: HintData = {};
  
  // Generate 50:50 hint - remove two incorrect options
  const incorrectOptions = question.options
    .map((_, index) => index)
    .filter(index => index !== question.correctAnswer);
  
  const optionsToKeep = [question.correctAnswer];
  const randomIncorrect = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
  optionsToKeep.push(randomIncorrect);
  
  hintData.fiftyFiftyOptions = optionsToKeep.sort((a, b) => a - b);
  
  // Generate audience poll - biased towards correct answer but with some randomness
  const votes = [0, 0, 0, 0];
  let remainingVotes = 100;
  
  // Give correct answer 40-70% of votes
  const correctVotes = Math.floor(Math.random() * 30) + 40;
  votes[question.correctAnswer] = correctVotes;
  remainingVotes -= correctVotes;
  
  // Distribute remaining votes among other options
  for (let i = 0; i < 4; i++) {
    if (i !== question.correctAnswer && remainingVotes > 0) {
      const maxVotes = Math.min(remainingVotes, 25);
      const optionVotes = Math.floor(Math.random() * maxVotes);
      votes[i] = optionVotes;
      remainingVotes -= optionVotes;
    }
  }
  
  // Add any remaining votes randomly
  while (remainingVotes > 0) {
    const randomIndex = Math.floor(Math.random() * 4);
    votes[randomIndex]++;
    remainingVotes--;
  }
  
  hintData.audienceVotes = votes;
  
  // Generate friend's advice
  const friendAdvices = [
    `I'm pretty sure it's option ${String.fromCharCode(65 + question.correctAnswer)}. I remember studying this topic.`,
    `Based on my knowledge, I'd go with ${String.fromCharCode(65 + question.correctAnswer)}. That sounds right to me.`,
    `I think the answer is ${String.fromCharCode(65 + question.correctAnswer)}. I've seen this question before.`,
    `My gut feeling says ${String.fromCharCode(65 + question.correctAnswer)}. Trust me on this one!`,
    `I'm confident it's ${String.fromCharCode(65 + question.correctAnswer)}. That's what I would choose.`
  ];
  
  // Sometimes give wrong advice (20% chance)
  if (Math.random() < 0.2) {
    const wrongOptions = question.options
      .map((_, index) => index)
      .filter(index => index !== question.correctAnswer);
    const wrongAnswer = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    
    const wrongAdvices = [
      `Hmm, I'm not completely sure, but I think it might be ${String.fromCharCode(65 + wrongAnswer)}. Don't take my word for it though.`,
      `I'm guessing ${String.fromCharCode(65 + wrongAnswer)}, but I'm not entirely confident about this one.`,
      `This is tough, but I'd probably go with ${String.fromCharCode(65 + wrongAnswer)}. What do you think?`
    ];
    
    hintData.friendAdvice = wrongAdvices[Math.floor(Math.random() * wrongAdvices.length)];
  } else {
    hintData.friendAdvice = friendAdvices[Math.floor(Math.random() * friendAdvices.length)];
  }
  
  return hintData;
};