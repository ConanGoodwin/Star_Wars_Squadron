// import React from 'react'
import PropTypes from 'prop-types'
import PilotCard from './PilotCard'
import { CarrouselCardStyle } from './css'
import { useCallback, useEffect, useState } from 'react'

function CorrouselCards({update, extraSystem, allUpdates}) {
  const [atualUpdate, setAtualUpdate] = useState(update);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let extra = [];

  const choiceExtraSystem = useCallback(() => {
    if (extra) {
      for (let i = 0; i < extra.length; i++) {
        for (let j = 0; j < extra[i].length; j++) {
          if (Object.values(extra[i][j])[0] != "sem") {
            // console.log(Object.values(extra[i][j])[0]);
            return setAtualUpdate(extra[i][j]);
          }
        }
      }
      
      return setAtualUpdate(extra[0][0]);
    }
  },[extra]);


  useEffect(() => {
    const selectUpdate = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (extraSystem.length > 0) ? extra = [...extraSystem] : null

      if (update["torres"]) {
        if (update["torres"][0] === "sem") {
          (allUpdates[0]["droids"][0] === "sem") ? (
            (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
          ) : null;
          choiceExtraSystem();

          return true;
        } else { 
          setAtualUpdate(update);
        }
      } else { setAtualUpdate(update) }
  
      if (update["droids"]) {
        if (update["droids"][0] === "sem") {
          choiceExtraSystem();
        } else {setAtualUpdate(update)}
      } else {
        setAtualUpdate(update);
      }
    }
    selectUpdate();
  },[choiceExtraSystem, extraSystem, update])

  return (
    <div className={CarrouselCardStyle.font}>
      {
        Object.values(atualUpdate).map((cards, iCard) => (
          (isNaN(cards)) ?
          (
            <div key={iCard} className={CarrouselCardStyle.flex_row + ' ' + CarrouselCardStyle.update_cards}>
              {
                cards.map((card, i) => (
                  (i < atualUpdate["max"]) ?
                  <PilotCard key={i} image={card} typeCard="update" txtAltImg={Object.keys(atualUpdate)[0]} /> :
                  ""
                ))
              }
            </div>
          ) :
          ""
        ))
      }
      {Object.keys(atualUpdate)[0]}: {atualUpdate["max"]}
    </div>
  )
}

CorrouselCards.propTypes = {
  update: PropTypes.object.isRequired,
  extraSystem: PropTypes.object,
  qtExtra: PropTypes.number,
  allUpdates: PropTypes.array,
}

export default CorrouselCards
