/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
// import React from 'react'
// import PropTypes from 'prop-types'

import { Canvas } from "@react-three/fiber"
import { Model } from "../components/Dice"
import { OrbitControls } from "@react-three/drei"

function Dice() {
  const [count, setCount] = useState(true);
  // const [centerDice, setCenterDice] = useState(-1);

  return (
    <div>
      {/* <div className="App" style={{border:'1px solid black'}}> */}
      <div className="App">
        <Canvas camera={{ fov: 30, position: [10.45, 0, 0] }} style={{width:'80px', height:'130px'}}>
          <ambientLight intensity={5} />
          {/* <OrbitControls enableZoom={true} /> */}
          <Model play={count} />
        </Canvas>
      </div>
      <div>
        <button onClick={() => setCount(!count)} style={{margin:'5px'}}>girar</button>
      </div>
    </div>
  )
}

// Dice.propTypes = {}

export default Dice
