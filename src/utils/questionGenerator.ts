import { Question } from '../types/quiz';

const questionPool: Question[] = [
  // Easy Questions - Science
  {
    id: 'e1',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'Geography',
    hint: 'It\'s known as the City of Light and home to the Eiffel Tower.'
  },
  {
    id: 'e2',
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Science',
    hint: 'It\'s named after the Roman messenger god.'
  },
  {
    id: 'e3',
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Mathematics',
    hint: 'It\'s the most basic addition problem.'
  },
  {
    id: 'e4',
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Tiger', 'Elephant', 'Lion', 'Leopard'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'Animals',
    hint: 'It has a magnificent mane and lives in prides.'
  },
  {
    id: 'e5',
    question: 'How many days are there in a week?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'General Knowledge',
    hint: 'It\'s the same number as colors in a rainbow.'
  },
  {
    id: 'e6',
    question: 'What color do you get when you mix red and yellow?',
    options: ['Green', 'Orange', 'Purple', 'Pink'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Art',
    hint: 'It\'s the color of a sunset or a carrot.'
  },
  {
    id: 'e7',
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctAnswer: 3,
    difficulty: 'easy',
    category: 'Geography',
    hint: 'It\'s named after the word meaning "peaceful".'
  },
  {
    id: 'e8',
    question: 'How many legs does a spider have?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Animals',
    hint: 'It\'s the same number as sides on an octagon.'
  },
  {
    id: 'e9',
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Animals',
    hint: 'It lives in the ocean and can grow up to 100 feet long.'
  },
  {
    id: 'e10',
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'Science',
    hint: 'It\'s what humans exhale and plants need for photosynthesis.'
  },
  {
    id: 'e11',
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'Geography',
    hint: 'Asia, Africa, North America, South America, Antarctica, Europe, and Australia.'
  },
  {
    id: 'e12',
    question: 'What is the fastest land animal?',
    options: ['Lion', 'Cheetah', 'Horse', 'Gazelle'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Animals',
    hint: 'It has distinctive black spots and can run up to 70 mph.'
  },
  {
    id: 'e13',
    question: 'Which season comes after winter?',
    options: ['Summer', 'Fall', 'Spring', 'Autumn'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'General Knowledge',
    hint: 'It\'s when flowers bloom and trees get new leaves.'
  },
  {
    id: 'e14',
    question: 'What is the main ingredient in bread?',
    options: ['Rice', 'Flour', 'Sugar', 'Salt'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Food',
    hint: 'It\'s made from ground wheat.'
  },
  {
    id: 'e15',
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Mathematics',
    hint: 'It\'s the smallest number of sides a polygon can have.'
  },
  {
    id: 'e16',
    question: 'What is the color of the sun?',
    options: ['Red', 'Blue', 'Yellow', 'Green'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'Science',
    hint: 'It appears this color in most children\'s drawings.'
  },
  {
    id: 'e17',
    question: 'Which fruit is known for keeping the doctor away?',
    options: ['Banana', 'Apple', 'Orange', 'Grape'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Health',
    hint: 'There\'s a famous saying about eating one a day.'
  },
  {
    id: 'e18',
    question: 'What do bees make?',
    options: ['Milk', 'Honey', 'Butter', 'Cheese'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'Animals',
    hint: 'It\'s a sweet substance used in tea and cooking.'
  },
  {
    id: 'e19',
    question: 'How many hours are in a day?',
    options: ['12', '24', '36', '48'],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'General Knowledge',
    hint: 'It\'s twice the number of hours on a clock face.'
  },
  {
    id: 'e20',
    question: 'What is the opposite of hot?',
    options: ['Warm', 'Cool', 'Cold', 'Freezing'],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'General Knowledge',
    hint: 'It\'s what ice feels like.'
  },

  // Medium Questions
  {
    id: 'm1',
    question: 'Who painted the Mona Lisa?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Art',
    hint: 'This Renaissance artist was also an inventor and scientist.'
  },
  {
    id: 'm2',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Science',
    hint: 'It comes from the Latin word "aurum".'
  },
  {
    id: 'm3',
    question: 'In which year did World War II end?',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'History',
    hint: 'It ended the same year the atomic bombs were dropped.'
  },
  {
    id: 'm4',
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Mathematics',
    hint: 'It\'s the number of months in a year.'
  },
  {
    id: 'm5',
    question: 'Which Shakespeare play features the characters Romeo and Juliet?',
    options: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'Othello'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Literature',
    hint: 'It\'s a tragedy about two young star-crossed lovers.'
  },
  {
    id: 'm6',
    question: 'What is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Geography',
    hint: 'It flows through Egypt and several other African countries.'
  },
  {
    id: 'm7',
    question: 'Who composed "The Four Seasons"?',
    options: ['Mozart', 'Beethoven', 'Vivaldi', 'Bach'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Music',
    hint: 'This Italian Baroque composer was known as "The Red Priest".'
  },
  {
    id: 'm8',
    question: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Science',
    hint: 'It\'s used in engagement rings and cutting tools.'
  },
  {
    id: 'm9',
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'Thailand', 'South Korea'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Geography',
    hint: 'It\'s an island nation in East Asia known for sushi and anime.'
  },
  {
    id: 'm10',
    question: 'What is the currency of the United Kingdom?',
    options: ['Euro', 'Dollar', 'Pound Sterling', 'Franc'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Economics',
    hint: 'It\'s often called the "pound" and uses the symbol £.'
  },
  {
    id: 'm11',
    question: 'Which organ in the human body produces insulin?',
    options: ['Liver', 'Kidney', 'Pancreas', 'Heart'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Biology',
    hint: 'It\'s located behind the stomach and helps regulate blood sugar.'
  },
  {
    id: 'm12',
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Geography',
    hint: 'It\'s located within Rome and is the spiritual center of Catholicism.'
  },
  {
    id: 'm13',
    question: 'Which element has the atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Chemistry',
    hint: 'It\'s the lightest and most abundant element in the universe.'
  },
  {
    id: 'm14',
    question: 'Who wrote the novel "Pride and Prejudice"?',
    options: ['Charlotte Brontë', 'Jane Austen', 'Emily Dickinson', 'Virginia Woolf'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Literature',
    hint: 'This English author wrote about Elizabeth Bennet and Mr. Darcy.'
  },
  {
    id: 'm15',
    question: 'What is the speed of light in a vacuum?',
    options: ['300,000 km/s', '299,792,458 m/s', '186,000 miles/s', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'medium',
    category: 'Physics',
    hint: 'It\'s a fundamental constant in physics, approximately 300,000 km/s.'
  },
  {
    id: 'm16',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Science',
    hint: 'It\'s named after the Roman god of war.'
  },
  {
    id: 'm17',
    question: 'What is the largest bone in the human body?',
    options: ['Skull', 'Femur', 'Tibia', 'Humerus'],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'Biology',
    hint: 'It\'s the thigh bone.'
  },
  {
    id: 'm18',
    question: 'Which ocean is the smallest?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'Geography',
    hint: 'It\'s located at the North Pole.'
  },
  {
    id: 'm19',
    question: 'What does "www" stand for?',
    options: ['World Wide Web', 'World Wide Website', 'Web World Wide', 'Website World Wide'],
    correctAnswer: 0,
    difficulty: 'medium',
    category: 'Technology',
    hint: 'It\'s the prefix for most website addresses.'
  },
  {
    id: 'm20',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
    correctAnswer: 3,
    difficulty: 'medium',
    category: 'Health',
    hint: 'It\'s important for bone health.'
  },

  // Hard Questions
  {
    id: 'h1',
    question: 'What is the Heisenberg Uncertainty Principle?',
    options: [
      'Energy cannot be created or destroyed',
      'You cannot simultaneously know position and momentum precisely',
      'Objects in motion stay in motion',
      'For every action, there is an equal and opposite reaction'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Physics',
    hint: 'It\'s a fundamental principle in quantum mechanics.'
  },
  {
    id: 'h2',
    question: 'Who wrote "One Hundred Years of Solitude"?',
    options: ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Literature',
    hint: 'This Colombian author won the Nobel Prize in Literature in 1982.'
  },
  {
    id: 'h3',
    question: 'What is the smallest prime number greater than 100?',
    options: ['101', '103', '107', '109'],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'Mathematics',
    hint: 'It\'s the first three-digit prime number.'
  },
  {
    id: 'h4',
    question: 'Which emperor built the Colosseum in Rome?',
    options: ['Julius Caesar', 'Augustus', 'Vespasian', 'Trajan'],
    correctAnswer: 2,
    difficulty: 'hard',
    category: 'History',
    hint: 'He founded the Flavian dynasty and ruled from 69-79 AD.'
  },
  {
    id: 'h5',
    question: 'What is the name of the theoretical boundary around a black hole?',
    options: ['Schwarzschild radius', 'Event horizon', 'Singularity', 'Photon sphere'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Astronomy',
    hint: 'It\'s the point of no return around a black hole.'
  },
  {
    id: 'h6',
    question: 'Which philosopher wrote "Critique of Pure Reason"?',
    options: ['Immanuel Kant', 'Georg Hegel', 'Friedrich Nietzsche', 'Arthur Schopenhauer'],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'Philosophy',
    hint: 'This German philosopher developed the categorical imperative.'
  },
  {
    id: 'h7',
    question: 'What is the molecular formula for caffeine?',
    options: ['C₆H₁₂O₆', 'C₈H₁₀N₄O₂', 'C₇H₈N₄O₂', 'C₁₂H₂₂O₁₁'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Chemistry',
    hint: 'It\'s a stimulant found in coffee, tea, and chocolate.'
  },
  {
    id: 'h8',
    question: 'Which programming language was created by Guido van Rossum?',
    options: ['Java', 'Python', 'Ruby', 'Perl'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Technology',
    hint: 'It\'s named after a British comedy group and emphasizes code readability.'
  },
  {
    id: 'h9',
    question: 'What is the Fibonacci sequence\'s 10th number?',
    options: ['34', '55', '89', '144'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Mathematics',
    hint: 'The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...'
  },
  {
    id: 'h10',
    question: 'Which artist painted "The Persistence of Memory"?',
    options: ['Pablo Picasso', 'Salvador Dalí', 'René Magritte', 'Max Ernst'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Art',
    hint: 'This surrealist painter is famous for melting clocks.'
  },
  {
    id: 'h11',
    question: 'What is the capital of Bhutan?',
    options: ['Thimphu', 'Paro', 'Punakha', 'Jakar'],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'Geography',
    hint: 'It\'s the largest city in this Himalayan kingdom.'
  },
  {
    id: 'h12',
    question: 'Which composer wrote "The Well-Tempered Clavier"?',
    options: ['Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Franz Schubert'],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'Music',
    hint: 'This Baroque composer is considered the master of counterpoint.'
  },
  {
    id: 'h13',
    question: 'What is the half-life of Carbon-14?',
    options: ['5,730 years', '1,600 years', '24,000 years', '4.5 billion years'],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'Science',
    hint: 'It\'s used in radiocarbon dating of archaeological artifacts.'
  },
  {
    id: 'h14',
    question: 'Which novel begins with "Call me Ishmael"?',
    options: ['The Great Gatsby', 'Moby Dick', 'To Kill a Mockingbird', '1984'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Literature',
    hint: 'It\'s Herman Melville\'s epic tale about a white whale.'
  },
  {
    id: 'h15',
    question: 'What is the most abundant gas in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correctAnswer: 2,
    difficulty: 'hard',
    category: 'Science',
    hint: 'It makes up about 78% of the atmosphere.'
  },
  {
    id: 'h16',
    question: 'Which ancient wonder of the world was located in Alexandria?',
    options: ['Hanging Gardens', 'Lighthouse of Alexandria', 'Colossus of Rhodes', 'Statue of Zeus'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'History',
    hint: 'It was one of the tallest man-made structures for many centuries.'
  },
  {
    id: 'h17',
    question: 'What is the name of the process by which plants make their own food?',
    options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Germination'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Biology',
    hint: 'It involves converting sunlight into energy.'
  },
  {
    id: 'h18',
    question: 'Which mathematician is known for the theorem a² + b² = c²?',
    options: ['Euclid', 'Pythagoras', 'Archimedes', 'Aristotle'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Mathematics',
    hint: 'This theorem relates to right triangles.'
  },
  {
    id: 'h19',
    question: 'What is the study of earthquakes called?',
    options: ['Geology', 'Seismology', 'Meteorology', 'Volcanology'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'Science',
    hint: 'It involves measuring seismic waves.'
  },
  {
    id: 'h20',
    question: 'Which empire was ruled by Cyrus the Great?',
    options: ['Roman Empire', 'Persian Empire', 'Byzantine Empire', 'Ottoman Empire'],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'History',
    hint: 'It was one of the largest empires in ancient history.'
  }
];

export const generateQuestions = (count: number, difficulty: 'easy' | 'medium' | 'hard' | 'mixed'): Question[] => {
  let filteredQuestions: Question[];
  
  if (difficulty === 'mixed') {
    filteredQuestions = [...questionPool];
  } else {
    filteredQuestions = questionPool.filter(q => q.difficulty === difficulty);
  }
  
  // Shuffle the questions using Fisher-Yates algorithm for better randomization
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the requested number of questions, ensuring no duplicates
  const result = shuffled.slice(0, Math.min(count, shuffled.length));
  
  if (result.length < count) {
    console.warn(`Only ${result.length} unique questions available for difficulty: ${difficulty}`);
  }
  
  return result;
};