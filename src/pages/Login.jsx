import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';

class Login extends Component {
  render() {
    const { loginInput, isSubmitButtonDisabled, onInputChange, createUser } = this.props;
    return (
      <div data-testid="page-login">
        <form action="" method="get">
          <Input
            title="Insira seu nome:"
            type="text"
            id="loginInput"
            test="login-name-input"
            onChange={ onInputChange }
            value={ loginInput }
          />

          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ createUser }
            disabled={ isSubmitButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginInput: PropTypes.string.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default Login;
