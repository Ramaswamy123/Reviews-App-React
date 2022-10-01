import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const profileDetails = reviewsList[activeIndex]
    const {imgUrl, username, companyName, description} = profileDetails
    return (
      <div className="bg-container">
        <div className="review-container">
          <button
            className="button"
            onClick={this.onClickLeftArrow}
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
              // onClick={this.onClickLeftArrow}
            />
          </button>

          <div className="details-container">
            <h1 className="review-heading"> Reviews </h1>
            <img src={imgUrl} className="profile-image" alt={username} />
            <p className="user-name"> {username} </p>
            <p className="company-name"> {companyName} </p>
            <p className="description"> {description} </p>
          </div>
          <button
            className="button"
            onClick={this.onClickRightArrow}
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
              // onClick={this.onClickRightArrow}
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
