import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

export default function App() {
  const [dado, setDado] = useState(1);
  const imagens = [
    require("./assets/1.png"),
    require("./assets/2.png"),
    require("./assets/3.png"),
    require("./assets/4.png"),
    require("./assets/5.png"),
    require("./assets/6.png"),
  ];

  return (
    <View style={styles.container}>
      <Text>Sorte</Text>
      <TouchableOpacity onPress={() => {setDado(Math.floor(Math.random() * 6) + 1);}}>
        <Image source={imagens[dado]}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
