// import React from 'react'
import PropTypes from 'prop-types'
import { CardStyle, PilotCardStyle } from './css'

function PilotCard({image, typeCard, txtAltImg}) {
  console.log(typeCard)
  return (
    <div>
      <img 
        // src="https://static.wikia.nocookie.net/xwing-miniaturas/images/8/8c/Luke-skywalker.png/revision/latest?cb=20160406205100&path-prefix=pt"
        src={image}
        className={
          ((typeCard === 'pilot') ? PilotCardStyle.pilot : PilotCardStyle.update) +
          ' ' + CardStyle.card_border + 
          ' ' + PilotCardStyle.display_flex
        }
        alt={txtAltImg}
      />
    </div>
  )
}

PilotCard.propTypes = {
  image: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  txtAltImg: PropTypes.string.isRequired,
}

export default PilotCard
