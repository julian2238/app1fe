import { StyleSheet, TextInput, View } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
        <Ionicons name="search-outline" size={24} color={'#333'} style={styles.icon}/>
        <TextInput 
            style={styles.input}
            placeholder='Search...'
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        margin: 20,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 10,
        // borderColor: 'red',
        // borderWidth: 1,
      },
      icon: {
        marginRight: 10
      },
      input: {
        flex: 1,
        color: '#333',
        fontSize: 18,
      }
})