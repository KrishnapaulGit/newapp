import React from "react";


import {
View,
SafeAreaView,
Text,
StyleSheet,
useColorScheme
} from 'react-native'


function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() ==='dark'
    return(
     <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
            Hello World
        </Text>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
    },
    whiteText:{
        color:'#ffffff'
    },
    darkText:{
        color:'#000000'
    }
})

export default AppPro