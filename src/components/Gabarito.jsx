// import React from 'react'
// import PropTypes from 'prop-types'
// import {MoveXWing} from "../assets/ships/"
import SetaPraCima from "../assets/seta-para-cima(1).png"
import SetaPraCimaVerde from "../assets/seta-para-cima.green.png"
import TurnImg from "../assets/pngwing.com.red.png"
import SetaDireita90 from "../assets/seta-para-direita.png"
import SetaEsquerda90 from "../assets/seta-para-esquerda.png"
import SetaEsquerda45 from "../assets/Curved-esquerda.png"
import SetaEsquerdaVerde45 from "../assets/Curved-esquerda.green.png"
import SetaDireita45 from "../assets/Curved-direita.png"
import SetaDireitaVerde45 from "../assets/Curved-direita.green.png"

import { GabaritoStyle } from "./css"

function Gabarito() {
  return (
    <div className={GabaritoStyle.gabarito_border}>
      {/* <img src={MoveXWing} alt="" className={GabaritoStyle.gabarito_border} /> */}
      <table className={GabaritoStyle.gabarito_border}>
        <tbody>
          <tr>
            <td>
              5
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              4
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
              <img src={SetaPraCima} alt="" />
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
              <img src={TurnImg} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              3
            </td>
            <td>
              <img src={SetaEsquerda90} alt="" />
            </td>
            <td>
              <img src={SetaEsquerda45} alt="" />
            </td>
            <td>
              <img src={SetaPraCima} alt="" />
            </td>
            <td>
              <img src={SetaDireita45} alt="" />
            </td>
            <td>
              <img src={SetaDireita90} alt="" />
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              2
            </td>
            <td>
              <img src={SetaEsquerda90} alt="" />
            </td>
            <td>
              <img src={SetaEsquerda45} alt="" />
            </td>
            <td>
              <img src={SetaPraCimaVerde} alt="" />
            </td>
            <td>
              <img src={SetaDireita45} alt="" />
            </td>
            <td>
              <img src={SetaDireita90} alt="" />
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              1
            </td>
            <td>
            </td>
            <td>
              <img src={SetaEsquerdaVerde45} alt="" />
            </td>
            <td>
              <img src={SetaPraCimaVerde} alt="" />
            </td>
            <td>
              <img src={SetaDireitaVerde45} alt="" />
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              0
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Gabarito.propTypes = {}

export default Gabarito
