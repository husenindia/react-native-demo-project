import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

export default function TodoItem({item, pressHandlerFun}) {
    return (
        <TouchableOpacity onPress={ () => pressHandlerFun(item.key) }>
            <View style={styles.list}>
                <Fontisto style={styles.mr10} name="sait-boat" size={24} />
                <Text>
                {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
    },
    mr10: {
        marginRight: 10,
    },
})