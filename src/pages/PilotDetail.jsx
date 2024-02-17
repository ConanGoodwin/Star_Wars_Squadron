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
      [{droids: [Droids, Droids], max: 2 }, {torres: [TorresImg, TorresImg], max: 2}], 
      [{elite: [EliteImg, EliteImg], max: 2 }, {tripulação: [AtiradorImg, AtiradorImg], max: 2 }], 
      [{torpedos: [TorpedosImg, TorpedosImg], max: 2 }, {misseis: [MisseisImg, MisseisImg], max: 2 }]
    ],
    shipBombs: {bombas: [BombasImg, BombasImg, BombasImg, BombasImg, BombasImg], max: 5},
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
          Ship Life: {lifeShip}
          <TxtArea />
          <TxtArea />
        </div>

         {/* PRIMEIRA COLUNA DE UPDATE */}
        <div className={PilotDetailStyle}>
          {
            pilot.shipUpdates.map((updates, index) => (
              <div key={index} className={PilotDetailStyle.flex_row}>
                
                {
                  updates.map((update, iUpdate) => (
                    <div key={iUpdate} id="teste">
                      {
                        Object.values(update).map((cards,iCard) => {
                          return (
                            (isNaN(cards)) ?
                            (
                              <div key={iCard} className={PilotDetailStyle.flex_row + ' ' + PilotDetailStyle.update_cards}>
                                {
                                  cards.map((card, i) => (
                                      (i < update["max"]) ?
                                      <PilotCard key={i} image={card} typeCard="update" txtAltImg={Object.keys(update)[0]} /> :
                                      ""
                                    )
                                  )
                                }
                              </div>
                            ) :
                            ""
                          )
                        })
                      }
                      {Object.keys(update)[0]}: {update["max"]}
                    </div>
                  ))
                }
              </div>
            ))
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
                {
                  pilot.shipBombs.bombas.map((bomb, i) => (
                    (i < pilot.shipBombs.max) ?
                    <PilotCard key={i} image={bomb} typeCard="update" txtAltImg="bombas" /> :
                    ""
                  ))
                }
              </div>
              bombas: {pilot.shipBombs.max}
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
