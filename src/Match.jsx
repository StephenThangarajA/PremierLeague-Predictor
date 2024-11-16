import React, { useState } from 'react';
import Stadium from './assets/ground.png';
import PremierLeague from './assets/premierleague.png';
import Arsenal from './assets/arsenal.png';
import AstonVilla from './assets/astonvilla.png';
import Bournemouth from './assets/bournemouth.png';
import Brentford from './assets/brentford.png';
import Brighton from './assets/brighton.png';
import Chelsea from './assets/chelsea.png';
import CrystalPalace from './assets/crystalpalace.png';
import Everton from './assets/everton.png';
import Fulham from './assets/fulham.png';
import IpswichTown from './assets/ipswichtown.png';
import Leicester from './assets/leicestercity.png';
import Liverpool from './assets/liverpool.png';
import ManchesterCity from './assets/mancity.png';
import ManchesterUnited from './assets/manutd.png';
import Newcastle from './assets/newcastle.png';
import NottinghamForest from './assets/nottinghamforest.png';
import Southampton from './assets/southampton.png';
import Tottenham from './assets/tottenham.png';
import WestHam from './assets/westham.png';
import Wolves from './assets/wolves.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Match.css'

const teamsData = [
  {
    name: 'Arsenal',
    logo: Arsenal,
    att: 83,
    mid: 85,
    def: 85,
    stars: 5,
  },
  {
    name: 'Aston Villa',
    logo: AstonVilla,
    att: 87,
    mid: 78,
    def: 80,
    stars: 4.5,
  },
  {
    name: 'Bournemouth',
    logo: Bournemouth,
    att: 78,
    mid: 76,
    def: 76,
    stars: 4,
  },
  {
    name: 'Brentford',
    logo: Brentford,
    att: 74,
    mid: 76,
    def: 75,
    stars: 4,
  },
  {
    name: 'Brighton',
    logo: Brighton,
    att: 76,
    mid: 77,
    def: 77,
    stars: 4,
  },
  {
    name: 'Chelsea',
    logo: Chelsea,
    att: 79,
    mid: 81,
    def: 80,
    stars: 4.5,
  },
  {
    name: 'Crystal Palace',
    logo: CrystalPalace,
    att: 78,
    mid: 78,
    def: 78,
    stars: 4,
  },
  {
    name: 'Everton',
    logo: Everton,
    att: 78,
    mid: 74,
    def: 75,
    stars: 4,
  },
  {
    name: 'Fulham',
    logo: Fulham,
    att: 75,
    mid: 76,
    def: 78,
    stars: 4,
  },
  {
    name: 'Ipswich Town',
    logo: IpswichTown,
    att: 69,
    mid: 73,
    def: 75,
    stars: 3.5,
  },
  {
    name: 'Leicester City',
    logo: Leicester,
    att: 78,
    mid: 76,
    def: 74,
    stars: 4,
  },
  {
    name: 'Liverpool',
    logo: Liverpool,
    att: 84,
    mid: 81,
    def: 84,
    stars: 5,
  },
  {
    name: 'Manchester City',
    logo: ManchesterCity,
    att: 85,
    mid: 88,
    def: 82,
    stars: 5,
  },
  {
    name: 'Manchester United',
    logo: ManchesterUnited,
    att: 77,
    mid: 81,
    def: 82,
    stars: 4.5,
  },
  {
    name: 'Newcastle United',
    logo: Newcastle,
    att: 80,
    mid: 81,
    def: 78,
    stars: 4.5,
  },
  {
    name: 'Nottingham Forest',
    logo: NottinghamForest,
    att: 74,
    mid: 76,
    def: 78,
    stars: 4,
  },
  {
    name: 'Southampton',
    logo: Southampton,
    att: 72,
    mid: 74,
    def: 73,
    stars: 3.5,
  },
  {
    name: 'Tottenham',
    logo: Tottenham,
    att: 80,
    mid: 81,
    def: 82,
    stars: 4.5,
  },
  {
    name: 'West Ham',
    logo: WestHam,
    att: 79,
    mid: 81,
    def: 78,
    stars: 4.5,
  },
  {
    name: 'Wolves',
    logo: Wolves,
    att: 76,
    mid: 78,
    def: 75,
    stars: 4,
  },
];

