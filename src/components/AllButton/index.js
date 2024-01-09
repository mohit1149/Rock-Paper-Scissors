import {BottomImage, BottomButton, ListItem} from './styledComponents'

const AllButton = props => {
  const {eachChoice, onClickButtonTrigger} = props
  const {imageUrl, id} = eachChoice
  const onClickButton = () => {
    onClickButtonTrigger(id)
  }

  return (
    <ListItem>
      <BottomButton type="button">
        <BottomImage src={imageUrl} alt={id} onClick={onClickButton} />
      </BottomButton>
    </ListItem>
  )
}

export default AllButton
