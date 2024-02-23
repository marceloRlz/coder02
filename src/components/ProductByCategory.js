import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductByCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductDetail",{productId:item.id})} style={styles.container}>
      <Text style={styles.text}>{item.id} {item.title}</Text>
      <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode="cover"/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gold,
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 15,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    width: "60%",
    fontSize: 20,
fontFamily: fonts.NewMario
  },
  image: {
    minWidth: 160,
    minHeight: 80
  }
})