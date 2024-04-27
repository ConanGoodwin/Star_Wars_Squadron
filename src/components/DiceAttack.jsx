/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from "@react-three/fiber"
import { Model } from "../components/DiceAttack3D"
import { Model as ModelDefense } from "../components/DiceDefense3D"
// import ModelDefense from "../components/DiceDefense3D"
// import { OrbitControls } from "@react-three/drei"

function Dice({play, time, zoom = 10.45, type}) {
  const [count, setCount] = useState(play);
  const [timeCount, setTimeCount] = useState(time);
  // console.log(type);
  // const [keyState, setKeyState] = useState(play);

  // useEffect(() => {
  //   setKeyState(play);
  // },[play]);

  useEffect(() => {
    setCount(play);
  },[play]);

  useEffect(() => {
    setTimeCount(time);
  },[time]);

  return (
    <div className="App">
      <Canvas camera={{ fov: 30, position: [zoom, 0, 0] }} style={{width:'80px', height:'130px'}}>
        <ambientLight intensity={5} />
        {/* <OrbitControls enableZoom={true} /> */}
        {
          type === 'defense' ? 
            <ModelDefense play={count} time={timeCount} type={type}/> :
            <Model play={count} time={timeCount} type={type}/>
        }
      </Canvas>
    </div>
  )
}

Dice.propTypes = {
  play: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  key: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

export default Dice
