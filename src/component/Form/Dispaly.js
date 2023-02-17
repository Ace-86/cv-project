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

