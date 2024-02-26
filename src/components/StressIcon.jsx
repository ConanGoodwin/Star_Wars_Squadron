import { useState } from 'react'
// import React from 'react'
import PropTypes from 'prop-types'
import { NoStress, Stress } from '../assets/actions'
import { useEffect } from 'react'

function StressIcon({changeStress, type}) {
  const [localType, setLocalType] = useState(type);

  useEffect(() => {
    setLocalType(type);
  },[type]);

  return (
    <img src={(localType === 0) ? NoStress : Stress} alt="" onClick={changeStress} />
  )
}

StressIcon.propTypes = {
  changeStress: PropTypes.func,
  type: PropTypes.number,
}

export default StressIcon
