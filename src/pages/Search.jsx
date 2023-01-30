import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/Input';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  state = {
    searchInput: '',
    isSearchButtonDisabled: true,
    isLoading: false,
    artist: undefined,
    response: [],
  };

  validateSearchButton = () => {
    const { searchInput } = this.state;
    const checkInputLength = searchInput.length > 1;
    this.setState({
      isSearchButtonDisabled: !checkInputLength,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value, artist: value }, this.validateSearchButton);
  };

  submitSearch = () => {
    const { searchInput } = this.state;
    this.setState({
      searchInput: '',
      isLoading: true,
    });
    searchAlbumsAPI(searchInput)
      .then((response) => {
        this.setState({
          response,
          isLoading: false,
        });
      });
  };

  render() {
    const {
      searchInput,
      isSearchButtonDisabled,
      isLoading,
      artist,
      response,
    } = this.state;

    console.log(response);

    return (
      <>
        <Header />
        <div data-testid="page-search">
          {isLoading ? (
            <h1>Carregando...</h1>
          ) : (
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
                type="button"
                data-testid="search-artist-button"
                disabled={ isSearchButtonDisabled }
                onClick={ this.submitSearch }
              >
                Pesquisar
              </button>
            </form>
          )}
        </div>
        <h2>
          {(response.length)
            ? `Resultado de álbuns de: ${artist}`
            : ''}

        </h2>
        <div>

          {(response.length)
            ? response.map((album) => (
              <div key={ album.collectionId }>
                <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                <Link
                  key={ album.collectionId }
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ `/album/${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
              </div>
            ))

            : <h1>Nenhum álbum foi encontrado</h1>}
        </div>
      </>
    );
  }
}

export default Search;
