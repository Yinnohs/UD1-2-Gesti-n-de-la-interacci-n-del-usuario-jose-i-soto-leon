import { View, Text, StyleSheet, PixelRatio } from "react-native"
import { Avatar, Card, Title, IconButton } from "react-native-paper"
import { theme } from "../../colors/colors"

const defineImage = (type)=> {
    const icons = {
        fruit: "fruit-grapes",
        vegetable: "carrot",
        bakery: "chef-hat",
        fish:  "fish",
        meat: "food-steak",
        default:  "help",
    }

    return icons[type] ?? icons["default"]
}



export const ListItem= ({id, name, quantity, bougth, type})=>{
    return(
    <Card.Title style={styles.card}
        titleStyle={styles.title}
        subtitleStyle={styles.subTittle}
        title={name}
        subtitle={`Cantidad: ${quantity} `}
        left={(props)=>  <Avatar.Icon {...props} size={46} style={styles.icon} iconColor={theme.terciaryColor} icon={defineImage(type)}/>}
        right={(props) => <IconButton icon="delete" size={36} iconColor={theme.primaryColor} onPress={() => {}} />}
    />
    )
}


const styles = StyleSheet.create({
    card:{
        width:"90%",
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(1.2),
        borderWidth:0.5,
        borderBottomWidth:2.2,
        borderRadius:5,
        borderColor:theme.shadowBorderColor,
        backgroundColor: theme.backgroundColor
    },
    title:{
        color:theme.primaryColor,
    },
    subTittle:{
        color:theme.secondaryColor
    },  
    icon:{
        backgroundColor:theme.primaryColor
    }
})

