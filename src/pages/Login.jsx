import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Input from '../components/Input';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    loading: false,
  };

  fetchInfo = (jon) => {
    createUser({ name: jon });
    this.setState({
      loading: true,
    });
  };

  render() {
    const { loginInput, isSubmitButtonDisabled, onInputChange } = this.props;

    const { loading } = this.state;

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
            onClick={ () => this.fetchInfo(loginInput) }
            disabled={ isSubmitButtonDisabled }
          >
            Entrar
          </button>
          {loading ? <Redirect to="/loading" /> : ''}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginInput: PropTypes.string.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Login;
