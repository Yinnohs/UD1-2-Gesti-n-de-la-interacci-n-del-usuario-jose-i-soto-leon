import { StyleSheet } from "react-native"
import { Portal, FAB, } from "react-native-paper"
import { theme } from "../../colors/colors"


export const ShoppingButton = ({isvisible, action, icon})=>{    
    return(
        <Portal>
            <FAB style={styles.fab} accessibilityLabel="boton para añadir articulos"
                visible={isvisible}
                icon={icon}
                onPress={action}
                color={theme.terciaryColor}
            />
        </Portal>        
    )
}

const styles = StyleSheet.create({
    fab:{
        position:'absolute',
        right:25,
        bottom:40,
        backgroundColor:theme.primaryColor
    }
})