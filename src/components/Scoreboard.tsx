import React, { useState, useEffect } from 'react';
import Driver from './Driver';
import AddDriverForm from './AddDriverForm';


interface ScoreboardProps {
  showScoreboard: boolean;
  onHideScoreboard: () => void;
}

export interface DriverData {
  name: string;
  crossedFinishLine: boolean;
}

const initialDrivers: DriverData[] = [
  { name: 'Princes Daisy', crossedFinishLine: false },
  { name: 'Mario', crossedFinishLine: false },
  { name: 'Luigi', crossedFinishLine: false },
];

const Scoreboard: React.FC<ScoreboardProps> = ({ showScoreboard, onHideScoreboard }) => {
  const [raceStarted, setRaceStarted] = useState(false);
  const [drivers, setDrivers] = useState<DriverData[]>(initialDrivers);

  useEffect(() => {
    console.log("Scoreboard.tsx has mounted");
    
    return () => {
      console.log('Scoreboard.tsx has un-mounted');
    };
  }, [raceStarted]);

  const handleGoButtonClick = () => {
    setRaceStarted((prevState) => !prevState);
  };

  const handleAddDriver = (name : string) => {
    const newDriver: DriverData = {name, crossedFinishLine: false};
    setDrivers([...drivers, newDriver]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <h2>Race Scoreboard</h2>
      {showScoreboard ? (
        <>
          <button style={{ marginBottom: '20px' }} onClick={handleGoButtonClick}>{raceStarted ? 'STOP' : 'GO'}</button>
          {drivers.map((driver) => (
            <div key={driver.name} style={{ marginBottom: '20px' }}>
              <Driver key={driver.name} driverData={driver} raceStarted={raceStarted} />
            </div>
          ))}
          <button onClick={onHideScoreboard}>Hide Scoreboard</button>
          </>
      ) : (
        <button onClick={onHideScoreboard}>Show Scoreboard</button>
      )}
      <AddDriverForm onAddDriver={handleAddDriver}></AddDriverForm>
    </div>
  );
};

export default Scoreboard;
