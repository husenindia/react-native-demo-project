import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { auto } from 'eol';

export default function App() {
  const [name, setName] = useState('Ya Hussain');
  const [person, setPerson] = useState({name:'Mario', age: 40});
  const [personName, setPersonName] = useState('Mario');
  const [personAge, setPersonAge] = useState(40);
  
  const changeName = () => {
    setName('"Ya Hussain"');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>{ name }</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Person Name is: { personName }</Text>
        <Text style={styles.boldText, styles.mb10}>Person Age is: { personAge }</Text>

        <View style={styles.formGroup}>
          <Text style={styles.boldText, styles.fontSize18}>Enter name:</Text>
          <TextInput 
          multiline
          style={styles.input} 
          placeholder='e.g. John Doe'
          onChangeText={(val)=> setPersonName(val)}/>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.boldText, styles.fontSize18}>Enter age:</Text>
          <TextInput 
          style={styles.input} 
          placeholder='Enter Age'
          keyboardType='numeric'
          onChangeText={(val)=> setPersonAge(val)}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Submit' onPress={ changeName } />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mb10: {
    marginBottom: 10,
  },
  fontSize18: {
    fontSize: 18,
  },
  formGroup: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    marginTop: 5,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    padding: 15,
    paddingTop: 35,
    backgroundColor: '#CCC',
    color: '#F00',
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    width: '100%',
    flexGrow: 1,
    padding: 15,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor:'#F00',
  }
});
