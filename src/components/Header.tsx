import React from 'react';

interface HeaderProps {
  raceTitle: string;
}

const Header: React.FC<HeaderProps> = ({ raceTitle }) => {
  return (
    <div>
      <h1>{raceTitle}</h1>
    </div>
  );
};

export default Header;
