import { useEffect, useState } from 'react';
import TargetAtack from '../assets/target_atack.png';
import TargetDefense from '../assets/target_defense.png';
import {CarrouselCard, PilotCard, PilotShield, TxtArea} from '../components'
import { PilotDetailStyle } from './css'
import pilots from '../data/pilots';
import Gabarito from '../components/Gabarito';

function PilotDetail() {
  const [index, setIndex] = useState(0);
  const [pilot, setPilot] = useState(pilots[0]);
  const [shieldShip, setShieldShip] = useState(pilot.shipShield + pilot.shipShieldExtra);
  const [hullShip,setHullShip] = useState(pilot.shipHull + pilot.shipHullExtra);
  const [lifeShip, setLifeShip] = useState(shieldShip  + hullShip);
  const [ships] = useState([{damageShieldShip: 0, damageHullShips: 0}]);
  const [totalCost, setTotalCosy] = useState(
    pilot.pilotCost + 
    pilot.shipUpdates[0][0].cost + pilot.shipUpdates[0][1].cost +
    pilot.shipUpdates[1][0].cost + pilot.shipUpdates[1][1].cost +
    pilot.shipUpdates[2][0].cost + pilot.shipUpdates[2][1].cost +
    pilot.shipBombs.cost + pilot.shipModCost + pilot.shipCostTitle +
    pilot.shipAdvancedUpdates[0][0].cost + pilot.shipAdvancedUpdates[0][1].cost
  );

  useEffect(
    () => {
      const att = () => {
        for (let i = 0; i < pilots.length; i++) {
          ships.push({damageShieldShip: 0, damageHullShips: 0});
        }
      }
      att();
    },[ships])

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
        pilot.shipBombs.cost + pilot.shipModCost
      );
    },[hullShip, index, pilot.pilotCost, pilot.shipBombs.cost, pilot.shipHull, pilot.shipHullExtra, pilot.shipModCost, pilot.shipShield, pilot.shipShieldExtra, pilot.shipUpdates, shieldShip, ships]
  )

  const changeLifeChip = (value, type) => {
    setLifeShip(lifeShip - value);
    if (type === 'shield') {
      ships[index].damageShieldShip = ships[index].damageShieldShip + value;
    }
    
    if (type === 'hull') {
      ships[index].damageHullShips = ships[index].damageHullShips + value;
    }
  };

  const navClickButton = ({target: { id }, keyCode}) => {
    if ((id === 'prev' || keyCode === 37) && index > 0) {
      setPilot(pilots[index - 1]);
      setIndex(index - 1);
      attPilotStats();
    } else if ((id === 'next' || keyCode === 39) && index < pilots.length - 1) {
      setPilot(pilots[index + 1]);
      setIndex(index + 1);
      attPilotStats();
      setIndex(index + 1);
    }
  };

  const buildTargetDefense = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<img src={TargetDefense} alt="" className={PilotDetailStyle.targetImg} />);
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
          <div className={PilotDetailStyle.float_div}>
            {pilot.pilotAbility + pilot.pilotExtraAbility}
          </div>
          <span>Ship Life: {lifeShip}</span>
          <TxtArea texto={pilot.shipMod + '\n' + '\n' + 'custo do mod: ' + pilot.shipModCost}/>
          <TxtArea texto={pilot.shipTitle + '\n' + '\n' + 'custo do titulo: ' + pilot.shipCostTitle}/>
          <div className={PilotDetailStyle.div_functions}>
            <div>
              <button id='prev' onClick={navClickButton} onKeyDown={navClickButton} tabIndex="0">{"<"}</button>
              {"<...[" + index + "]...>"}
              <button id='next' onClick={navClickButton} onKeyDown={navClickButton} tabIndex="0">{">"}</button>
            </div>
            <div className={PilotDetailStyle.div_more_upgrade}>
              <button id='moreUpdtae' onClick={""} tabIndex="0" className={PilotDetailStyle.button_more_upgrade}>+</button>
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
                {
                  updates.map((update, iUpdate) => (
                    <CarrouselCard
                      key={iUpdate}
                      update={update}
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
              key={1}
              update={pilot.shipBombs}
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
    </main>
  )
}

export default PilotDetail
