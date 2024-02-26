// import React from 'react'
import PropTypes from 'prop-types'

import { IonIconImg, NoIonIcon } from "../assets/actions"
import { useEffect, useState } from 'react';
import { IonIconStyle } from './css';

function IonIcon({ionized, changeIonized}) {
  const [localIonized, setLocalIonized] = useState(ionized);

  useEffect(() => {
    setLocalIonized(ionized);
  }, [ionized]);

  return (
    <img 
      src={(localIonized) ? IonIconImg : NoIonIcon} 
      alt="" 
      onClick={changeIonized} 
      className={localIonized ? IonIconStyle.ionized : IonIconStyle.no_ionized}
    />
  )
}

IonIcon.propTypes = {
  ionized: PropTypes.bool,
  changeIonized: PropTypes.func,
}

export default IonIcon
