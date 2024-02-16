// import React from 'react'
// import PropTypes from 'prop-types'
import {PilotCard, PilotShield, TxtArea} from '../components'
import { PilotDetailStyle } from './css'
import { LukeSkywalker } from '../assets'
import { useState } from 'react';

function PilotDetail() {
  const shieldExtra = 0;
  const hullExtra = 0;
  const pilot = {
    name: "Luke Skywalker",
    ship: "X-wing",
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 3,
    shipManeuver: 2,
    shipHull: 3,
  };
  const [lifeShip, setLifeShip] = useState(
    pilot.shipShield + shieldExtra + pilot.shipHull + hullExtra);

  const changeLifeChip = (value) => {
    setLifeShip(lifeShip - value);
  };

  return (
    <main className={PilotDetailStyle.main}>
      <section className={PilotDetailStyle.lateral_section}>
        <PilotShield 
          shieldValue={ pilot.shipShield + shieldExtra } 
          hullValue={ pilot.shipHull + hullExtra }
          changeLifeChip={changeLifeChip}
        />
      </section>
      <section className={PilotDetailStyle.main_section}>
        <div className={PilotDetailStyle.main_pilot_stats}>
          <PilotCard image={LukeSkywalker} />
          Ship Life: {lifeShip}
          <TxtArea />
          <TxtArea />
        </div>
      </section>
    </main>
  )
}

// PilotDetail.propTypes = {}

export default PilotDetail