function Match() {
  const [homeTeam, setHomeTeam] = useState(teamsData[0]);
  const [awayTeam, setAwayTeam] = useState(teamsData[1]);
  const [errorMessage, setErrorMessage] = useState('');
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [isPredictionMade, setIsPredictionMade] = useState(false);

  const handleTeamChange = (setTeam, direction, otherTeam) => {
    setTeam((prevTeam) => {
      let nextIndex = (teamsData.indexOf(prevTeam) + direction + teamsData.length) % teamsData.length;
      while (teamsData[nextIndex] === otherTeam) {
        nextIndex = (nextIndex + direction + teamsData.length) % teamsData.length;
      }
      return teamsData[nextIndex];
    });
    setErrorMessage('');
    setIsPredictionMade(false);
  };

  const handlePredictClick = () => {
    if (homeTeam === awayTeam) {
      setErrorMessage('Please choose different teams for home and away.');
    } else {
      setErrorMessage('');
      setHomeScore(Math.floor(Math.random() * 5));
      setAwayScore(Math.floor(Math.random() * 5));
      setIsPredictionMade(true);
    }
  };

  const styles = {
    container: {
      backgroundImage: `url(${Stadium})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    result: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: 'hsla(0, 0%, 0%, 0.7)',
      color: '#fff',
      borderRadius: '8px',
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '50%',
    },
    teamName: {
      margin: '0 10px',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      whiteSpace: 'nowrap'
    },
    scoreBox: {
      backgroundColor: 'hsla(0, 0%, 0%, 1.0)',
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: 'bold',
      textAlign:'center',
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div className="header">
          <img src={PremierLeague} alt="Premier League Logo" className='pl-logo'/>
          <h1>Premier League Game Predictor</h1>
        </div>
        <div className="team-selector">
          <div className="team">
            <h2>Home Team</h2>
            <hr />
            <h3 style={{paddingTop:'20px'}}>{homeTeam.name}</h3>
            <div className="team-logo">
              <FaChevronLeft onClick={() => handleTeamChange(setHomeTeam, -1)} className="arrow" />
              <img src={homeTeam.logo} alt={`${homeTeam.name} Logo`} />
              <FaChevronRight onClick={() => handleTeamChange(setHomeTeam, 1)} className="arrow" />
            </div>
            <div className="team-details">
              <p>ATT: {homeTeam.att}</p>
              <p>MID: {homeTeam.mid}</p>
              <p>DEF: {homeTeam.def}</p>
            </div>
            <div className="stars">
              {[...Array(Math.floor(homeTeam.stars))].map((_, i) => (<FaStar key={i} />))}
              {homeTeam.stars % 1 !== 0 && <FaStarHalfAlt />}
              {[...Array(5 - Math.ceil(homeTeam.stars))].map((_, i) => (<FaStar key={i} style={{ color: 'lightgray' }} />))}
            </div>
          </div>

          <div className="vs">VS</div>

          <div className="team">
            <h2>Away Team</h2>
            <hr />
            <h3 style={{paddingTop:'20px'}}>{awayTeam.name}</h3>
            <div className="team-logo">
              <FaChevronLeft onClick={() => handleTeamChange(setAwayTeam, -1)} className="arrow" />
              <img src={awayTeam.logo} alt={`${awayTeam.name} Logo`} />
              <FaChevronRight onClick={() => handleTeamChange(setAwayTeam, 1)} className="arrow" />
            </div>
            <div className="team-details">
              <p>ATT: {awayTeam.att}</p>
              <p>MID: {awayTeam.mid}</p>
              <p>DEF: {awayTeam.def}</p>
            </div>
            <div className="stars">
              {[...Array(Math.floor(awayTeam.stars))].map((_, i) => (<FaStar key={i} />))}
              {awayTeam.stars % 1 !== 0 && <FaStarHalfAlt />}
              {[...Array(5 - Math.ceil(awayTeam.stars))].map((_, i) => (<FaStar key={i} style={{ color: 'lightgray' }} />))}
            </div>

          </div>
        </div>
        {errorMessage && <p style={{color: 'red',fontFamily: "'Special Elite','Courier New',Courier,monospace"}}>{errorMessage}</p>}
        <button className="predict-button" onClick={handlePredictClick}>Predict Result</button>

        {isPredictionMade && <div className="result" style={styles.result}>
          <div className="home-team" style={styles.teamName}>
            <img src={homeTeam.logo} alt={`${homeTeam.name} Logo`} style={{ height: '32px'}} />
            <span>{homeTeam.name}</span>
          </div>
          <div className="score" style={styles.scoreBox}>
            {homeScore} - {awayScore}
          </div>
          <div className="away-team" style={styles.teamName}>
            <img src={awayTeam.logo} alt={`${awayTeam.name} Logo`} style={{ height: '32px'}} />
            <span>{awayTeam.name}</span>
          </div>
        </div>}

      </div>
    </>
  );
}

export default Match;