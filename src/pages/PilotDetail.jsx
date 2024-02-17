// import React from 'react'
// import PropTypes from 'prop-types'
import {PilotCard, PilotShield, TxtArea} from '../components'
import { PilotDetailStyle } from './css'
import { AtiradorImg, BombasImg, Droids, EliteImg, LukeSkywalker, MisseisImg, TorpedosImg, TorresImg } from '../assets'
import { useState } from 'react';

function PilotDetail() {
  const pilot = {
    name: "Luke Skywalker",
    ship: "X-wing",
    image: LukeSkywalker,
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 3,
    shipManeuver: 2,
    shipHull: 3,
    shipShieldExtra: 0,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipUpdates: [
      [{droids: [Droids, Droids] }, {torres: [TorresImg, TorresImg]}], 
      [{elite: [EliteImg, EliteImg]}, {tripulação: [AtiradorImg, AtiradorImg]}], 
      [{torpedos: [TorpedosImg, TorpedosImg]}, {misseis: [MisseisImg, MisseisImg]}]
    ]
  };
  // const arrayUpdates = [
  //   [[Droids, "droids"], [TorresImg, "torres"]], 
  //   [[EliteImg, "elite"], [AtiradorImg, "tripulação"]], 
  //   [[TorpedosImg, "torpedos"], [MisseisImg, "misseis"]]
  // ];
  const [shieldShip] = useState(pilot.shipShield + pilot.shipShieldExtra);
  const [hullShip] = useState(pilot.shipHull + pilot.shipHullExtra);
  const [lifeShip, setLifeShip] = useState(shieldShip  + hullShip);


  const changeLifeChip = (value) => {
    setLifeShip(lifeShip - value);
  };

  return (
    // COLUNA DE ESCUDOS
    <main className={PilotDetailStyle.main}>
      <section>
        <PilotShield 
          shieldValue={ shieldShip } 
          hullValue={ hullShip } 
          changeLifeChip={changeLifeChip}
        />
      </section>

      {/* PRIMEIRA COLUNA DE UPDATE */}
      <section className={PilotDetailStyle.main_section}>
        <div className={PilotDetailStyle.flex_column}>
          <PilotCard image={pilot.image} typeCard="pilot"  txtAltImg="pilot" />
          Ship Life: {lifeShip}
          <TxtArea />
          <TxtArea />
        </div>
        <div className={PilotDetailStyle}>
          {
            pilot.shipUpdates.map((updates, index) => {
                return (
                  <div key={index} className={PilotDetailStyle.flex_row}>
                    {
                      updates.map((update, iUpdate) => {
                          return (
                            <div key={iUpdate}>
                              {
                                Object.values(update).map((cards,iCard) => {
                                    return (
                                      <div key={iCard} className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                                        {
                                          cards.map((card, i) => (
                                              <PilotCard key={i} image={card} typeCard="update" txtAltImg={Object.keys(updates)[0]} />
                                            )
                                          )
                                        }
                                      </div>
                                    )
                                  }
                                )
                              }
                              {Object.keys(update)[0]}: 1/2
                            </div>
                          )
                        }
                      )
                    }
                  </div>
                )
              }
            )
          }
        </div>

        {/* SEGUNDA COLUNA DE UPDATE MAIS GABARITO MAIS TARGETS LOCK */}
        <div>
          <div style={{fontSize: 'small'}}>
            <PilotCard image={"sem"} typeCard="gabarito" txtAltImg="gabarito" />
            tt
            <PilotCard image={"sem"} typeCard="gabarito" txtAltImg="gabarito" />
            tt
          </div>
          <div className={PilotDetailStyle.flex_row}>
            <div>
              <div className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                <PilotCard image={BombasImg} typeCard="update" txtAltImg="bombas" />
                <PilotCard image={BombasImg} typeCard="update" txtAltImg="bombas" />
              </div>
              bombas: 1/2
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
