// import React from 'react'
import PropTypes from 'prop-types'
import { BattleRoll, Esquiva, Foco, Impulso, Slam } from "../assets/actions"
import TargetAtack from '../assets/target_atack.png';
import { ActionBarStyle } from "./css"
import { useEffect, useState } from 'react';

function ActionBar({actions, actionsActive, changeActionsActive}) {
  const [localActionsActive, setLocalActionsActive] = useState(actionsActive);

  useEffect(() => {
    setLocalActionsActive(actionsActive);
  }, [actionsActive]);

  const selectIconAction = (action, index) => {
    let src = "";

    switch (action) {
      case "foco":
        src = Foco;
        break;
      case "target":
        src = TargetAtack;
        break;
      case "esquiva":
        src = Esquiva;
        break;
      case "pirueta":
        src = BattleRoll;
        break;
      case "impulso":
        src = Impulso;
        break;
      case "slam":
        src = Slam;
        break;
      default:
        break;
    }

    return (
      <img 
        key={index}
        name={action}
        src={src} 
        alt="" 
        className={ActionBarStyle.image + " " + 
          ((localActionsActive[action]) ? ActionBarStyle.selected_action : ActionBarStyle.no_selected_action) } 
        onClick={selectAction} 
      />
    )
  }

  const selectAction = ({target}) => {
    if (target.className.includes(ActionBarStyle.no_selected_action)) {
      target.classList.remove(ActionBarStyle.no_selected_action);
      target.classList.add(ActionBarStyle.selected_action);
      changeActionsActive(1,target.name);
    } else {
      target.classList.add(ActionBarStyle.no_selected_action);
      target.classList.remove(ActionBarStyle.selected_action);
      changeActionsActive(0,target.name);
    }
    
  }

  return (
    <div className={ActionBarStyle.action_bar}>
      {
        actions.map((action, index) => selectIconAction(action, index))
      }
    </div>
  )
}

ActionBar.propTypes = {
  actions: PropTypes.array.isRequired,
  actionsActive: PropTypes.object.isRequired,
  changeActionsActive: PropTypes.func.isRequired,
}

export default ActionBar
