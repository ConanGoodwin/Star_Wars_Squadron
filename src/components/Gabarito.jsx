import PropTypes from 'prop-types'
import SetaPraCima from "../assets/seta-para-cima(1).png"
import SetaPraCimaVerde from "../assets/seta-para-cima.green.png"
import TurnImg from "../assets/pngwing.com.red.png"
import SetaDireita90 from "../assets/seta-para-direita.png"
import SetaEsquerda90 from "../assets/seta-para-esquerda.png"
import SetaEsquerda45 from "../assets/Curved-esquerda2.png"
import SetaEsquerdaVerde45 from "../assets/Curved-esquerda.green2.png"
import SetaDireita45 from "../assets/Curved-direita2.png"
import SetaDireitaVerde45 from "../assets/Curved-direita.green2.png"

import { GabaritoStyle } from "./css"

function Gabarito({moveShip}) {
  const dict = {
    0: null,
    1: <img src={SetaPraCima} alt="" />,
    2: <img src={SetaPraCimaVerde} alt="" />,
    3: <img src={"SetaPraCimaVermelha"} alt="" />,
    4: <img src={TurnImg} alt="" />,
    5: <img src={SetaEsquerda90} alt="" />,
    6: <img src={"SetaEsquerdaVerde90"} alt="" />,
    7: <img src={"SetaEsquerdaVermelha90"} alt="" />,
    8: <img src={SetaEsquerda45} alt="" />,
    9: <img src={SetaEsquerdaVerde45} alt="" />,
    10: <img src={"SetaEsquerdaVermelha45"} alt="" />,
    11: <img src={SetaDireita45} alt="" />,
    12: <img src={SetaDireitaVerde45} alt="" />,
    13: <img src={"SetaDireitaVermelha45"} alt="" />,
    14: <img src={SetaDireita90} alt="" />,
    15: <img src={"SetaDireitaVerde90"} alt="" />,
    16: <img src={"SetaDireitaVermelha90"} alt="" />,
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
