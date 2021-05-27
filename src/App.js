import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEmailData } from './actions/index';
import './App.css';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      message: '',
      email: '',
      display: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmailFormat = this.validateEmailFormat.bind(this);
  }

  handleChange(e) {
    this.setState({email: [e.target.value]});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email === '') {
      this.setState({emailError: ''})
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(this.state.email)) {
      this.setState({emailError: 'error'})
    }
    else {
      this.setState({emailError: 'nice'})
      this.handleFormSubmit();
    }
  }

  handleFormSubmit() {
    this.props.fetchEmailData(this.state.email);
    this.setState({email:''})
    console.log(this.props.emaildata[0]);
  }

  validateEmailFormat() {
    if (this.state.email === '') {
      this.setState({emailError: ''})
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(this.state.email)) {
      this.setState({emailError: 'error'})
    }
    else {
      this.setState({emailError: 'nice'})
    }
  }

  renderErrorMessage() {
    if (this.state.emailError === 'error') {
      return (
        <p>Please enter a valid email format.</p>
      )
    }
  }

  renderEmailStatus() {
    const emailData = this.props.emaildata[0];

    if (emailData !== undefined) {
      if (emailData.deliverable === true) {
        return(
          <div className={this.state.display}>
            <p>your email address can be delivered to</p>
            <button onClick={() => {this.setState({display: 'hidden'})}}>got it</button>
          </div>
        )
      }
      else if (emailData.deliverable === false)  {
        return(
          <div>
            <p>your email address cannot be delivered to</p>
          </div>
        )
      }
    }
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='app-title'>Invoice Simple Coding Challenge</h1>
          <p>by Neil Krichi</p>
        </header>
        <div className='signup'>
          <div className='page-container'>
            <form onSubmit={this.handleSubmit}>
              <div className={this.state.emailError}>
                <input type ='text' name='email'
                  value={this.state.email}
                  placeholder="example@email.com"
                  onBlur={this.validateEmailFormat}
                  onChange={this.handleChange}/>
                {this.renderErrorMessage()}
              </div>
              <input type="submit" onClick={this.validateEmail} />
            </form>
            {this.renderEmailStatus()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ emaildata }){
    return { emaildata };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEmailData: fetchEmailData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)