import { useState } from 'react'
import { DiceAttack } from '../components';
// import { OrbitControls } from "@react-three/drei"

function Dice() {
  const [countAttack, setCountAttack] = useState([]);
  const [countDefense, setCountDefense] = useState([]);
  const [key, setKey] = useState(false);
  const [timer, setTimer] = useState(6);

  const qtCell = (qt, type) => {
    const cells = [];

    for (let i = 0; i < qt; i++) {
      cells.push(i);
      if (type === 'attack') {
        countAttack.push(true);
      } else {
        countDefense.push(true);
      }
    }

    return cells;
  }

  return (
    <div style={{border:'3px double black', padding:'2px'}}>
      <div name='DiceAttack' style={{display:'flex'}}>
        {
          qtCell(3, 'attack').map((cell) => 
            <div style={{border:'3px double black'}} key={cell}>
              <div className="App">
                <DiceAttack play={countAttack[cell]} key={key} time={timer}/>
              </div>
              <div>
                <button onClick={({target}) => {
                  // setKey(!key)
                  (target.innerText === 'girar') ? target.innerText = 'reset' : target.innerText = 'girar';
                  setTimer(Math.floor(Math.random() * (10 - 2) + 2));
                  setCountAttack(countAttack.map((iten, index) => index === cell ? !iten: iten))
                }} style={{margin:'5px'}}>girar</button>
              </div>
            </div>
          )
        }
      </div>
      <div name='DiceDefense' style={{display:'flex'}}>
        {
          qtCell(3, 'defense').map((cell) => 
            <div style={{border:'3px double black'}} key={cell}>
              <div className="App">
                <DiceAttack play={countDefense[cell]} key={key} time={timer}/>
              </div>
              <div>
              <button onClick={({target}) => {
                  // setKey(!key)
                  (target.innerText === 'girar') ? target.innerText = 'reset' : target.innerText = 'girar';
                  setTimer(Math.floor(Math.random() * (10 - 2) + 2));
                  setCountDefense(countDefense.map((iten, index) => index === cell ? !iten: iten))
                }} style={{margin:'5px'}}>girar</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Dice
