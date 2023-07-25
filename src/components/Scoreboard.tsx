import React, { useState, useEffect } from 'react';
import Driver from './Driver';

interface ScoreboardProps {
  showScoreboard: boolean;
  onHideScoreboard: () => void;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ showScoreboard, onHideScoreboard }) => {
  const [raceStarted, setRaceStarted] = useState(false);
  const drivers = ['Princes Daisy', 'Mario', 'Luigi'];

  useEffect(() => {
    console.log("Scoreboard.tsx has mounted");
    
    return () => {
      console.log('Scoreboard.tsx has un-mounted');
    };
  }, [raceStarted]);

  const handleGoButtonClick = () => {
    setRaceStarted((prevState) => !prevState);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <h2>Race Scoreboard</h2>
      {showScoreboard ? (
        <>
          <button style={{ marginBottom: '20px' }} onClick={handleGoButtonClick}>{raceStarted ? 'STOP' : 'GO'}</button>
          {drivers.map((driver) => (
            <div key={driver} style={{ marginBottom: '20px' }}>
              <Driver key={driver} name={driver} raceStarted={raceStarted} />
            </div>
          ))}
          <button onClick={onHideScoreboard}>Hide Scoreboard</button>
          </>
      ) : (
        <button onClick={onHideScoreboard}>Show Scoreboard</button>
      )}
    </div>
  );
};

export default Scoreboard;
