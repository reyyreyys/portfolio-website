import React, { useState, useEffect, useRef } from 'react';

const SpeedTypingGame = () => {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'finished'
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [setEndTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [highScores, setHighScores] = useState({ wpm: 0, accuracy: 0 });
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const codeSnippets = [
    {
      code: 'const greeting = (name) => `Hello, ${name}!`;',
      language: "JavaScript",
      difficulty: "Easy"
    },
    {
      code: "function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }",
      language: "JavaScript", 
      difficulty: "Medium"
    },
    {
      code: "const users = await fetch('/api/users').then(res => res.json());",
      language: "JavaScript",
      difficulty: "Medium"
    },
    {
      code: "export default function Button({ children, onClick, variant = 'primary' }) { return <button onClick={onClick} className={variant}>{children}</button>; }",
      language: "React",
      difficulty: "Hard"
    },
    {
      code: "def quicksort(arr): return arr if len(arr) <= 1 else quicksort([x for x in arr[1:] if x < arr[0]]) + [arr[0]] + quicksort([x for x in arr[1:] if x >= arr[0]])",
      language: "Python",
      difficulty: "Hard"
    },
    {
      code: "SELECT u.name, COUNT(p.id) as post_count FROM users u LEFT JOIN posts p ON u.id = p.user_id GROUP BY u.id;",
      language: "SQL",
      difficulty: "Medium"
    },
    {
      code: "const debounce = (func, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => func(...args), delay); }; };",
      language: "JavaScript",
      difficulty: "Hard"
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('typingGameHighScores');
    if (saved) {
      setHighScores(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (gameState === 'playing' && startTime) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState, startTime]);

  const startGame = (difficulty = 'all') => {
    const availableSnippets = difficulty === 'all' 
      ? codeSnippets 
      : codeSnippets.filter(s => s.difficulty.toLowerCase() === difficulty.toLowerCase());
    
    const randomSnippet = availableSnippets[Math.floor(Math.random() * availableSnippets.length)];
    setCurrentSnippet(randomSnippet);
    setUserInput('');
    setCurrentIndex(0);
    setStartTime(Date.now());
    setEndTime(null);
    setErrors(0);
    setTimeElapsed(0);
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (!startTime) {
      setStartTime(Date.now());
    }

    const currentChar = currentSnippet.code[value.length - 1];
    const typedChar = value[value.length - 1];

    if (value.length > userInput.length && currentChar !== typedChar) {
      setErrors(prev => prev + 1);
    }

    if (value === currentSnippet.code) {
      finishGame();
    }
  };

  const finishGame = () => {
    const endTime = Date.now();
    setEndTime(endTime);
    
    const timeInMinutes = (endTime - startTime) / 60000;
    const wordsTyped = currentSnippet.code.length / 5; // Standard: 5 characters = 1 word
    const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
    const calculatedAccuracy = Math.round(((currentSnippet.code.length - errors) / currentSnippet.code.length) * 100);
    
    setWpm(calculatedWpm);
    setAccuracy(calculatedAccuracy);
    setGameState('finished');

    // Update high scores
    const newHighScores = {
      wpm: Math.max(highScores.wpm, calculatedWpm),
      accuracy: Math.max(highScores.accuracy, calculatedAccuracy)
    };
    setHighScores(newHighScores);
    localStorage.setItem('typingGameHighScores', JSON.stringify(newHighScores));
  };

  const resetGame = () => {
    setGameState('menu');
    setUserInput('');
    setCurrentIndex(0);
    setStartTime(null);
    setEndTime(null);
    setTimeElapsed(0);
  };

  const renderCode = () => {
    if (!currentSnippet.code) return null;
    
    return (
      <div className="code-display">
        <div className="code-header">
          <span className="language-tag">{currentSnippet.language}</span>
          <span className="difficulty-tag">{currentSnippet.difficulty}</span>
        </div>
        <pre className="code-snippet">
          {currentSnippet.code.split('').map((char, index) => {
            let className = '';
            if (index < userInput.length) {
              className = userInput[index] === char ? 'correct' : 'incorrect';
            } else if (index === userInput.length) {
              className = 'current';
            }
            
            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </pre>
      </div>
    );
  };

  return (
    <div className="speed-typing-game">
      <div className="game-header">
        <h3>Code Typing Challenge</h3>
        <div className="game-stats">
          <span>High WPM: {highScores.wpm}</span>
          <span>Best Accuracy: {highScores.accuracy}%</span>
        </div>
      </div>

      {gameState === 'menu' && (
        <div className="game-menu">
          <p>Test your coding typing speed! Type the code snippets as fast and accurately as possible.</p>
          <div className="difficulty-buttons">
            <button onClick={() => startGame('easy')} className="game-btn difficulty-btn">
              Easy
            </button>
            <button onClick={() => startGame('medium')} className="game-btn difficulty-btn">
              Medium
            </button>
            <button onClick={() => startGame('hard')} className="game-btn difficulty-btn">
              Hard
            </button>
            <button onClick={() => startGame('all')} className="game-btn start-btn">
              Random Mix
            </button>
          </div>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="game-playing">
          <div className="live-stats">
            <span>Time: {Math.floor(timeElapsed / 1000)}s</span>
            <span>Errors: {errors}</span>
            <span>Progress: {Math.round((userInput.length / currentSnippet.code.length) * 100)}%</span>
          </div>
          
          {renderCode()}
          
          <textarea
            ref={inputRef}
            value={userInput}
            onChange={handleInputChange}
            className="typing-input"
            placeholder="Start typing the code above..."
            spellCheck={false}
          />
        </div>
      )}

      {gameState === 'finished' && (
        <div className="game-finished">
          <h4>Challenge Complete! 🎉</h4>
          <div className="final-stats">
            <div className="stat-item">
              <span className="stat-value">{wpm}</span>
              <span className="stat-label">WPM</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{accuracy}%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{Math.floor(timeElapsed / 1000)}s</span>
              <span className="stat-label">Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{errors}</span>
              <span className="stat-label">Errors</span>
            </div>
          </div>
          
          {(wpm === highScores.wpm || accuracy === highScores.accuracy) && (
            <p className="new-record">New Personal Best! 🏆</p>
          )}
          
          <div className="game-buttons">
            <button onClick={() => startGame('all')} className="game-btn play-again-btn">
              Try Another
            </button>
            <button onClick={resetGame} className="game-btn menu-btn">
              Back to Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTypingGame;
