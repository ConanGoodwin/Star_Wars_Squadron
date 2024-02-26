// import React from 'react'
import PropTypes from 'prop-types'

import { NoWepon } from "../assets/actions"
import { useEffect, useState } from 'react'
import { NoWeponIconStyle } from './css';

function NoWeponIcon({displayNowepon}) {
  const [nowepon, setNoWepon] = useState(displayNowepon);

  useEffect(() => {
    setNoWepon(displayNowepon);
  },[displayNowepon]);

  return (
    <img 
      src={NoWepon} 
      alt="" 
      className={(nowepon) ? NoWeponIconStyle.display_nowepon : NoWeponIconStyle.no_display_nowepon } 
    />
  )
}

NoWeponIcon.propTypes = {
  displayNowepon: PropTypes.bool,
}

export default NoWeponIcon
