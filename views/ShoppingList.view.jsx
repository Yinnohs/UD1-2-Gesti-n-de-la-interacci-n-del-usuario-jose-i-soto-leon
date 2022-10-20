import { StyleSheet, View } from "react-native"
import { ShoppingList } from "../components/shopping-list/ShoppingList"
import { ShoppingButton } from "../components/floating-action-button/ShoppingButton" 
import { Portal } from "react-native-paper"
import {useIsFocused} from '@react-navigation/native'
import { CreateModal } from "../components/create-modal/CreateModal"
import { useState } from "react"



export const ShoppingListView = ()=>{
    const isVisible = useIsFocused()
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
            <View style={styles.viewContainer}>    
                <ShoppingList data={[]}/>
                <ShoppingButton isvisible={isVisible} action={showModal}/>
                <CreateModal hideModal={hideModal} isVisible={visible}/>
            </View>  
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#282C34"
    }
})