import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({errors})=>{
    return {
        errors: errors.session,
        email: "",
        password: "",
        formType: 'Sign-In',
        displayLink: {link: '/signup', name: 'Create a New Account', to: 'Sign Up'}
    }
}

const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);