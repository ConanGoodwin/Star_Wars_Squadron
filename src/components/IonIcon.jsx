// import React from 'react'
import PropTypes from 'prop-types'

import { IonIconImg, NoIonIcon } from "../assets/actions"
import { useEffect, useState } from 'react';
import { IonIconStyle } from './css';

function IonIcon({ionized, qtIon = 0, changeIonized, changeQtIon}) {
  const [localIonized, setLocalIonized] = useState(ionized);
  const [qtIonized, setQtIonized] = useState(qtIon);

  useEffect(() => {
    setLocalIonized(ionized);
  }, [ionized]);

  useEffect(() => {
    setQtIonized(qtIon);
  }, [qtIon]);

  return (
    <div>
      <div>
        <img 
          src={(localIonized) ? IonIconImg : NoIonIcon} 
          alt="" 
          onClick={changeIonized} 
          className={localIonized ? IonIconStyle.ionized : IonIconStyle.no_ionized}
        />
      </div>
      <div className={IonIconStyle.div_qtIon}>
        <button disabled={!localIonized} className={IonIconStyle.button} onClick={() => changeQtIon("-")}>{"<"}</button>
        <input disabled={true} type="text" name="" id="" value={qtIonized} className={IonIconStyle.input}/>
        <button disabled={!localIonized} className={IonIconStyle.button} onClick={() => changeQtIon("+")}>{">"}</button>
      </div>
    </div>
  )
}

IonIcon.propTypes = {
  ionized: PropTypes.bool,
  qtIon: PropTypes.number,
  changeIonized: PropTypes.func,
  changeQtIon: PropTypes.func,
}

export default IonIcon
