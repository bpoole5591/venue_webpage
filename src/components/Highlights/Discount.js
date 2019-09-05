import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';
import TicketIcon from '../../resources/images/icons/ticket.png';

class Discount extends Component {
  state = { discountStart: 0, discountEnd: 30 };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>tickets purchased before June 30th!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <MyButton
                text="Purchase Tickets"
                background="#ffa800"
                color="#ffffff"
                link="http://google.com"
                icon={TicketIcon}
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
