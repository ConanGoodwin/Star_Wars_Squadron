/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
// import React from 'react'
// import PropTypes from 'prop-types'

import { Canvas } from "@react-three/fiber"
import { Model } from "../components/Dice"
import { OrbitControls } from "@react-three/drei"

function Dice() {
  const [count, setCount] = useState(false);

  return (
    <div>
      <div className="App">
        <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
          <ambientLight intensity={5} />
          <OrbitControls enableZoom={true} />
          <Model play={count} />
        </Canvas>
      </div>
      <div>
        <button onClick={() => setCount(!count)}>girar</button>
      </div>
    </div>
  )
}

// Dice.propTypes = {}

export default Dice
