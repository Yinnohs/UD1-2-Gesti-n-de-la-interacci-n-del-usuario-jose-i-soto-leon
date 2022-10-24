import { StyleSheet, View } from "react-native"
import { ShoppingList } from "../components/shopping-list/ShoppingList"
import { ShoppingButton } from "../components/floating-action-button/ShoppingButton" 
import {useIsFocused} from '@react-navigation/native'
import { Title,Text } from "react-native-paper"
import { AppContext } from "../data/context"
import { useContext } from "react"
import { theme } from "../colors/colors"
import { ClearButton } from "../components/floating-action-button/clearButton"



export const ShoppingListView = ({navigation})=>{
    const isVisible = useIsFocused()
    const [shopArticles,] = useContext(AppContext)
    const isClearButtonDisabled = shopArticles.length === 0
    return(
            <View style={styles.viewContainer}>    
                <Title style={{color:theme.primaryColor, fontSize:30}} >Articulos en el Carrito</Title>

                {shopArticles.length === 0 
                ?<View style={{display:'flex', flexDirection:"column", alignItems:"center", justifyContent:"center",height:'100%'}}>
                    <Text 
                    style={{color:theme.underlineText}} 
                    variant="displayLarge">
                        Sin Articulos
                    </Text>
                </View> 
                
                :<ShoppingList data={shopArticles}/>}
                
                <ShoppingButton isvisible={isVisible} action={()=> navigation.navigate('create') } icon={"plus"}/>
                <ClearButton isvisible={isVisible}  icon={"delete"} disabled={isClearButtonDisabled}/>
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