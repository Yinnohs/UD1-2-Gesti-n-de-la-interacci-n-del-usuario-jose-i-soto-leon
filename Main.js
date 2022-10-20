import { AppRegistry } from 'react-native'
import {PaperProvider} from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import App from './App'


export default function Main (){
    return(
        <SafeAreaProvider>
            <PaperProvider>
                
                    <App/>
                
            </PaperProvider>
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent('shopping-list', ()=> Main)