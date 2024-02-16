// import React from 'react'
// import PropTypes from 'prop-types'
import {PilotCard, PilotShield} from '../components'
import { PilotDetailStyle } from './css'
import { LukeSkywalker } from '../assets'
import { useState } from 'react';

function PilotDetail() {
  const shieldExtra = 0;
  const [lifeShip, setLifeShip] = useState(3 + shieldExtra);

  const changeLifeChip = (value) => {
    setLifeShip(lifeShip - value);
  }

  return (
    <main className={PilotDetailStyle.main}>
      <section className={PilotDetailStyle.lateral_section}>
        <PilotShield shieldValue={ 3 + shieldExtra } changeLifeChip={changeLifeChip}/>
      </section>
      <section className={PilotDetailStyle.main_section}>
        <PilotCard image={LukeSkywalker} />
        {lifeShip}
      </section>
    </main>
  )
}

// PilotDetail.propTypes = {}

export default PilotDetail
