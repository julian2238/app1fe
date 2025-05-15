import { View, Text, TextInput, StyleSheet } from 'react-native'
import SearchBar from '../../../components/SearchBar'

const Documents = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  }
})

export default Documents