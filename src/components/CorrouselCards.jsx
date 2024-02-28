// import React from 'react'
import PropTypes from 'prop-types'
import PilotCard from './PilotCard'
import { CarrouselCardStyle } from './css'
import { useCallback, useEffect, useState } from 'react'

function CorrouselCards({update, extraSystem}) {
  const [atualUpdate, setAtualUpdate] = useState(update);
  let extra = [];

  const choiceExtraSystem = useCallback(() => {
    // const extra = [...extraSystem];
    // (extra) ? console.log(extra) : null;

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
      // (update["droids"]) ? (
      //   (update["droids"][0] === "sem") ? choiceExtraSystem() : setAtualUpdate(update)
      // ) : setAtualUpdate(update);

      // (update["torres"]) ? (
      //   (update["torres"][0] === "sem") ? choiceExtraSystem() : setAtualUpdate(update)
      // ) : setAtualUpdate(update);
      // console.log(update);
      (extraSystem.length > 0) ? extra = [...extraSystem] : null

      if (update["torres"]) {
        if (update["torres"][0] === "sem") {
          (extra) ? extra[0] = extra[0].filter((_item, index) => index !== 0) : null;
          choiceExtraSystem();

          return true;
        } else { 
          setAtualUpdate(update);
        }
      } else { setAtualUpdate(update) }
  
      if (update["droids"]) {
        (update["droids"][0] === "sem") ? choiceExtraSystem() : setAtualUpdate(update)
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
}

export default CorrouselCards
