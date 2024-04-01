import { useEffect, useState } from 'react';
import TargetAtack from '../assets/target_atack.png';
import TargetDefense from '../assets/target_defense.png';
import {CarrouselCard, PilotCard, PilotShield, TxtArea} from '../components'
import { PilotDetailStyle } from './css'
import pilots from '../data/pilots';
import Gabarito from '../components/Gabarito';
import ActionBar from '../components/ActionBar';
import StressIcon from '../components/StressIcon';
import NoWeponIcon from '../components/NoWeponIcon';
import IonIcon from '../components/IonIcon';
import { ClearAll } from '../assets/actions';
import Dice from './Dice';

function PilotDetail() {
  const [oneShot, setOneShot] = useState(false);
  const [key, setKey] = useState(false);
  const [index, setIndex] = useState(0);
  const [pilot, setPilot] = useState(pilots[0]);
  const [shieldShip, setShieldShip] = useState(pilot.shipShield + pilot.shipShieldExtra);
  const [hullShip,setHullShip] = useState(pilot.shipHull + pilot.shipHullExtra);
  const [lifeShip, setLifeShip] = useState(shieldShip  + hullShip);
  const [actionsActive] = useState(
    pilot.shipActions.reduce((obj,chave) => {
      obj[chave] = 0;
      return obj;
    },{})
  );
  const [ships] = useState([{
    damageShieldShip: 0, damageHullShips: 0, ionized: false,
    qtIon: 0, qtExtra: 0, stress: 0, noWepon: false, actionsActive}]);
  const [totalCost, setTotalCosy] = useState(
    pilot.pilotCost + 
    pilot.shipUpdates[0][0].cost + pilot.shipUpdates[0][1].cost +
    pilot.shipUpdates[1][0].cost + pilot.shipUpdates[1][1].cost +
    pilot.shipUpdates[2][0].cost + pilot.shipUpdates[2][1].cost +
    pilot.shipBombs.cost + pilot.shipModCost + pilot.shipCostTitle +
    pilot.shipAdvancedUpdates[0][0].cost + pilot.shipAdvancedUpdates[0][1].cost
  );
  // const [qtExtra, setQtExtra] = useState(ships[index].qtExtra);
  const [qtExtra, setQtExtra] = useState(0);
  // const [value,setValue] = useState(0);

  useEffect(
    () => {
      const att = () => {
        for (let i = 0; i < pilots.length; i++) {
          ships.push({
            damageShieldShip: 0, 
            damageHullShips: 0, 
            ionized: false,
            qtIon: 0,
            qtExtra: 0,
            stress: 0,
            noWepon: false,
            actionsActive: pilot.shipActions.reduce((obj,chave) => {
              obj[chave] = 0;
              return obj;
            },{})
          });
        }
        setOneShot(true);
      }
      if (!oneShot) att();
    },[oneShot, pilot.shipActions, ships]
  );

  useEffect(
    () => {
      setPilot(pilots[index]);
    },[index]);

  const attPilotStats = useEffect(
    () => {
      setShieldShip(pilot.shipShield + pilot.shipShieldExtra);
      setHullShip(pilot.shipHull + pilot.shipHullExtra);
      setLifeShip(
        shieldShip + hullShip - 
        (ships[index].damageShieldShip + ships[index].damageHullShips)
      );
      setTotalCosy(
        pilot.pilotCost + 
        pilot.shipUpdates[0][0].cost + pilot.shipUpdates[0][1].cost +
        pilot.shipUpdates[1][0].cost + pilot.shipUpdates[1][1].cost +
        pilot.shipUpdates[2][0].cost + pilot.shipUpdates[2][1].cost +
        pilot.shipBombs.cost + pilot.shipModCost + pilot.shipCostTitle +
        pilot.shipAdvancedUpdates[0][0].cost + pilot.shipAdvancedUpdates[0][1].cost
      );
      ships[index].actionsActive = (
        pilot.shipActions.reduce((obj,chave) => {
          (ships[index].actionsActive[chave] === undefined) ? obj[chave] = 0 : obj[chave] = ships[index].actionsActive[chave];
          return obj;
        },{})
      );
      // setQtExtra(ships[index + 1].qtExtra);
      setQtExtra(0);
    },[hullShip, index, pilot.pilotCost, pilot.shipActions, pilot.shipAdvancedUpdates, pilot.shipBombs.cost, pilot.shipCostTitle, pilot.shipHull, pilot.shipHullExtra, pilot.shipModCost, pilot.shipShield, pilot.shipShieldExtra, pilot.shipUpdates, shieldShip, ships]
  )

// const attQtExtra = useEffect(
//   () => {
//     setQtExtra(value);
//   }
//   ,[value]);

  const changeLifeChip = (value, type) => {
    setLifeShip(lifeShip - value);
    if (type === 'shield') {
      ships[index].damageShieldShip = ships[index].damageShieldShip + value;
    }
    
    if (type === 'hull') {
      ships[index].damageHullShips = ships[index].damageHullShips + value;
    }
  };

  const changeActionsActive = (value, type) => {
    ships[index].actionsActive[type] = value;
    if (type === 'slam') {
      (value == 1) ? ships[index].noWepon = true : ships[index].noWepon = false
    }
    setKey(!key);
  };

  const changeStress = () => {
    (ships[index].stress === 0) ? ships[index].stress = 1 : ships[index].stress = 0;
    setKey(!key);
  };

  const changeIonized = () => {
    ships[index].ionized = !ships[index].ionized;
    ships[index].ionized ? changeQtIon("+") : ships[index].qtIon = 0;
    setKey(!key);
  };

  const changeQtIon = (operator) => {
    (operator === '+') ? ships[index].qtIon = ships[index].qtIon + 1 : (ships[index].qtIon > 0) ? ships[index].qtIon = ships[index].qtIon - 1 : null;
    (ships[index].qtIon === 0) ? ships[index].ionized = false : null;
    setKey(!key);
  }

  const changeQtExtra = (qt) => {
    // ships[index + 1].qtExtra = value;
    // setValue(qt);
    // attQtExtra
    setQtExtra(qt);
    console.log(qt);
    
    // setKey(false);
    console.log(qtExtra);
    // console.log(ships[index].qtExtra);
    // setKey(!key);
  }

  const clearAllActions = () => {
    console.log('oi');
    for (let i = 0; i < pilots.length; i++) {
      ships[i].noWepon = false;
      ships[i].actionsActive = pilot.shipActions.reduce((obj,chave) => {
          obj[chave] = 0;
          return obj;
        },{});
    }
    setKey(!key)
  };

  const navClickButton = ({target: { id }, keyCode}) => {
    ships[index].qtExtra = 0;
    if ((id === 'prev' || keyCode === 37) && index > 0) {
      setPilot(pilots[index - 1]);
      setIndex(index - 1);
      attPilotStats;
      // setIndex(index - 1);
    } else if ((id === 'next' || keyCode === 39) && index < pilots.length - 1) {
      setPilot(pilots[index + 1]);
      setIndex(index + 1);
      attPilotStats;
      // setIndex(index + 1);
    }
  };

  const buildTargetDefense = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<img src={TargetDefense} alt="" className={PilotDetailStyle.targetImg} key={5000 * i}/>);
    }

    return rows;
  }

  return (
    <main className={PilotDetailStyle.main} onKeyDown={navClickButton}>
      {/* COLUNA DE ESCUDOS */}
      <section>
        <PilotShield 
          shieldValue={ shieldShip } 
          hullValue={ hullShip } 
          changeLifeChip={changeLifeChip}
          damageShieldShip={ships[index].damageShieldShip}
          damageHullShip={ships[index].damageHullShips}
          indexPilot={index}
          qtPilot={pilots.length}
        />
      </section>

      <section className={PilotDetailStyle.main_section}>
         {/* COLUNA DE STATS PILOTO */}
        <div className={PilotDetailStyle.flex_column}>
          <PilotCard image={pilot.image} typeCard="pilot"  txtAltImg="pilot" />
          <div className={PilotDetailStyle.float_div + " " + PilotDetailStyle.position_level_div}>
            {pilot.pilotAbility + pilot.pilotExtraAbility}
          </div>
          <div className={PilotDetailStyle.float_div + " " + PilotDetailStyle.position_ion_div}>
            <IonIcon 
              ionized={ships[index].ionized} 
              changeIonized={changeIonized} 
              changeQtIon={changeQtIon}
              qtIon={ships[index].qtIon} 
            />
          </div>
          <div className={PilotDetailStyle.float_div + " " + PilotDetailStyle.position_stress_div}>
            <StressIcon changeStress={changeStress} type={ships[index].stress} key={key} />
          </div>
          <div className={PilotDetailStyle.float_div + " " + PilotDetailStyle.position_nowepon_div}>
            <NoWeponIcon displayNowepon={ships[index].noWepon} key={key} />
          </div>
          <ActionBar 
            actions={pilot.shipActions} 
            actionsActive={ships[index].actionsActive}
            changeActionsActive={changeActionsActive}
          />
          <span>Ship Life: {lifeShip}</span>
          <TxtArea texto={pilot.shipMod + '\n' + '\n' + 'custo do mod: ' + pilot.shipModCost}/>
          <TxtArea texto={pilot.shipTitle + '\n' + '\n' + 'custo do titulo: ' + pilot.shipCostTitle}/>
          <div className={PilotDetailStyle.div_functions}>
            <div className={PilotDetailStyle.div_clear_action}>
              <button id='clear' onClick={clearAllActions} className={PilotDetailStyle.button_clear_all_actions}>
                <img src={ClearAll} onClick={clearAllActions} role='button' alt="" />
              </button>
              <span style={{textAlign: 'center'}}>clear all actions</span>
            </div>
            <div>
              <button id='prev' onClick={navClickButton} onKeyDown={navClickButton} tabIndex="0">{"<"}</button>
              {"<.[" + (index + 1) + "].>"}
              <button id='next' onClick={navClickButton} onKeyDown={navClickButton} tabIndex="0">{">"}</button>
            </div>
            <div className={PilotDetailStyle.div_more_upgrade}>
              <button id='moreUpdtae' onClick={() => ""} className={PilotDetailStyle.button_more_upgrade}>+</button>
              more upgrades
            </div>
          </div>
          Total Points Used: {totalCost}
        </div>

        {/* PRIMEIRA COLUNA DE UPDATE */}
        <div className={PilotDetailStyle}>
          {
            pilot.shipUpdates.map((updates, index) => (
              <div key={index} className={PilotDetailStyle.flex_row}>
                {/* {ships[index] ? console.log(ships[index]) : null} */}
                {/* {console.log(`up: ${JSON.stringify(pilot.shipAdvancedUpdates)}`)} */}
                {
                  updates.map((update, iUpdate) => (
                    <CarrouselCard
                      stteste={"caralho de asa"} 
                      key={iUpdate} 
                      update={update} 
                      extraSystem={pilot.shipAdvancedUpdates} 
                      changeQtExtra={async (value) => changeQtExtra(value)} 
                      qtExtra={ qtExtra }
                      st={key}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>

        {/* SEGUNDA COLUNA DE UPDATE MAIS GABARITO MAIS TARGETS LOCK */}
        <div>
          <div style={{fontSize: 'small'}}>
            <Gabarito moveShip={pilot.shipMove} />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <CarrouselCard
              // key={1}
              update={pilot.shipBombs}
              extraSystem={pilot.shipAdvancedUpdates[0][0]}
              changeQtExtra={changeQtExtra}
              stteste={"teste"}
            />
            <div>
              <div className={PilotDetailStyle.target} >
                <img src={TargetAtack} alt="" className={PilotDetailStyle.targetImg} />
                <div>
                  Tipo de nave:
                  <input type="text" name="" id="" className={PilotDetailStyle.txtInfoTarget} />
                </div>
                {"<>"}
                <div>
                  Level:
                  <input type="text" name="" id="" className={PilotDetailStyle.txtLevelTarget} />
                </div>
                {"<>"}
                <div>
                  Nome do Piloto:
                  <input type="text" name="" id="" className={PilotDetailStyle.txtInfoTarget} />
                </div>
              </div>
              <div>
                {
                  buildTargetDefense()
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{display:'flex', flexDirection:'column', position:'absolute', top: '100px', left: '775px'}}>
        <div style={{display:'flex'}}>
          <Dice/>
          <Dice/>
          <Dice/>
        </div>
        <div style={{display:'flex'}}>
          <Dice/>
          <Dice/>
          <Dice/>
        </div>
      </div>
    </main>
  )
}

export default PilotDetail
