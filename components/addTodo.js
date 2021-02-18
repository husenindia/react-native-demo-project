import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({addTodoFun}) {
    const [text, setText] = useState('');
    const changeHanlder = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            onChangeText={changeHanlder}
            placeholder="Add todo item..."/>
            <Button title='Add Todo' onPress={()=>addTodoFun(text)} color='coral'/>
        </View>

    )
}

const styles = StyleSheet.create ({
    input: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    }
})