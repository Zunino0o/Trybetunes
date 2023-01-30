import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    allSongs: [],
    albumName: '',
    artirstName: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const fetchSongs = await getMusics(id);
    this.setState({
      allSongs: fetchSongs.slice(1),
      albumName: fetchSongs[0].collectionName,
      artirstName: fetchSongs[0].artistName,
    });
  }

  render() {
    const { allSongs, albumName, artirstName } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <p data-testid="artist-name">{artirstName}</p>
          <p data-testid="album-name">{albumName}</p>
          {allSongs.map((song) => {
            <MusicCard
              key={ song.trackId }
              trackName={ song.trackName }
              previewUrl={ song.previewUrl }
            />;
          })}
        </div>
      </>
    );
  }
}

export default Album;
