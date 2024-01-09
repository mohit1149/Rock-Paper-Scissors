import {BottomImage, BottomButton, ListItem} from './styledComponents'

const AllButton = props => {
  const {eachChoice, onClickButtonTrigger} = props
  const {imageUrl, id} = eachChoice
  const onClickButton = () => {
    onClickButtonTrigger(id)
  }

  return (
    <ListItem>
      <BottomButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickButton}
      >
        <BottomImage src={imageUrl} alt={id} />
      </BottomButton>
    </ListItem>
  )
}

export default AllButton
