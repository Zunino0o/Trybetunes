import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

class Search extends Component {
  state = {
    searchInput: '',
    isSearchButtonDisabled: true,
  };

  validateSearchButton = () => {
    const { searchInput } = this.state;
    const checkInputLength = (searchInput.length > 1);
    this.setState({
      isSearchButtonDisabled: !checkInputLength,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateSearchButton);
  };

  render() {
    const { searchInput, isSearchButtonDisabled } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-search">
          <form>
            <Input
              type="text"
              test="search-artist-input"
              title="Banda/Artista"
              id="searchInput"
              onChange={ this.onInputChange }
              value={ searchInput }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ isSearchButtonDisabled }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
