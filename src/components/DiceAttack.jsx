/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from "@react-three/fiber"
import { Model } from "../components/DiceAttack3D"
// import { OrbitControls } from "@react-three/drei"

function Dice({play}) {
  const [count, setCount] = useState(play);

  useEffect(() => {
    setCount(play);
  },[play]);

  return (
    <div className="App">
      <Canvas camera={{ fov: 30, position: [10.45, 0, 0] }} style={{width:'80px', height:'130px'}}>
        <ambientLight intensity={5} />
        {/* <OrbitControls enableZoom={true} /> */}
        <Model play={count} />
      </Canvas>
    </div>
  )
}

Dice.propTypes = {
  play: PropTypes.bool.isRequired,
}

export default Dice
