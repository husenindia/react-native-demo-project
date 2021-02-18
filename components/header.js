import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
    <View style={styles.header}>
        <Text style={styles.boldText}>Ya Hussain</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 15,
        paddingTop: 35,
        backgroundColor: '#CCC',
        color: '#F00',
    },
    boldText: {
        fontWeight:'bold',
    }
});