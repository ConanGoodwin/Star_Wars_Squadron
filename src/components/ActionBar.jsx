// import React from 'react'
import PropTypes from 'prop-types'
import { Esquiva, Foco } from "../assets/actions"
import TargetAtack from '../assets/target_atack.png';
import { ActionBarStyle } from "./css"

function ActionBar({actions, actionsActive, changeActionsActive}) {
  const selectIconAction = (action) => {
    let src = "";
    // console.log(actionsActive);
    // console.log(`${action}: ${actionsActive[action]}`);

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
      default:
        break;
    }

    return (
      <img 
        name={action}
        src={src} 
        alt="" 
        className={ActionBarStyle.image + " " + 
          ((actionsActive[action]) ? ActionBarStyle.selected_action : ActionBarStyle.no_selected_action) } 
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
        actions.map((action) => selectIconAction(action))
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
