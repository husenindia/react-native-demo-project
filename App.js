import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';
import { auto } from 'eol';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
export default function App() {
  const[todos, setTodos] = useState([
    { text:'Buy coffee', key: '1'},
    { text:'Car Service', key: '2'},
    { text:'Shopping groceries', key: '3'},
  ])
  const pressHandlerFn = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo=>todo.key != key);
    })
  }
  const addTodoFn = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text:text, key:Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('Oops', 'Must be over 3 Character long', [
        { text: 'Understood', onPress: () => console.log('Alert closed')}
      ]);
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss(); 
      console.log('Keyboard dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.todobody}>
          <AddTodo addTodoFun={addTodoFn}/>
          <View style={styles.item}>
            <FlatList 
            data={todos} 
            keyExtractor={item => item.key}
            renderItem={({item})=>(       
              <TodoItem item={item} pressHandlerFun={pressHandlerFn}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical:10,
    padding: 10,
    backgroundColor: 'white',
    fontSize: 24,
    textAlign: 'center',
    flex: 1,

  },
  mb10: {
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1

  },
  todobody: {
    width: '100%',
    padding: 15,
    textAlign: 'left',
    backgroundColor: '#f1f1f1', 
    flex: 1,
  },
});
