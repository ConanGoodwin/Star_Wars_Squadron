import { PropTypes } from 'prop-types';
import { CardStyle } from '../../components/css';

function PilotDetail({texto}) {
  return (
    <textarea 
      name="" 
      id="" 
      value={texto}
      cols="36" 
      rows="10"
      className={CardStyle.card_border}
    >
    </textarea>
  )
}

PilotDetail.propTypes = {
  texto: PropTypes.string,
}

export default PilotDetail
