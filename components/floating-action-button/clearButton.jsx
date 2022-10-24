import { useContext } from "react"
import { StyleSheet } from "react-native"
import { Portal, FAB, } from "react-native-paper"
import { theme } from "../../colors/colors"
import { AppContext } from "../../data/context"

export const ClearButton = ({isvisible, icon,disabled})=>{       
    const [, setShopArticles]= useContext(AppContext)

    const clearArticles = ()=>{
        setShopArticles([])
        alert("Lista de la compra borrada")
    }


    return(
        <Portal>
            <FAB style={styles.fab} accessibilityLabel="boton para añadir articulos"
                visible={isvisible}
                icon={icon}
                onPress={clearArticles}
                color={theme.terciaryColor}
                disabled = {disabled}
            />
        </Portal>        
    )
}

const styles = StyleSheet.create({
    fab:{
        position:'absolute',
        left:25,
        bottom:40,
        backgroundColor:theme.primaryColor
    }
})