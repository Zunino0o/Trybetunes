import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    isLoading: false,
    checked: false,
    // favSongsStrg: [],
  };

  async componentDidMount() {
    const { info } = this.props;
    this.setState({
      isLoading: true,
    });
    const favSongs = await getFavoriteSongs();
    if (favSongs.some((fav) => fav.trackId === info.trackId)) {
      this.setState({
        checked: true,
      });
    }
    this.setState({
      isLoading: false,
    });
  }

  favFunc = ({ target }) => {
    this.setState({
      isLoading: true,
      checked: target.checked,
    }, async () => {
      const { checked } = this.state;
      if (checked) {
        await addSong(JSON.parse(target.name));
      } else {
        await removeSong(JSON.parse(target.name));
      }
      // const favSongsStrg = await getFavoriteSongs();
      // .then(() => setTimeout(() => {}, '3000'))
      this.setState({
        isLoading: false,
        // favSongsStrg,
      });
    });
  };

  render() {
    const { info } = this.props;
    const { previewUrl, trackName, trackId } = info;
    const { isLoading, checked } = this.state;
    return (
      <div>
        <h1>{ isLoading ? 'Carregando...' : trackName }</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="checkbox">
          Favorita
          <input
            name={ JSON.stringify(info) }
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            checked={ checked }
            onChange={ this.favFunc }
            id="checkbox"
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  info: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default MusicCard;
