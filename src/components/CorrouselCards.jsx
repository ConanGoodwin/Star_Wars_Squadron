// import React from 'react'
import PropTypes from 'prop-types'
import PilotCard from './PilotCard'
import { CarrouselCardStyle } from './css'
import { useCallback, useEffect, useState } from 'react'

function CorrouselCards({update, extraSystem, changeQtExtra, qtExtra}) {
  const [atualUpdate, setAtualUpdate] = useState(update);
  const [qtExtraUpdate, setQtExtraUpdate] = useState(qtExtra);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let extra = [];

  useEffect(() => {
    setQtExtraUpdate(qtExtra);
  }, [qtExtra]);

  const choiceExtraSystem = useCallback(() => {
    if (extra) {
      for (let i = 0; i < extra.length; i++) {
        for (let j = 0; j < extra[i].length; j++) {
          if (Object.values(extra[i][j])[0] != "sem") {
            return setAtualUpdate(extra[i][j]);
          }
        }
      }
      
      return setAtualUpdate(extra[0][0]);
    }
  },[extra]);


  useEffect(() => {
    const selectUpdate = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (extraSystem.length > 0) ? extra = [...extraSystem] : null

      if (update["torres"]) {
        if (update["torres"][0] === "sem") {
          if (qtExtraUpdate > 0) {
            (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
          }
          choiceExtraSystem();
          changeQtExtra(1);

          return true;
        }
      } else { setAtualUpdate(update) }
  
      if (update["droids"]) {
        if (update["droids"][0] === "sem") {
          changeQtExtra(1);
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
  changeQtExtra: PropTypes.func,
  qtExtra: PropTypes.number,
}

export default CorrouselCards
