// import React from 'react'
import PropTypes from 'prop-types';
import { 
  PilotDamegdShieldImg,
  PilotHullImg, 
  PilotNoHullImg, 
  PilotNoShieldImg, 
  PilotShieldImg } from '../assets';

function PilotShield({shieldValue, hullValue, changeLifeChip}) {
  const array = [1, 2, 3, 4, 5, 6];

  const ShildClick = ({target}) => {
    if (target.src === "http://localhost:5173/src/assets/status_dameged/damagedshield.png") {
      target.src = PilotShieldImg;
      // setLifeShip(lifeShip + 1);
      changeLifeChip(-1);
    } else if (target.src === "http://localhost:5173/src/assets/status_dameged/shield.png") {
      target.src = PilotDamegdShieldImg;
      // setLifeShip(lifeShip - 1);
      changeLifeChip(1);
    }
  };

  return (
    <div>
      {
        array.map((item, index) => (
          <section key={index}>
            <img 
              id={index}
              src={(index < shieldValue) ? PilotShieldImg : PilotNoShieldImg} 
              alt=""
              onClick={ShildClick}
            />
          </section>
        ))
      }
      {
        array.map((item, index) => (
          <section key={index} id={index}>
            <img
              id={index}
              src={(index < hullValue) ? PilotHullImg : PilotNoHullImg}
              alt=""
            />
          </section>
        ))
      }
    </div>
  )
}

PilotShield.propTypes = {
  shieldValue: PropTypes.number.isRequired,
  hullValue: PropTypes.number.isRequired,
  changeLifeChip: PropTypes.func.isRequired,
}

export default PilotShield