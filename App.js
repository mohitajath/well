//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUpScreen from './src/screens/signupscreen/SignUpScreen';
import Navigator from './src/navigation/navigator';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
