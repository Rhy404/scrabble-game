import React, { useState } from 'react';
import './App.css';

function App() {
  // --- MEMBER 1: MAIN GAME STATE CONTROLLER ---
  // Initializing a 15x15 empty Scrabble board grid
  const [board, setBoard] = useState(
    Array(15).fill(null).map(() => Array(15).fill(""))
  );

  // Placeholder racks and scores (will later be driven by Member 3's game engine)
  const [playerRack, setPlayerRack] = useState(['A', 'R', 'T', 'I', 'S', 'T', 'X']);
  const [aiRack, setAiRack] = useState(['E', 'N', 'G', 'I', 'N', 'E', 'Z']);
  const [scores, setScores] = useState({ player: 0, ai: 0 });
  const [turn, setTurn] = useState('PLAYER'); // 'PLAYER' or 'AI'

  return (
    <div className="app-container">
      <header className="game-header">
        <h1>Scrabble AI Project</h1>
        <p className="team-role-tag">Member 1: Architecture & Integration Workspace</p>
      </header>

      <div className="game-dashboard">
        {/* Scoreboard */}
        <div className="scoreboard">
          <div className={`score-card ${turn === 'PLAYER' ? 'active-turn' : ''}`}>
            <h3>Player Score</h3>
            <p className="score-number">{scores.player}</p>
          </div>
          <div className="turn-indicator">
            <span>Current Turn: <strong>{turn}</strong></span>
          </div>
          <div className={`score-card ${turn === 'AI' ? 'active-turn' : ''}`}>
            <h3>AI Score</h3>
            <p className="score-number">{scores.ai}</p>
          </div>
        </div>

        {/* Main Play Area */}
        <div className="play-area">
          {/* Placeholder for Member 2's Board Component */}
          <div className="board-placeholder">
            <h2>[ Board.jsx will render here ]</h2>
            <p>Waiting for Member 2 to supply component...</p>
          </div>

          {/* Player Rack Section */}
          <div className="rack-section">
            <h3>Your Rack:</h3>
            <div className="rack-tiles">
              {playerRack.map((letter, index) => (
                <div key={index} className="tile">
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;