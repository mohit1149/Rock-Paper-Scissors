import {Component} from 'react'
import ReactPopUp from '../ReactPopup'
import AllButton from '../AllButton'
import {
  HomeBackgroundColor,
  UpperContainer,
  ParagraphContainer,
  ScoreContainer,
  UpperParagraph,
  ScoreParagraph,
  NumberParagraph,
  UpperBgContainer,
  BottomBgContainer,
  BottomContainer,
  ResponseBgContainer,
  ResponseBgCard,
  ResponseHeading,
  ResponseImage,
  SmallContainer,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    scoreNumber: 0,
    isActive: false,
    yourImage: '',
    opponentImage: '',
    currentHeading: '',
  }

  getRandomNumber = () => Math.floor(Math.random() * 3)

  onClickButtonTrigger = id => {
    const randomNumber = this.getRandomNumber()
    const responseOpponentImage = choicesList[randomNumber].imageUrl
    const findChoice = choicesList.find(eachChoice => eachChoice.id === id)
    const indexPosition = choicesList.indexOf(findChoice)
    const responseYourImage = choicesList[indexPosition].imageUrl
    const updatedIndexPosition = indexPosition + 1

    if (indexPosition === randomNumber) {
      this.setState(prevState => ({
        scoreNumber: prevState.scoreNumber + 0,
        isActive: !prevState.isActive,
      }))
      this.setState({
        opponentImage: responseOpponentImage,
        yourImage: responseYourImage,
        currentHeading: 'IT IS DRAW',
      })
    } else if (updatedIndexPosition === randomNumber) {
      this.setState(prevState => ({
        scoreNumber: prevState.scoreNumber + 1,
        isActive: !prevState.isActive,
      }))
      this.setState({
        opponentImage: responseOpponentImage,
        yourImage: responseYourImage,
        currentHeading: 'YOU WON',
      })
    } else if (updatedIndexPosition === 3 && randomNumber === 0) {
      this.setState(prevState => ({
        scoreNumber: prevState.scoreNumber + 1,
        isActive: !prevState.isActive,
      }))
      this.setState({
        opponentImage: responseOpponentImage,
        yourImage: responseYourImage,
        currentHeading: 'YOU WON',
      })
    } else {
      this.setState(prevState => ({
        scoreNumber: prevState.scoreNumber - 1,
        isActive: !prevState.isActive,
      }))
      this.setState({
        opponentImage: responseOpponentImage,
        yourImage: responseYourImage,
        currentHeading: 'YOU LOSE',
      })
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      isActive: false,
      yourImage: '',
      opponentImage: '',
      currentHeading: '',
    })
    this.setState(prevState => ({
      scoreNumber: prevState.scoreNumber + 0,
    }))
  }

  render() {
    const {
      scoreNumber,
      isActive,
      yourImage,
      opponentImage,
      currentHeading,
    } = this.state
    return (
      <HomeBackgroundColor>
        <UpperBgContainer>
          <UpperContainer>
            <ParagraphContainer>
              <UpperParagraph>
                ROCK <br /> PAPER <br /> SCISSORS
              </UpperParagraph>
            </ParagraphContainer>
            <ScoreContainer>
              <ScoreParagraph>Score</ScoreParagraph>
              <NumberParagraph>{scoreNumber}</NumberParagraph>
            </ScoreContainer>
          </UpperContainer>
        </UpperBgContainer>
        {isActive ? (
          <ResponseBgContainer>
            <ResponseBgCard>
              <SmallContainer>
                <ResponseHeading>YOU</ResponseHeading>
                <ResponseImage src={yourImage} alt="your choice" />
              </SmallContainer>
              <SmallContainer>
                <ResponseHeading>OPPONENT</ResponseHeading>
                <ResponseImage src={opponentImage} alt="opponent choice" />
              </SmallContainer>
            </ResponseBgCard>
            <ResponseHeading>{currentHeading}</ResponseHeading>
            <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResponseBgContainer>
        ) : (
          <BottomBgContainer>
            <BottomContainer>
              {choicesList.map(eachChoice => (
                <AllButton
                  key={eachChoice.id}
                  eachChoice={eachChoice}
                  onClickButtonTrigger={this.onClickButtonTrigger}
                />
              ))}
            </BottomContainer>
          </BottomBgContainer>
        )}
        <ReactPopUp />
      </HomeBackgroundColor>
    )
  }
}

export default Home
