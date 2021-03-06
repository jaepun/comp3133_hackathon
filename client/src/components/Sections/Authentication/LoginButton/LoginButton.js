/*
Component
LoginButton
*/
import React, { Component } from 'react';
import { NavLink } from 'Layout';
import { LoginModal } from 'Sections';
import './LoginButton.css';

class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showModal: false
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal }, () => {
      console.log("Login Modal Toggle")
    });
  }

  render() { 
    const { auth } = this.props;
    const { showModal } = this.state;

    return (  
      <React.Fragment>
        <NavLink PageName="Sign In" onClick={this.toggleModal}/>
        <LoginModal auth={auth} show={showModal} toggle={this.toggleModal}/>
      </React.Fragment>
    );
  }
}
 
export { LoginButton };