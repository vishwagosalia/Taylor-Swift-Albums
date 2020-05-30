<<<<<<< HEAD
import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import Button from './Button';
import Cardsection from './Cardsection';

const Albumdetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    headerContentStyle,
    headertextStyle,
    thumbnailStyle,
    thumbnailcontainerStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <Cardsection>
        <View style={thumbnailcontainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headertextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </Cardsection>

      <Cardsection>
        <Image style={imageStyle} source={{uri: image}} />
      </Cardsection>

      <Cardsection>
        <Button onpressed={() => Linking.openURL(url)}>Buy Now</Button>
      </Cardsection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headertextStyle: {
    fontSize: 18,
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  },

  thumbnailcontainerStyle: {
    justifyContent: 'center',
    alignItem: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default Albumdetail;
=======
import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import Button from './Button';
import Cardsection from './Cardsection';

const Albumdetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    headerContentStyle,
    headertextStyle,
    thumbnailStyle,
    thumbnailcontainerStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <Cardsection>
        <View style={thumbnailcontainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headertextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </Cardsection>

      <Cardsection>
        <Image style={imageStyle} source={{uri: image}} />
      </Cardsection>

      <Cardsection>
        <Button onpressed={() => Linking.openURL(url)}>Buy Now</Button>
      </Cardsection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headertextStyle: {
    fontSize: 18,
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  },

  thumbnailcontainerStyle: {
    justifyContent: 'center',
    alignItem: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default Albumdetail;
>>>>>>> f45bc33b02f7b2f8194ae30fa36c2a9ed7e4e466
