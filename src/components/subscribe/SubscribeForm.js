import React, { Component } from 'react';

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

    if (!this.state.submitActive) {
      this.setState({
        error:
          'Please enter at least first name and last name, leave the email empty to see the web api error.'
      });
      return;
    }

    const payload = {
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobilePhone: this.state.mobilePhone
      }
    };

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (res.ok) {
          this.props.history.push('/subscribe-success');
        } else {
          this.setState({
            error: 'Something went wrong when making web api call.'
          });
          throw new Error('Something went wrong on epxress api call');
        }
      })
      .catch(err => {
        //more error handling here if required!
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
    // Do NOT check email on purpose, if can see api call returns error.
    if (this.state.firstName && this.state.lastName) {
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
