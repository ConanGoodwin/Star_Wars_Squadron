import { useState } from 'react'
// import PropTypes from 'prop-types'
import { DiceAttack } from '../components';
// import { OrbitControls } from "@react-three/drei"

function Dice() {
  const [count, setCount] = useState(true);
  // const [centerDice, setCenterDice] = useState(-1);

  return (
    <div>
      {/* <div className="App" style={{border:'1px solid black'}}> */}
      <div className="App">
        <DiceAttack play={count}/>
      </div>
      <div>
        <button onClick={() => setCount(!count)} style={{margin:'5px'}}>girar</button>
      </div>
    </div>
  )
}

// Dice.propTypes = {}

export default Dice
