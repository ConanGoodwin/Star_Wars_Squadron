import { useState } from 'react'
import PropTypes from 'prop-types';
import { DiceAttack } from '../components';
import useTimer from 'react-hook-time';
// import { OrbitControls } from "@react-three/drei"

function Dice({attackQt, defenseQt,typeIcon}) {
  const [countAttack, setCountAttack] = useState([]);
  const [countDefense, setCountDefense] = useState([]);
  const [disabledAttack, setDisabledAttack] = useState([]);
  const [disabledDefense, setDisabledDefense] = useState([]);
  const [key] = useState(false);
  const [timer, setTimer] = useState(4);
  const { setTime, start, reset } = useTimer(3, {
    onEnd: async () => {
      console.log("fim");
      setCountAttack(countAttack.map(() => true));
      setCountDefense(countDefense.map(() => true));
      setDisabledAttack(disabledAttack.map(() => false));
      setDisabledDefense(disabledDefense.map(() => false));
      reset();
    },
  });

  const qtCell = (qt, type) => {
    const cells = [];

    for (let i = 0; i < qt; i++) {
      cells.push(i);
      if (type === 'attack') {
        countAttack.push(true);
        disabledAttack.push(false);
      } else {
        countDefense.push(true);
        disabledDefense.push(false);
      }
    }

    return cells;
  }

  const rollDice = async ({cell,type}) => {
    setTimer(Math.floor(Math.random() * (10 - 2) + 2));
    if (type === 'attack') { 
      setCountAttack(countAttack.map((iten, index) => index === cell ? false: iten));
      setDisabledAttack(disabledAttack.map((iten, index) => index === cell ? true: iten));
    } else {
      setCountDefense(countDefense.map((iten, index) => index === cell ? false: iten));
      setDisabledDefense(disabledDefense.map((iten, index) => index === cell ? true: iten));
    }
    setTime(timer);
    start();
  }

  return (
    <div style={{border:'3px double black', padding:'2px', backgroundColor:'rgba(0, 71, 71, .2)'}}>
      <div name='DiceAttack' style={{display:'flex'}}>
        {
          qtCell(attackQt, 'attack').map((cell) => 
            <div style={{border:'3px double black'}} key={cell}>
              <div className="App">
                <DiceAttack play={countAttack[cell]} key={key} time={timer} type={typeIcon ? 'attack' : 'icon'}/>
              </div>
              <div>
                <button disabled={disabledAttack[cell]} onClick={() => rollDice({cell,type:'attack'})} name={cell} style={{margin:'5px'}}>girar</button>
              </div>
            </div>
          )
        }
      </div>
      <div name='DiceDefense' style={{display:'flex'}}>
        {
          qtCell(defenseQt, 'defense').map((cell) => 
            <div style={{border:'3px double black'}} key={cell}>
              <div className="App">
                <DiceAttack play={countDefense[cell]} key={key} time={timer} type={'defense'}/>
              </div>
              <div>
                <button disabled={disabledDefense[cell]} onClick={() => rollDice({cell,type:'defense'})} name={cell} style={{margin:'5px'}}>girar</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

Dice.propTypes = {
  attackQt: PropTypes.number,
  defenseQt: PropTypes.number,
  typeIcon: PropTypes.bool
}

export default Dice
