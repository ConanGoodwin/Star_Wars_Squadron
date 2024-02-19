import PropTypes from 'prop-types'
import { 
  Front, FrontGreen, FrontRed, TurnRed,
  Left90, LeftGreen90, LeftRed90, Left45, LeftGreen45, LeftRed45, 
  Right90, RightGreen90, RightRed90, Right45, RightGreen45, RightRed45 
} from '../assets/maneuvers';
import { GabaritoStyle } from "./css"

function Gabarito({moveShip}) {
  const dict = {
    0: null,
    1: <img src={Front} alt="" />,
    2: <img src={FrontGreen} alt="" />,
    3: <img src={FrontRed} alt="" />,
    4: <img src={TurnRed} alt="" />,
    5: <img src={Left90} alt="" />,
    6: <img src={LeftGreen90} alt="" />,
    7: <img src={LeftRed90} alt="" />,
    8: <img src={Left45} alt="" />,
    9: <img src={LeftGreen45} alt="" />,
    10: <img src={LeftRed45} alt="" />,
    11: <img src={Right45} alt="" />,
    12: <img src={RightGreen45} alt="" />,
    13: <img src={RightRed45} alt="" />,
    14: <img src={Right90} alt="" />,
    15: <img src={RightGreen90} alt="" />,
    16: <img src={RightRed90} alt="" />,
  }
  // const moveShip = [[0,0,0,0,0,0],[0,0,1,0,0,4],[5,8,1,11,14,0],[5,8,2,11,14,0],[0,9,2,12,0,0],[0,0,0,0,0,0]];

  return (
    <div className={GabaritoStyle.gabarito_border}>
      <table className={GabaritoStyle.gabarito_border}>
        <tbody>
          {
            moveShip.map((row, index) => (
              <tr key={index}>
                <td>
                  {moveShip.length - 1 - index}
                </td>
                {
                  row.map((value, index) => (
                    <td key={index}>
                      {dict[value]}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

Gabarito.propTypes = {
  moveShip: PropTypes.array.isRequired,
}

export default Gabarito

// import SetaPraCima from "../assets/seta-para-cima(1).png"
// import SetaPraCimaVerde from "../assets/seta-para-cima.green.png"
// import SetaPraCimaVermelha from "../assets/seta-para-cima.red.png"
// import TurnImg from "../assets/pngwing.com.red.png"

// import SetaDireita90 from "../assets/seta-para-direita.png"
// import SetaDireitaVerde90 from "../assets/seta-para-direita.green.png"
// import SetaDireitaVermelha90 from "../assets/seta-para-direita.red.png"
// import SetaEsquerda90 from "../assets/seta-para-esquerda.png"
// import SetaEsquerdaVerde90 from "../assets/seta-para-esquerda.green.png"
// import SetaEsquerdaVermelha90 from "../assets/seta-para-esquerda.red.png"

// import SetaEsquerda45 from "../assets/Curved-esquerda2.png"
// import SetaEsquerdaVerde45 from "../assets/Curved-esquerda.green2.png"
// import SetaDireita45 from "../assets/Curved-direita2.png"
// import SetaDireitaVerde45 from "../assets/Curved-direita.green2.png"
