import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Loading extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const number = 1500;
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, number);
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        <h1>Carregando...</h1>
        {!loading ? <Redirect to="/search" /> : null}
      </>
    );
  }
}

export default Loading;
