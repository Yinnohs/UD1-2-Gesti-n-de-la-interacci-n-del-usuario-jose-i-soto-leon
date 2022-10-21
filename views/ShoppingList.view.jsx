import { StyleSheet, View } from "react-native"
import { ShoppingList } from "../components/shopping-list/ShoppingList"
import { ShoppingButton } from "../components/floating-action-button/ShoppingButton" 
import {useIsFocused} from '@react-navigation/native'
import { Title } from "react-native-paper"
import { AppContext } from "../data/context"
import { useContext } from "react"
import { theme } from "../colors/colors"



export const ShoppingListView = ({navigation})=>{
    const isVisible = useIsFocused()
    const [shopArticles,setShopArticles] = useContext(AppContext)
    return(
            <View style={styles.viewContainer}>    
                <Title style={{color:theme.primaryColor, fontSize:30}} >Articulos en el Carrito</Title>
                <ShoppingList data={shopArticles}/>
                <ShoppingButton isvisible={isVisible} action={()=> navigation.navigate('create') } icon={"plus"}/>
            </View>  
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        paddingTop:100,
        flexDirection:'column',
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: theme.backgroundViewColor
    }
})