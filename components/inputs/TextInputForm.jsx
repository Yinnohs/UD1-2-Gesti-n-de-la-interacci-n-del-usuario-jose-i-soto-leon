import { StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import { theme } from "../../colors/colors"

export const TextImputForm = ({label, value, onChange})=>{

    return(
        <TextInput
        style={styles.input}
        underlineColor={theme.secondaryColor}
        selectionColor={theme.secondaryColor}
        outlineColor={theme.secondaryColor}
        activeOutlineColor={theme.secondaryColor}
        activeUnderlineColor={theme.secondaryColor}
        placeholderTextColor={theme.secondaryColor}
        underlineColorAndroid={theme.secondaryColor}
        theme={{colors:{text: theme.primaryColor}}}
        label={label}
        value={value}
        onChangeText={text => onChange(text)}
        />
    )
}


const styles = StyleSheet.create({
  input:{
    width:'90%',
    height:50,
    paddingHorizontal:30,
    paddingVertical:5,
    backgroundColor:theme.inputBackground,
    marginVertical:15,
  }      
})