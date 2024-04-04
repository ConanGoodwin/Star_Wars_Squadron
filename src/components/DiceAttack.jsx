/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from "@react-three/fiber"
import { Model } from "../components/DiceAttack3D"
// import { OrbitControls } from "@react-three/drei"

function Dice({play, time}) {
  const [count, setCount] = useState(play);
  const [timeCount, setTimeCount] = useState(time);

  useEffect(() => {
    setCount(play);
  },[play]);

  useEffect(() => {
    setTimeCount(time);
  },[time]);

  return (
    <div className="App">
      <Canvas camera={{ fov: 30, position: [10.45, 0, 0] }} style={{width:'80px', height:'130px'}}>
        <ambientLight intensity={5} />
        {/* <OrbitControls enableZoom={true} /> */}
        <Model play={count} time={timeCount}/>
      </Canvas>
    </div>
  )
}

Dice.propTypes = {
  play: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
}

export default Dice
