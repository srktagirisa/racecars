import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

const App: React.FC = () => {
  const [showScoreboard, setShowScoreboard] = useState(false);

  const handleHideScoreboard = () => {
    setShowScoreboard(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header raceTitle="Le Circus 500" />
      {showScoreboard ? (
        <Scoreboard showScoreboard={showScoreboard} onHideScoreboard={handleHideScoreboard} />
      ) : (
        <button onClick={() => setShowScoreboard(true)}>Show Scoreboard</button>
      )}
    </div>
  );
};

export default App;
