import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { TouchScrollable } from 'react-scrolllock';
import Button from '../Button/Button.jsx';
import './MeNowModal.scss';

class MeNowModal extends Component {

  state = { lockScroll: false }

  modalLinkClick(element) {
    ReactGA.event({
      category: 'Menu',
      action: 'Menu Click',
      label: element
    });
  }
  
  render() {
    return (
      <TouchScrollable>
        <div className="MeNowModal">
          <h1 className="alt">Recent Update</h1>
          <h6>11th of April 2019</h6>
          <p>Studying M.Sc. Computer Science at London MET and working as a Frontend Engineer at <a onClick={(e) => this.modalLinkClick(e.target.textContent)} href="https://www.thortful.com/">Thortful Ltd</a>. Also I am working on my master thesis which consists of a thorough research and application of Machine Learning algorithms in Javascript.</p>
          <p>Currently reading <a onClick={(e) => this.modalLinkClick(e.target.textContent)} href="https://www.goodreads.com/book/show/8520610-quiet">"Quiet"</a> by Susan Cain.</p>
          <Button btnColor={'#f74f3f'}  btnText={'Close'} btnClick={'CLOSE_MODAL'}></Button>
        </div>
      </TouchScrollable>
    );
  }
}

export default MeNowModal;
