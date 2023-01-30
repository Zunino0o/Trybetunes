import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    loading: false,
    checked: false,
  };

  favFunc = ({ target }) => {
    this.setState({
      loading: true,
      checked: target.checked,
    }, async () => {
      await addSong(JSON.parse(target.name));
      // .then(() => setTimeout(() => {}, '3000'))
      this.setState({
        loading: false,
      });
    });
  };

  render() {
    const { info } = this.props;
    const { previewUrl, trackName, trackId } = info;
    const { loading, checked } = this.state;
    return (
      <div>
        <h1>{ loading ? 'Carregando...' : trackName }</h1>
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
