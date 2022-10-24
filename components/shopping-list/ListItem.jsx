import { useContext } from "react"
import { StyleSheet, PixelRatio } from "react-native"
import { Avatar, Card, IconButton } from "react-native-paper"
import { theme } from "../../colors/colors"
import { AppContext } from "../../data/context"

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
    const [shopArticles, setShopArticles] = useContext(AppContext)
    const handleCheked = (id)=>{
        const checkArticle = shopArticles.map((article)=>{
            if(article.id === id){
                article.name = article.name
                article.bougth = true
            }
            return article
        })

        setShopArticles(checkArticle)
    }

    return(
        bougth === false 
        ?<Card.Title style={styles.card}
            titleStyle={styles.title}
            subtitleStyle={styles.subTittle}
            title={name}
            subtitle={`Cantidad: ${quantity} `}
            left={(props)=>  <Avatar.Icon {...props} size={46} style={styles.icon} iconColor={theme.terciaryColor} icon={defineImage(type)}/>}
            right={() => <IconButton icon="check" size={36} iconColor={theme.primaryColor} borderless={true} onPress={()=> handleCheked(id)} />}
        />
        :<Card.Title style={styles.cardDisabled}
            titleStyle={styles.title}
            subtitleStyle={styles.subTittle}
            title={name}
            subtitle={`Cantidad: ${quantity} `}
            left={(props)=>  <Avatar.Icon {...props} size={46} style={styles.iconDisabled} iconColor={theme.underlineText} color={theme.underlineText} icon={defineImage(type)}/>}
            right={() => <IconButton icon="close" size={36} iconColor={theme.terciaryColor} borderless={true} />}
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
    },
    cardDisabled:{
        width:"90%",
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(1.2),
        borderWidth:0,
        borderRadius:5,
        backgroundColor: theme.backgroundViewColor
    },
    iconDisabled:{
        backgroundColor:theme.disableColor
    }
})

