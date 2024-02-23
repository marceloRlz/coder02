import { View , Text ,StyleSheet,Platform ,StatusBar, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import {AntDesign} from "@expo/vector-icons"
import fonts from "../utils/globals/fonts"

const Header = ({title="Retro Consolas",navigation}) => {

    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} color="black"/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.rojomario,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "35%",

        alignItems: "center",
        borderRadius:5
      },
      text: {
        fontSize: 45,
        fontFamily: fonts.NintendoDSBIOS
       

    }
})

