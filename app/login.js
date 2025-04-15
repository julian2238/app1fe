import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Formik } from 'formik'
import useAuthStore from '../src/store/store'
import { authServices } from '../src/services/authServices'

const Login = () => {

  const [loading, setLoading] = useState(false);
  const login = useAuthStore(state => state.login)

  const handleSubmit = async ({ email, password }) => {
    try {
      setLoading(true)
      const data = await authServices.login(email, password)
      await login({ user: email, token: data.accessToken })
      router.replace('/(app)/home')
      setLoading(false)
    } catch (error) { }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Formik
        initialValues={{ email: 'contacto@nuwebs.com.co', password: 'password' }}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <Text style={styles.textForgotPassword}>Forgot Password</Text>
              <Pressable style={styles.button} onPress={handleSubmit}>
                {
                  loading ? (
                    <ActivityIndicator size="small" color="#eaeaea" />
                  ) : (
                    <Text style={styles.textButton}>Sign In</Text>
                  )
                }
              </Pressable>
            </>
          )
        }

      </Formik>
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