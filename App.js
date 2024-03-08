import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any Image');
    }
  };

  return (
    <View style={styles.container}>
      <View styles={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  textStyles: {
    color: '#fff'
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
