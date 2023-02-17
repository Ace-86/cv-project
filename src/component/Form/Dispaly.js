import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, } from 'react-native';
import { useState } from 'react';

export default function Display({ route }) {
    let dataObj = route.params

    return (
        <View style={ styles.container}>
            <View style= {styles.header}>
                <Text style={styles.headerText}>
                    Your Resume
                </Text>
            </View>
        <View style={styles.details}>
            <Text style={styles.titleText}>
                Personal Details
            </Text>
            <Text style={styles.text}>
                <Text style={styles.key}> First Name : </Text>
                <Text> {dataObj.firstName}</Text>
            </Text>

            <Text style={styles.text}>
                <Text style={styles.key}> Last Name: </Text>
                <Text> {dataObj.lastName}</Text>
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40
    },
    header: {
        marginBottom: 20,
        alignSelf: 'stretch'
    },
    details: {
        marginBottom: 15,
    },
    headerText: {
        fontSize:  24,
        color: '#fff',
        borderBottomColor: '#199187',
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    titleText: {
        fontWeight: 'bold',
        color: 'yellow',
        fontSize: 15,
        marginBottom: 10
    },
    key: {
        fontWeight: 'bold'
    },
    text: {
        color: '#d3d3d3',
    }
});