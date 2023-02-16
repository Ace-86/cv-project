import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react'

export default function ResumeForm({ navigation}) {
    const [ userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    return (
       <View style={StyleSheet.container}>
       <View style={StyleSheet.header}>
            <Text style={StyleSheet.headerText}>
                Resume
            </Text>
        </View>
        <View style={StyleSheet.details}>
            <Text style={StyleSheet.titleText}>
                Personal Details
            </Text>
            <TextInput
            style={StyleSheet.textinput}
            placeholder="Enter First Name"
            value={userDetails.firstName}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'firstName':e}

                }))
            }}
            />
             <TextInput
            style={StyleSheet.textinput}
            placeholder="Enter Last Name"
            value={userDetails.lastName}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'lastName':e}

                }))
            }}
            />
             <TextInput
            style={StyleSheet.textinput}
            placeholder="Enter Email"
            value={userDetails.email}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'email':e}

                }))
            }}
            />
             <TextInput
            style={StyleSheet.textinput}
            placeholder="Enter Phone Number"
            value={userDetails.phone}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'phone':e}

                }))
            }}
            />
            <Button
                title="Create"
                style={styles.button}
                onPress={() => navigation.navigate('ShowCV', userDetails)}
                >
                </Button>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: 'blue',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop:40
    },
    header: {
        marginBottom: 20,
        alignSelf: 'stretch'
    },
    details: {
        marginBottom: 15
    },
    headerText: {
        fontSize: 24,
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
    textinput: {
        alignSelf: 'stretch',
        height:40,
        color: '#d3d3d3',
        marginBottom: 20,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#59cbbd',
        marginTop: 5,
        marginBottom: 20,
    }
})
