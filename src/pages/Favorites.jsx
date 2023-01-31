import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  state = {
    allFavSongs: [],
    isLoading: false,
  };

  async componentDidMount() {
    // console.log(this.state.favSongsStrg);
    await this.handleSaveState();
    // .then(() => console.log(this.state.favSongsStrg));
    // console.log(this.state.favSongsStrg);
  }

  handleSaveState = async () => {
    this.setState({
      isLoading: true,
    });
    await getFavoriteSongs()
      .then((allFavSongs) => {
        this.setState({
          isLoading: false,
          allFavSongs,
        });
      });
  };

  render() {
    const { isLoading, allFavSongs } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-favorites">
          {isLoading ? (
            <h1>Carregando...</h1>
          ) : (
            allFavSongs.map((fav) => (
              <MusicCard
                key={ fav.trackId }
                handleSaveState={ this.handleSaveState }
                info={ fav }
              />
            ))
          )}
        </div>
      </>
    );
  }
}

export default Favorites;
