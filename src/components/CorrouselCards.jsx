// import React from 'react'
import PropTypes from 'prop-types'
import PilotCard from './PilotCard'
import { CarrouselCardStyle } from './css'

function CorrouselCards({update}) {
  return (
    <div className={CarrouselCardStyle.font}>
      {
        Object.values(update).map((cards, iCard) => (
          (isNaN(cards)) ?
          (
            <div key={iCard} className={CarrouselCardStyle.flex_row + ' ' + CarrouselCardStyle.update_cards}>
              {
                cards.map((card, i) => (
                  (i < update["max"]) ?
                  <PilotCard key={i} image={card} typeCard="update" txtAltImg={Object.keys(update)[0]} /> :
                  ""
                ))
              }
            </div>
          ) :
          ""
        ))
      }
      {Object.keys(update)[0]}: {update["max"]}
    </div>
  )
}

CorrouselCards.propTypes = {
  update: PropTypes.object.isRequired,
}

export default CorrouselCards
