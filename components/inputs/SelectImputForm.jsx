import { StyleSheet } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../../colors/colors'
import { articleTypeSpanish } from '../../utils/articleType'
import { ARTICLE_TYPES } from '../../utils/Constants'

    const data = ARTICLE_TYPES.map((type)=>{
        return {key:type, value:articleTypeSpanish(type)}
    })


export const SelectImputForm = ({placeholder,setSelected })=>{
    return(
        <SelectList data={data} 
        inputStyles={styles.select} 
        boxStyles={styles.select}
        dropdownTextStyles={styles.dropText}
        dropdownStyles={styles.back}
        placeholder={placeholder}
        search={false}
        setSelected={setSelected}
        
        />
        
    )
}

const styles = StyleSheet.create({
    select:{
        width:'90%',
        color:theme.underlineText,
        fontSize: 20,
        borderWidth:0,
        borderBottomWidth:0.5,
        borderColor:'black',
        borderBottomColor:theme.terciaryColor,
        backgroundColor:theme.inputBackground
    },
    dropText:{
        color:theme.underlineText,
        fontSize: 20,

    },
    back:{
        backgroundColor:theme.inputBackground,
        borderColor: theme.secondaryColor,
    }
})