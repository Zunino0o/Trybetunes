import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { info } = this.props;
    const { previewUrl, trackName } = info;
    return (
      <div>
        <h1>{ trackName }</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  info: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default MusicCard;
