import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
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
    await getUser().then((user) => {
      this.setState({
        isLoading: false,
        user,
      });
    });
  };

  render() {
    const { user, isLoading } = this.state;
    const { name, email, image, description } = user;
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          <h1>{isLoading ? 'Carregando...' : ''}</h1>

          <form action="">

            <input
              key="name"
              type="text"
              data-testid="edit-input-name"
              value={ name }
            />

            <input
              key="email"
              type="text"
              data-testid="edit-input-email"
              value={ email }
            />

            <input
              key="image"
              type="text"
              data-testid="edit-input-image"
              value={ image }
            />

            <input
              key="description"
              type="text"
              data-testid="edit-input-description"
              value={ description }
            />

            <button type="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default ProfileEdit;
