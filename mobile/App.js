import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric"/>
     <TextInput placeholder="Massa" keyboardType="numeric"/>

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
  input:{
    height:80,
    textAlaign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  }

});
