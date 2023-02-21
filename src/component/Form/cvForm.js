import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';

export default function ResumeForm({ navigation}) {
    const [ userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        dateOfStudy: '',
        company: '',
        position: '',
        jobTask: '',
        workDates: ''
    })
    return (
       <View style={styles.container}>
       <View style={styles.header}>
            <Text style={styles.headerText}>
                Resume
            </Text>
        </View>
        
        <View style={styles.details}>
            <Text style={styles.titleText}>
                Personal Details
            </Text>
            <TextInput
            style={styles.textinput}
            placeholder="Enter First Name"
            value={userDetails.firstName}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'firstName':e}

                }))
            }}
            />
             <TextInput
            style={styles.textinput}
            placeholder="Enter Last Name"
            value={userDetails.lastName}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'lastName':e}

                }))
            }}
            />
             <TextInput
            style={styles.textinput}
            placeholder="Enter Email"
            value={userDetails.email}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'email':e}

                }))
            }}
            />
             <TextInput
            style={styles.textinput}
            placeholder="Enter Phone Number"
            value={userDetails.phone}
            onChangeText={(e) => {
                setUserDetails(userDetails => ({
                    ...userDetails, ...{'phone':e}

                }))
            }}
            />

        <Text style={styles.titleText}>
        School Experience
        </Text>

        <TextInput
        style={styles.textinput}
        placeholder="School"
        value={userDetails.school}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'school':e}
            }))
        }}
        />
          <TextInput
        style={styles.textinput}
        placeholder="Degree"
        value={userDetails.degree}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'degree':e}
            }))
        }}
        />
          <TextInput
        style={styles.textinput}
        placeholder="School Dates"
        value={userDetails.dateOfStudy}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'dateOfStudy':e}
            }))
        }}
        />

        <Text style={styles.titleText}>
        Work Experience
        </Text>

        <TextInput
        style={styles.textinput}
        placeholder="Company Name"
        value={userDetails.company}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'company':e}
            }))
        }}
        />

<TextInput
        style={styles.textinput}
        placeholder="Position"
        value={userDetails.position}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'position':e}
            }))
        }}
        />

<TextInput
        style={styles.textinput}
        placeholder="Job Task"
        value={userDetails.jobTask}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'jobTask':e}
            }))
        }}
        />

<TextInput
        style={styles.textinput}
        placeholder="Dates of Employment"
        value={userDetails.workDates}
        onChangeText={(e) => {
            setUserDetails(userDetails => ({
                ...userDetails, ...{'workDates':e}
            }))
        }}
        />
            <Button
                title="Create"
                style={styles.buttons}
                onPress={() => navigation.navigate('ShowCV', userDetails)}
                > Create
                </Button>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
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
        width: 200,
        height:40,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    buttons: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        width: 150,
        backgroundColor: 'blue',
        color: 'white',
        marginTop: 5,
        marginBottom: 20,
    }
});
