import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopUpContainer,
  TriggerButton,
  RulesImage,
  ImageButtonContainer,
  CloseButtonIcon,
} from './styledComponents'

const ReactPopUp = () => (
  <PopUpContainer>
    <Popup modal trigger={<TriggerButton type="button">RULES</TriggerButton>}>
      {close => (
        <ImageButtonContainer>
          <CloseButtonIcon type="button" onClick={() => close()}>
            <RiCloseLine size="40" />.
          </CloseButtonIcon>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ImageButtonContainer>
      )}
    </Popup>
  </PopUpContainer>
)
export default ReactPopUp
