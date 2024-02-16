// import React from 'react'
import PropTypes from 'prop-types'
import { CardStyle, PilotCardStyle } from './css'

function PilotCard({image}) {
  return (
    <div>
      <img 
        // src="https://static.wikia.nocookie.net/xwing-miniaturas/images/8/8c/Luke-skywalker.png/revision/latest?cb=20160406205100&path-prefix=pt"
        src={image}
        className={PilotCardStyle.container + ' ' + CardStyle.card_border}
      />
    </div>
  )
}

PilotCard.propTypes = {
  image: PropTypes.string.isRequired,
}

export default PilotCard
