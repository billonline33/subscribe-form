import React, { Component } from 'react';
import { subscribeService } from '../../services/subscribeService';

class SubscribeFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: '',
      submitActive: false,
      error: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // if (!this.state.submitActive) {
    //   return;
    // }

    const payload = {
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobilePhone: this.state.mobilePhone
      }
    };

    // subscribeService.submitForm(payload);
    // this.props.history.push('/subscribe-success');

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        console.log('res 001=', res);

        if (res.ok) {
          this.props.history.push('/subscribe-success');
        } else {
          this.setState({
            error: 'Something goes wrong when making web api call.'
          });
          throw new Error('something wrong on epxress api call');
        }
      })
      .catch(err => {
        console.log('subscribeService error', err);
      });
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    this.checkFields();
  }

  checkFields = () => {
    if (this.state.firstName && this.state.lastName && this.state.email) {
      this.setState({
        submitActive: true
      });
    } else {
      this.setState({
        submitActive: false
      });
    }
  };

  render() {
    return (
      <form className="subscribe" onSubmit={this.handleSubmit.bind(this)}>
        <div className="subscribe__header">
          <h2>Subscribe</h2>
        </div>

        <div className="subscribe__data">
          <div className="subscribe__row">
            <div className="subscribe__group">
              <label htmlFor="firstName">
                First Name <sup>*</sup>
              </label>
              <div className="subscribe__wrapper">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
            </div>

            <div className="subscribe__group">
              <label htmlFor="lastName">
                Last Name <sup>*</sup>
              </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
          </div>

          <div className="subscribe__row">
            <div className="subscribe__group">
              <label htmlFor="email">
                Email <sup>*</sup>
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange.bind(this)}
              />
            </div>

            <div className="subscribe__group">
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                type="text"
                name="mobilePhone"
                value={this.state.mobile}
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
          </div>

          <input type="submit" value="Submit" />
        </div>
        <div className="error">
          {this.state.error.length ? this.state.error : ''}
        </div>
      </form>
    );
  }
}

export default SubscribeFrom;
