import { useState } from "react"
import { StyleSheet } from "react-native"
import { Portal, FAB, } from "react-native-paper"


export const ShoppingButton = ({isvisible, action})=>{    
    return(
        <Portal>
            <FAB style={styles.fab} accessibilityLabel="boton para añadir articulos"
                visible={isvisible}
                icon={'plus'}
                onPress={action}

            />
        </Portal>        
    )
}

const styles = StyleSheet.create({
    fab:{
        position:'absolute',
        right:25,
        bottom:40
    }
})