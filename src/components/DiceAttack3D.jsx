/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 dice.glb 
*/

import { useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import PropTypes from 'prop-types';
import useTimer from 'react-hook-time'

export function Model(props) {
  const group = useRef()
  const {play, time, type} = props;
  const [paused, setPaused] = useState(play);
  const [typeIcon, setTypeIcon] = useState((type === 'icon'));
  const { nodes, materials, animations } = useGLTF('../src/components/diceAttack.glb')
  const { actions } = useAnimations(animations, group);
  const [timer, setTimer] = useState(time);
  const { setTime, start, reset } = useTimer(3, {
    onEnd: () => {
      console.log('end');
      actions.DiceAction.paused = true;
      reset();
    },
  })

  useEffect(() => {
    setTimer(time);
  },[time]);

  useEffect(() => {
    setPaused(play);
  },[play]);

  const showTime = useCallback(async () => {
    start();
  }, [start]);

  useLayoutEffect(() => {
    if (typeIcon) {
      console.log('reset');
      actions.DiceAction.stop();
      actions.DiceAction.paused = true;
      setTypeIcon(false);
      // setPaused(true);
      // reset();
      return;
    }
    const go = async () => {
      if (!paused) {
        actions.DiceAction.reset();
        actions.DiceAction.play();
        actions.DiceAction.paused = false;
        setTime(parseInt(timer));
        await showTime();
        setPaused(true);
      }
    }

    go();
    // console.log(paused);
  }, [actions, paused, reset, setTime, showTime, timer, typeIcon]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Dice" geometry={nodes.Dice.geometry} material={materials.Material} rotation={[1.571, 1.119, -1.571]} scale={1.179} />
      </group>
    </group>
  )
}

Model.propTypes = {
  play: PropTypes.bool,
  type: PropTypes.string,
  time: PropTypes.number.isRequired,
}

useGLTF.preload('../src/components/diceAttack.glb')
