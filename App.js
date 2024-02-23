import { StatusBar } from 'expo-status-bar'
import {useFonts} from "expo-font"
import { StyleSheet, SafeAreaView, useWindowDimensions } from "react-native"
import { fontCollection } from './src/utils/globals/fonts'
import MainNavigator from './src/navigation/MainNavigator'


const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar  />
      <MainNavigator/>
      </SafeAreaView>
    </>
    
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A38F3",
    flex: 2,
    opacity:'%50'
    
  }
})
