// import React from 'react'
// import PropTypes from 'prop-types'
import {PilotCard, PilotShield, TxtArea} from '../components'
import { PilotDetailStyle } from './css'
import { AtiradorImg, BombasImg, Droids, EliteImg, LukeSkywalker, MisseisImg, TorpedosImg, TorresImg } from '../assets'
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
      <section>
        <PilotShield 
          shieldValue={ pilot.shipShield + shieldExtra } 
          hullValue={ pilot.shipHull + hullExtra }
          changeLifeChip={changeLifeChip}
        />
      </section>
      <section className={PilotDetailStyle.main_section}>
        <div className={PilotDetailStyle.flex_column}>
          <PilotCard image={LukeSkywalker} typeCard="pilot" />
          Ship Life: {lifeShip}
          <TxtArea />
          <TxtArea />
        </div>
        <div className={PilotDetailStyle}>
          <div className={PilotDetailStyle.flex_row}>
            <PilotCard image={Droids} typeCard="update" txtAltImg="droid" />
            <PilotCard image={TorresImg} />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <PilotCard image={EliteImg} />
            <PilotCard image={AtiradorImg} />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <PilotCard image={TorpedosImg} />
            <PilotCard image={MisseisImg} />
          </div>
        </div>
        <div>
          <div>
            <PilotCard image={null} txtAltImg="gabarito" />
            <PilotCard image={null} txtAltImg="gabarito" />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <div>
              <PilotCard image={BombasImg} />
            </div>
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
