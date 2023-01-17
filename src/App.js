import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

class App extends React.Component {
  state = {
    loginInput: '',
    isSubmitButtonDisabled: true,
  };

  // componentDidUpdate() {
  //   (createUser) ? <Loading /> : <Redirect to="/search" />;
  // }

  validateLoginButton = () => {
    const { loginInput } = this.state;
    const checkInputLength = (loginInput.length > 2);
    this.setState({
      isSubmitButtonDisabled: !checkInputLength,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateLoginButton);
    // console.log(() => createUser({ name: loginInput }));
  };

  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/loading" component={ Loading } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route
            exact
            path="/"
            render={ () => (<Login
              { ...this.state }
              onInputChange={ this.onInputChange }
            />) }
          />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
