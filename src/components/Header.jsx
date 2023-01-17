import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    name: '',
    loading: true,
  };

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({
      name,
      loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        {loading
          ? <h1>Carregando...</h1>
          : <h1 data-testid="header-user-name">{ name }</h1>}
      </header>
    );
  }
}

export default Header;
