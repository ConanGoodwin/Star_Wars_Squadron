// import React from 'react'
// import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
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
  const [totalCost, setTotalCosy] = useState(
    pilot.pilotCost + 
    pilot.shipUpdates[0][0].cost + pilot.shipUpdates[0][1].cost +
    pilot.shipUpdates[1][0].cost + pilot.shipUpdates[1][1].cost +
    pilot.shipUpdates[2][0].cost + pilot.shipUpdates[2][1].cost +
    pilot.shipBombs.cost + pilot.shipModCost
  );

  const attPilotStats = useEffect(
    () => {
      setShieldShip(pilot.shipShield + pilot.shipShieldExtra);
      setHullShip(pilot.shipHull + pilot.shipHullExtra);
      setLifeShip(shieldShip + hullShip);
      setTotalCosy(
        pilot.pilotCost + 
        pilot.shipUpdates[0][0].cost + pilot.shipUpdates[0][1].cost +
        pilot.shipUpdates[1][0].cost + pilot.shipUpdates[1][1].cost +
        pilot.shipUpdates[2][0].cost + pilot.shipUpdates[2][1].cost +
        pilot.shipBombs.cost + pilot.shipModCost
      );
    },[hullShip, pilot.pilotCost, pilot.shipBombs.cost, pilot.shipHull, pilot.shipHullExtra, pilot.shipModCost, pilot.shipShield, pilot.shipShieldExtra, pilot.shipUpdates, shieldShip]
  )

  const changeLifeChip = (value) => {
    setLifeShip(lifeShip - value);
  };

  const navClickButton = ({target: { id }}) => {
    if (id === 'prev' && index > 0) {
      setPilot(pilots[index - 1]);
      setIndex(index - 1);
      attPilotStats();
    } else if (id === 'next' && index < pilots.length - 1) {
      setPilot(pilots[index + 1]);
      setIndex(index + 1);
      attPilotStats();
      setIndex(index + 1);
    }
  };

  return (
    <main className={PilotDetailStyle.main}>
      {/* COLUNA DE ESCUDOS */}
      <section>
        <PilotShield 
          shieldValue={ shieldShip } 
          hullValue={ hullShip } 
          changeLifeChip={changeLifeChip}
        />
      </section>

      <section className={PilotDetailStyle.main_section}>
         {/* COLUNA DE STATS PILOTO */}
        <div className={PilotDetailStyle.flex_column}>
          <PilotCard image={pilot.image} typeCard="pilot"  txtAltImg="pilot" />
          <div className={PilotDetailStyle.float_div}>
            {pilot.pilotAbility + pilot.pilotExtraAbility}
          </div>
          Ship Life: {lifeShip}
          <TxtArea texto={pilot.shipMod + '\n' + '\n' + 'custo do mod: ' + pilot.shipModCost}/>
          <TxtArea />
          <div style={{margin: '10px'}}>
            <button id='prev' onClick={navClickButton}>{"<"}</button>
            {"<...[" + index + "]...>"}
            <button id='next' onClick={navClickButton}>{">"}</button>
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
            {console.log(pilot.shipMove)}
            <Gabarito moveShip={pilot.shipMove} />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <CarrouselCard
              key={1}
              update={pilot.shipBombs}
            />
            <div>
              <div>
                target lock
              </div>
              <div>
                lockado
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// PilotDetail.propTypes = {}

export default PilotDetail
