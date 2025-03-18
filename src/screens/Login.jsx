import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput 
            style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.input}/>
      </View>
      <Text style={styles.textForgotPassword}>Forgot Password</Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        fontSize: 58,
        paddingBottom: 50,
        // borderColor: 'red',
        // borderWidth: 1
    },
    inputContainer: {
        width: '80%',
        margin: 10
    },
    inputText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 3
    },
    input: {
        borderWidth: 1,
        borderRadius: 3
    },
    textForgotPassword: {
        // borderColor: 'red',
        // borderWidth: 1,
        textAlign: 'right',
        width: '80%'
    },
    button: {
        backgroundColor: '#1C1C1C',
        width: '80%',
        marginTop: 16,
        padding: 12,
        borderRadius: 4
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#eaeaea'
    }
})