// import lib
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Albumdetail from './Albumdetail';
import axios from 'axios';

class Albumlist extends Component {
  state = {albums: []};
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbum() {
    return this.state.albums.map(album => (
      <Albumdetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbum()}</ScrollView>;
  }
}

export default Albumlist;
