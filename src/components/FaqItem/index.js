// Write your code here.
import {Component} from 'react'

class FaqItem extends Component {
  state = {isShow: false}

  onClickShowOrHide = () => {
    this.state(prevState => ({isShow: !prevState.isShow}))
  }

  renderAnswer = () => {
    const {isShow} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isShow) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isShow} = this.state
    const imageUrl = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altName = isShow ? 'minus' : 'plus'

    return (
      <li className="faq-item-container">
        <div className="question-and-icon-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.onClickShowOrHide}>
            <img src={imageUrl} alt={altName} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
