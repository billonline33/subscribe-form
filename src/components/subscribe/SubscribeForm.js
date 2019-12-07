import React, { Component } from 'react';
import './SubscribeForm.css';

class SubscribeFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: ''
    };
  }

  handleSubmitClick(e) {
    console.log(`Submit Clicked, first name is ${this.state.firstName}`);
    e.preventDefault();
    this.props.history.push('/subscribe-success');
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  render() {
    return (
      <form className="subscribe">
        <div className="subscribe__header">
          <h2>Subscribe</h2>
        </div>

        <div className="subscribe__data">
          <div className="subscribe__row">
            <div className="subscribe__group">
              <label for="fName">
                First Name <sup>*</sup>
              </label>
              <div className="subscribe__wrapper">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange.bind(this)}
                />
              </div>
            </div>

            <div className="subscribe__group">
              <label for="lName">
                Last Name <sup>*</sup>
              </label>
              <input type="text" name="lastName" value={this.state.lastName} />
            </div>
          </div>

          <div className="subscribe__row">
            <div className="subscribe__group">
              <label for="email">
                Email <sup>*</sup>
              </label>
              <input type="text" name="email" value={this.state.email} />
            </div>

            <div className="subscribe__group">
              <label for="fName">Mobile Phone</label>
              <input type="text" name="mobile" value={this.state.mobile} />
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmitClick.bind(this)}
          />
        </div>
      </form>
    );
  }
}

export default SubscribeFrom;
