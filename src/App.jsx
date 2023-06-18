import { useEffect, useState } from 'react'
import desktopDivider from './images/pattern-divider-desktop.svg';
import mobileDivider from './images/pattern-divider-mobile.svg';
import iconDice from './images/icon-dice.svg';
import './App.css'
import axios from 'axios';

function App() {
  const[advice, setAdvice] = useState([]);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    await axios.get("https://api.adviceslip.com/advice")
    .then((data) => {
      setAdvice(data?.data.slip);
      console.log(data?.data.slip);
    })
  }

  const isMobile = window.innerWidth < 1440;
  const imageUrl = isMobile ? mobileDivider : desktopDivider;

  return (
    <>
      <div className='content-container'>
          <p className='title'>ADVICE #{advice.id}</p>
          <p className='quote'>"{advice.advice}"</p>
          <img src={imageUrl}/>
          <div className='button-container'>
            <img 
              src={iconDice} 
              onClick={getAdvice}
              className='new-advice'/>
          </div>
      </div>
      <div className="attribution">
       Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Mona Granerud</a>.
      </div>
    </>
  )
}

export default App
