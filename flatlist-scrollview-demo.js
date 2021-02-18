import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Touchable, TouchableHighlight,TouchableOpacity } from 'react-native';
import { auto } from 'eol';

export default function App() {
  const [name, setName] = useState('Ya Hussain');
  const [people, setPeople] = useState([
    {name:'1Mario', id: 10},
    {name:'2Mario', id: 20},
    {name:'3Mario', id: 30},
    {name:'4Mario', id: 40},
    {name:'5Mario', id: 50},
    {name:'6Mario', id: 60},
    {name:'7Mario', id: 70},
    {name:'8Mario', id: 80},
    {name:'9Mario', id: 90},
  ]);
  const pressHandler = (id) => {    
    setPeople((prevPeople) => {
      return prevPeople.filter(people => people.id != id)
    }) 
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>{ name }</Text>
      </View>
      <View style={styles.body}>
        {/* 
        <ScrollView>
        {
          people.map(item => (
              <View key={item.id}>
                <Text style={styles.item}>
                  {item.name}
                </Text>
              </View>
            ))
        }
        </ScrollView> */}
        <FlatList
          numColumns={2}
          keyExtractor={(item)=>item.id}
          data={people}
          renderItem={({item}) =>(
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginRight: '10%',
    textAlign: 'center'
  },
  mb10: {
    marginBottom: 10,
  },
 
  container: {
    backgroundColor: '#fff',
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
    padding: 15,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor:'#F00',
  }
});
