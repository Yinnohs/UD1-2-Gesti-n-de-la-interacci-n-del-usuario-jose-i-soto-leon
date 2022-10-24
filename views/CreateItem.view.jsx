import { useIsFocused } from "@react-navigation/native"
import { useContext, useState } from "react"
import { StyleSheet, View } from "react-native"
import { Title, Button } from "react-native-paper"
import { theme } from "../colors/colors"
import { ShoppingButton } from "../components/floating-action-button/ShoppingButton"
import { SelectImputForm } from "../components/inputs/SelectImputForm"
import { TextImputForm } from "../components/inputs/TextInputForm"
import NumericInput from "react-native-numeric-input"
import { generateUuid } from "../utils"
import { AppContext } from "../data/context"



export const CreateItemView = ({navigation})=>{
    const isVisible = useIsFocused()
    const [name, setName] = useState("") 
    const [selectedType, setSelectedType] = useState("")
    const [quantity, setQuantity]= useState(0)
    const [shopArticles, setShopArticles] = useContext(AppContext)    

    const handleSubmitData = ()=>{

        if(!isAllInputsNotDefault()){
            alert("todos los campos deben tener un valor")
            return
        }

        const newArticle ={
            id: generateUuid(),
            name: name.trim(),
            quantity: quantity,
            bougth: false,
            type: selectedType
        }

        setShopArticles((lastState)=> [...lastState ,newArticle])
        resetValues()
        alert("Articulo Añadido Correctamente")
        navigation.navigate("home")

    }

    const resetValues = ()=>{
        setName("")
        setSelectedType("")
        setQuantity(0)
        
    }

    const handleReset = ()=>{
        resetValues()
        navigation.navigate("home") 
    }

    const isAllInputsNotDefault = ()=>{
        if(name === "" || selectedType == "" || quantity === 0 ){
            return false
        }
        return true
    }

    const renderButton = ()=>{
        if(isAllInputsNotDefault()){
            return<Button 
                mode="elevated" 
                buttonColor={theme.primaryColor}
                textColor="#FFF" 
                onPress={handleSubmitData}>Enviar</Button>
        }
        return<Button 
        mode="elevated" 
        buttonColor={theme.primaryColor}
        textColor="#FFF" 
        disabled={true}>Enviar</Button>
    }
    
    return(
        <View style={styles.viewContainer}>
            <Title style={{color:theme.primaryColor, fontSize:30}}>Añade un objeto al Carrito</Title>
            <View style={styles.inputContainer}>
                <TextImputForm label="Nombre Producto" value={name} onChange={setName}/>
                <SelectImputForm placeholder={"Tipo de Articulo"} setSelected={setSelectedType}/>
                <NumericInput 
                borderColor={theme.secondaryColor} 
                textColor={theme.underlineText} 
                rounded={true} 
                maxValue={100} 
                minValue={0}
                valueType="integer"
                value={quantity}
                leftButtonBackgroundColor={theme.inputBackground}
                rightButtonBackgroundColor={theme.inputBackground}
                iconStyle={{color:theme.underlineText}}
                containerStyle={{paddingHorizontal:20,height:50, backgroundColor:theme.inputBackground,}} 
                onChange={(value)=> setQuantity(value)}
                />

            </View>
            <View style={styles.buttonContainer}>
                <Button 
                mode="elevated" 
                buttonColor={theme.terciaryColor} 
                textColor="#FFF"
                onPress={handleReset}
                >Cancelar</Button>
               {renderButton()}
            </View>
   
            <ShoppingButton isvisible={isVisible} action={()=> navigation.navigate("home") } icon={"home"}/>
        </View>
    )
}



const styles = StyleSheet.create({
    viewContainer: {
        paddingTop:100,
        flexDirection:'column',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: theme.backgroundViewColor
    },
    inputContainer:{
        width:'100%',
        height:'60%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    buttonContainer:{
        width:'100%',
        height:'30%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }

})