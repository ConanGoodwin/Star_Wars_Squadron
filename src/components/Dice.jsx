/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 dice.glb 
*/

import { useLayoutEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import PropTypes from 'prop-types';

export function Model(props) {
  const group = useRef()
  const {play} = props;
  const { nodes, materials, animations } = useGLTF('../src/components/diceAttack.glb')
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    actions.DiceAction.play();
    actions.DiceAction.paused = play;
  }, [actions, play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Dice" geometry={nodes.Dice.geometry} material={materials.Material} rotation={[1.571, 1.119, -1.571]} scale={1.179} />
      </group>
    </group>
  )
}

Model.propTypes = {
  play: PropTypes.bool
}

useGLTF.preload('../src/components/diceAttack.glb')
