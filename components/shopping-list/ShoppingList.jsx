import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Title } from "react-native-paper"
import { ListItem } from "./ListItem"

export const ShoppingList = ({data})=>{
    return(
        <ScrollView
          contentContainerStyle={styles.container}
          showsHorizontalScrollIndicator={false}
          >
            {data.map(({id, name, quantity, bougth, type})=>{
                return <ListItem 
                        id={id}
                        bougth={bougth}
                        name={name}
                        quantity={quantity}
                        type={type}
                        key={id}
                    />
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'98%',
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
    }
})