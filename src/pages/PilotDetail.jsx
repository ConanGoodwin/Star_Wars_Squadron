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
  const arrayUpdates = [
    [[Droids, "droids"], [TorresImg, "torres"]], 
    [[EliteImg, "elite"], [AtiradorImg, "tripulação"]], 
    [[TorpedosImg, "torpedos"], [MisseisImg, "misseis"]]
  ];
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
          {
            arrayUpdates.map((update, index) => {
                return (
                  <div className={PilotDetailStyle.flex_row} key={index}>
                    <div>
                      <div className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                        <PilotCard image={update[0][0]} typeCard="update" txtAltImg={update[0][1]} />
                        <PilotCard image={update[0][0]} typeCard="update" txtAltImg={update[0][1]} />
                      </div>
                      {update[0][1]}: 1/2
                    </div>
                    <div>
                      <div className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                        <PilotCard image={update[1][0]} typeCard="update" txtAltImg={update[1][1]} />
                        <PilotCard image={update[1][0]} typeCard="update" txtAltImg={update[1][1]} />
                      </div>
                      {update[1][1]}: 1/2
                    </div>
                  </div>
                )
              }
            )
          }
        </div>
        <div>
          <div>
            <PilotCard image={null} txtAltImg="gabarito" />
            <PilotCard image={null} txtAltImg="gabarito" />
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <div>
              <div className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                <PilotCard image={BombasImg} typeCard="update" txtAltImg="bombas" />
                <PilotCard image={BombasImg} typeCard="update" txtAltImg="bombas" />
              </div>
              1/2
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
