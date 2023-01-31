import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  state = {
    isLoading: false,
    user: {
      name: '',
      email: '',
      image: '',
      description: '',
    },
  };

  async componentDidMount() {
    await this.handleLogin();
  }

  handleLogin = async () => {
    this.setState({
      isLoading: true,
    });
    await getUser()
      .then((user) => {
        this.setState({
          isLoading: false,
          user,
        });
      });
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>{ isLoading ? 'Carregando...' : '' }</h1>
        <section>
          <img data-testid="profile-image" src={ user.image } alt={ user.name } />
          <h1>{ user.name }</h1>
          <h1>{ user.email }</h1>
          <h1>{ user.description }</h1>
        </section>
        <Link
          key={ user.name }
          to="/profile/edit"
        >
          Editar perfil
        </Link>
      </div>
    );
  }
}

export default Profile;
