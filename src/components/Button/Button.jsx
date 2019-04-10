import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.scss';

class Button extends Component {

  click = () => {
    this.props.dispatch({ type: this.props.btnClick })
  }

  render() {
    return (
      <span style={{color: this.props.btnColor}} className="Button" onClick={this.click}>
        {this.props.btnText}
        <div style={{backgroundColor: this.props.btnColor}} className="line"></div>
      </span>
    );
  }
}

export default connect()(Button);
