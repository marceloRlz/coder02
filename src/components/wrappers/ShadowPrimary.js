import { StyleSheet, View } from "react-native"

const ShadowPrimary = ({style,  children })=>{
  return <View style={[styles.container, style]}>{children}</View>
}

export default ShadowPrimary

const styles = StyleSheet.create({
  container: {
    /*Android*/
    elevation: 9,
    /*IOS*/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    }
  }
})