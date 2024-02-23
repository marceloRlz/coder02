import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductDetail = ({route}) => {
  const {productId} = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{thumbnail:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>w
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrecio}>
          <Text style={styles.precio}>$ {product.price}</Text>
          <Pressable style={styles.comprar}>
            <Text style={styles.comprarTexto}>Comprar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  content: {
    width: "100%",
  },

  image: {
    width: "100%",
    height: 250,
  },
  containerText: {
    paddingHorizontal: 5,
    paddingVertical: 25,
  },

  containerPrecio: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  comprar: {
    backgroundColor: colors.gold,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 35,
    fontFamily: fonts.NintendoDSBIOS,
  },
  precio: {
    fontSize: 30,
  },
})