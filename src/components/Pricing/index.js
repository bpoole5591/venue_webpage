import React, { Component } from 'react';

import MyButton from '../utils/MyButton';
import TicketIcon from '../../resources/images/icons/ticket.png';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [50, 100, 250],
    tiers: ['Floor', 'Balcony', 'VIP'],
    desc: [
      'Floor tickets are general admission, standing-room only. ',
      'Enjoy the show from the luxury of an assigned seat.',
      'Includes meet and greet, early admission, and one General Admission ticket.'
    ],
    linkto: ['tickets.com/a', 'tickets.com/b', 'tickets.com/c'],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.tiers[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase Tickets"
                background="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
                icon={TicketIcon}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="back_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <br />
          <hr />
          <br />
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
