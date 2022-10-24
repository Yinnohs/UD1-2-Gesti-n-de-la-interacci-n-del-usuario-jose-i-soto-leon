

import NumericInput from "react-native-numeric-input"
import { theme } from "../../colors/colors"


export const NumericalIntegerInput = ({numberValue, setNumberValue})=>{
    return(
        <NumericInput 
            borderColor={theme.secondaryColor} 
            textColor={theme.underlineText} 
            rounded={true} 
            maxValue={100} 
            minValue={0}
            valueType="integer"
            value={numberValue}
            leftButtonBackgroundColor={theme.inputBackground}
            rightButtonBackgroundColor={theme.inputBackground}
            iconStyle={{color:theme.underlineText}}
            containerStyle={{paddingHorizontal:20,height:50, backgroundColor:theme.inputBackground,}} 
            onChange={(currentNumberValue)=> setNumberValue(currentNumberValue)}
        />
    )
}