import React, { useState, useEffect, useCallback } from 'react';

interface DriverProps {
  name: string;
  raceStarted: boolean;
}

const Driver: React.FC<DriverProps> = ({ name, raceStarted }) => {
  const [seconds, setSeconds] = useState(0);

  // Callback function to increment seconds
  const incrementSeconds = useCallback(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, []);

  // Format time function
  const formatTime = (seconds: number): string => {
    let s = 0;
    let m = 0;
    if (seconds > 60) {
      m = Math.floor(seconds / 60);
      s = seconds % 60;
    } else {
      s = seconds;
    }
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  };

  useEffect(() => {
    console.log('raceStarted has updated');
    let interval: NodeJS.Timeout | null = null;
    if (raceStarted) {
      interval = setInterval(incrementSeconds, 1000);
    }

    return () => {
      console.log('Driver.tsx cleanup function executed');
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [raceStarted, incrementSeconds]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <li>
        <b>{name}</b><br></br>
         {formatTime(seconds)}
      </li>
    </div>
  );
};

export default Driver;
