// import React from 'react'
import PropTypes from 'prop-types'
import PilotCard from './PilotCard'
import { CarrouselCardStyle } from './css'
import { useCallback, useEffect, useState } from 'react'

function CorrouselCards({update, extraSystem, changeQtExtra, qtExtra}) {
  const [atualUpdate, setAtualUpdate] = useState(update);
  const [atualExtraSystem, setAtualExtraSystem] = useState(extraSystem);
  const [qtExtraUpdate, setQtExtraUpdate] = useState(qtExtra);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let extra = [];
  // let indexExtra = 0;

  useEffect(() => {
    setQtExtraUpdate(qtExtra);
  }, [qtExtra]);

  useEffect(() => {
    setAtualExtraSystem(extraSystem);
  }, [extraSystem]);

  useEffect(() => {
    setAtualUpdate(update);
  }, [update]);

  const choiceExtraSystem = useCallback(() => {
    if (extra) {
      for (let i = 0; i < extra.length; i++) {
        for (let j = 0; j < extra[i].length; j++) {
          if (Object.values(extra[i][j])[0] != "sem") {
            // console.log(extra[i][j]);
            // console.log("-------------------------------------");
            setAtualUpdate(extra[i][j]);
            return true;
          }
        }
      }
      // console.log(extra[0][0]);
      setAtualUpdate(extra[0][0]);
      
      return true;
    }
  },[extra]);


  useEffect(() => {
    const selectUpdate = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (atualExtraSystem.length > 0) ? extra = [...atualExtraSystem] : extra = []
      

      // if (update["elite"]) {
      //   if (update["elite"][0] === "sem") {
      //     console.log([...extraSystem])
      //     if (qtExtraUpdate > 2) {
      //       indexExtra += 1;
      //       (extra) ? extra[1] = extra[1].filter((_item, index) => index > 0) : null
      //     }
      //     choiceExtraSystem();
      //     // changeQtExtra(1);

      //     return true;
      //   }
      // } else { setAtualUpdate(update) }


      console.log(update);
      console.log(extra);

      switch (Object.keys(update)[0]) {
        case "droids":
          if (update["droids"][0] === "sem") {
            // console.log("-------------------------------------");
            console.log(`qt droid: ${qtExtraUpdate}`);
            choiceExtraSystem();
            if (qtExtraUpdate === 0) await changeQtExtra(1);
          } else {
            setAtualUpdate(update);
          }
          break
        
        case "torres":
          if (update["torres"][0] === "sem") {
            // console.log(atualExtraSystem);
            console.log(`qt torre: ${qtExtraUpdate}`);
            if (qtExtraUpdate > 0) {
              (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
            }
            choiceExtraSystem();
            await changeQtExtra(2);
          } else {
            setAtualUpdate(update);
          }
          break
        case "elite":
          if (update["elite"][0] === "sem") {
            // console.log(atualExtraSystem);
            console.log(`qt elite: ${qtExtraUpdate}`);
            if (qtExtraUpdate === 1) {
              (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
            }
            if (qtExtraUpdate === 2) {
              (extra) ? extra = extra.filter((_item, index) => index > 0) : null
            }
            console.log(extra);
            choiceExtraSystem();
            await changeQtExtra(3);
          } else {
            setAtualUpdate(update);
          }
          break
      
        default:
          setAtualUpdate(update);
          break;
      }

      console.log("-------------------------------------");

      // switch (qtExtraUpdate) {
      //   case 1:
      //     (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
      //     break;
      
      //   default:
      //     break;
      // }

      // switch (qtExtraUpdate) {
      //   case 0:
      //     console.log(update);
      //     // console.log(atualExtraSystem);
      //     console.log(extra);
      //     console.log("-------------------------------------");
      //     if (update["droids"]) {
      //       if (update["droids"][0] === "sem") {
      //         console.log("-------------------------------------");
      //         choiceExtraSystem();
      //         changeQtExtra(1);
      //       } else {
      //         setAtualUpdate(update);
      //       }
      //       return true;
      //     } else {
      //       setAtualUpdate(update);
      //       return false;
      //     }
      //     // break;
      //   case 1:
      //     console.log("1");
      //     return false;
      
      //   default:
      //     return setAtualUpdate(update);
      //     // break;
      // }



      // console.log(`qt: ${qtExtraUpdate}`);
      // console.log("-------------------------------------");

      // if (update["torres"]) {
      //   if (update["torres"][0] === "sem") {
      //     if (qtExtraUpdate > 0) {
      //       (extra) ? extra[0] = extra[0].filter((_item, index) => index > 0) : null
      //     }
      //     choiceExtraSystem();
      //     // changeQtExtra(1);

      //     return true;
      //   }
      // } else { setAtualUpdate(update) }
  
      // if (update["droids"]) {
      //   if (update["droids"][0] === "sem") {
      //     changeQtExtra(1);
      //     choiceExtraSystem();
      //   } else {setAtualUpdate(update)}
      // } else {
      //   setAtualUpdate(update);
      // }
    }
    selectUpdate();
  },[choiceExtraSystem, extra, qtExtraUpdate, update])

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
  extraSystem: PropTypes.array, 
  changeQtExtra: PropTypes.func,
  qtExtra: PropTypes.number,
}

export default CorrouselCards
