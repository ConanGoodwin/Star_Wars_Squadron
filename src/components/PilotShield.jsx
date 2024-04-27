// import React from 'react'
import PropTypes from 'prop-types';
import { 
  PilotCriticalDamagedHull,
  PilotDamegdShieldImg,
  PilotHullImg, 
  PilotNoHullImg, 
  PilotNoShieldImg, 
  PilotShieldImg, 
  PilotSimpleDamagedHull,
} from '../assets/status_dameged';
import { useEffect, useState } from 'react';
import { PilotShieldStyle } from './css';

function PilotShield({shieldValue, hullValue, changeLifeChip, damageShieldShip, damageHullShip, indexPilot, qtPilot}) {
  const [qtShield, setQtShield] = useState([1, 2, 3, 4, 5, 6]);
  const [qtHull, setQtHull] = useState([1, 2, 3, 4, 5, 6]);
  const [typeDamageHull,setTypeDamageHull] = useState([[0,0,0,0,0,0]]);

  // useEffect(() => {
  //   for (let i = 0; i < qtPilot; i++) {
  //     typeDamageHull.push([0, 0, 0, 0, 0, 0]);
  //   }
  // },[qtPilot, typeDamageHull]);

  // useEffect(() => {
  //     if (qtShield.length < shieldValue) {
  //       for (let i = 0; i < shieldValue - qtShield.length; i++) {
  //         qtShield.push(qtShield.length + 1);
  //       }
  //     } else {
  //       setQtShield([1, 2, 3, 4, 5, 6]);
  //     }

  //     if (qtHull.length < hullValue) {
  //       for (let i = 0; i < hullValue - qtHull.length; i++) {
  //         qtHull.push(qtHull.length + 1);
  //       }
  //     } else {
  //       setQtHull([1, 2, 3, 4, 5, 6]);
  //     }
  //   },
  //   [hullValue, qtHull, qtShield, shieldValue]);


  const ShildClick = ({target: { name, id, src}}) => {
    if (!src.includes('noshield.png') && !src.includes('nohull.png')) {
      // console.log(src);
      if (src.includes("damagedshield.png")) {
        src = PilotShieldImg;
        changeLifeChip(-1, name);

        return true;
      }

      if (parseInt(id) === damageShieldShip) {
        if (src.includes("tshield.png")) {
          src = PilotDamegdShieldImg;
          changeLifeChip(1, name);
  
          return true;
        }
      }
      
      if (damageShieldShip === shieldValue) {
        if (src.includes("simpledamagehull.png")) {
          src = PilotCriticalDamagedHull;
          setTypeDamageHull(typeDamageHull.map(
            (pilot, iPilot) => (
              (iPilot === indexPilot) ? 
              (pilot.map((item, index) => (index === parseInt(id) - qtShield.length) ? 2 : item)) : 
              pilot
            )
          ));

          return true;
        }
        
        if (src.includes("criticaldamagehull.png")) {
          src = PilotHullImg;
          changeLifeChip(-1, name);
          setTypeDamageHull(typeDamageHull.map(
            (pilot, iPilot) => (
              (iPilot === indexPilot) ? 
              (pilot.map((item, index) => (index === parseInt(id) - qtShield.length) ? 0 : item)) : 
              pilot
            )
          ));

          return true;
        }
        
        if (parseInt(id) - qtShield.length === damageHullShip) {
          if (src.includes("hull.png")) {
            src = PilotSimpleDamagedHull;
            changeLifeChip(1, name);
            setTypeDamageHull(typeDamageHull.map(
              (pilot, iPilot) => (
                (iPilot === indexPilot) ? 
                (pilot.map((item, index) => (index === parseInt(id) - qtShield.length) ? 1 : item)) : 
                pilot
              )
            ));
            // console.log(typeDamageHull);
  
            return true;
          }
        }
      }

      return false;
    }

    return false;
  };

  const mouseOver = ({target: { name, id}}) => {
    if (name === 'shield') {
      if (id <= damageShieldShip) {
        document.getElementById(id).style.cursor = 'default';
      } else {
        document.getElementById(id).style.cursor = 'not-allowed';
      }

      return true;
    }

    if (name === 'hull') {
      // console.log(`id: ${id}`);
      // console.log(`damage hull: ${damageHullShip}`);
      // console.log(`damage shield: ${damageShieldShip}`);
      if (id <= damageHullShip + qtShield.length && damageShieldShip >= shieldValue) {
        document.getElementById(id).style.cursor = 'default';
      } else {
        document.getElementById(id).style.cursor = 'not-allowed';
      }

      return true;
    }

    return false;
  }

  return (
    <div className={PilotShieldStyle.area}>
      {/* <div> */}
        {
          qtShield.map((item, index) => (
            <section key={index}>
              <img 
                id={index}
                name="shield"
                src={
                  (index < shieldValue) ? 
                  (
                    (index < damageShieldShip) ? PilotDamegdShieldImg : PilotShieldImg
                  ) : PilotNoShieldImg
                } 
                alt=""
                onClick={ShildClick}
                onMouseOver={mouseOver}
              />
            </section>
          ))
        }
      {/* </div> */}
      {/* <div> */}
        {
          qtHull.map((item, index) => (
            <section key={index + qtShield.length}>
              <img
                id={index + qtShield.length}
                name="hull"
                src={
                  (index < hullValue) ? 
                  (
                    (index < damageHullShip) ? 
                    (
                      (typeDamageHull[indexPilot][index] === 1) ? PilotSimpleDamagedHull : PilotCriticalDamagedHull
                    ) : PilotHullImg
                  ) : PilotNoHullImg
                }
                alt=""
                onClick={ShildClick}
                onMouseOver={mouseOver}
              />
            </section>
          ))
        }
      {/* </div> */}
    </div>
  )
}

PilotShield.propTypes = {
  shieldValue: PropTypes.number.isRequired,
  hullValue: PropTypes.number.isRequired,
  changeLifeChip: PropTypes.func.isRequired,
  damageShieldShip: PropTypes.number,
  damageHullShip: PropTypes.number,
  indexPilot: PropTypes.number.isRequired,
  qtPilot: PropTypes.number.isRequired,
}

export default PilotShield