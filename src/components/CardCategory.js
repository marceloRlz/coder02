import { Pressable, StyleSheet, Text } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductsByCategory",{categorySelected:item})}>
      <ShadowPrimary style={styles.container}>
          <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.gold,

    marginHorizontal: "10%",
    marginVertical: 25,
    padding: 20,
    alignItems: "center",
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35
  },
  text: {
    fontSize: 25,
    fontFamily: fonts.NewMario
  }
})