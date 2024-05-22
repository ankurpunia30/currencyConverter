import React from "react";
import { PropsWithChildren } from "react";
import {View,Text,StyleSheet} from "react-native";

type currencyBtnProps = PropsWithChildren<{
    name: string;
    flag: string;
}>;
const currencyBtn=(props:currencyBtnProps): JSX.Element=>{
    return(
            <View style={styles.buttonContainer}>
                    <Text style={styles.flag}>{props.flag}</Text>
                    <Text style={styles.country}>{props.name}</Text>
            </View>
    )
}

const styles=StyleSheet.create({
buttonContainer:{
    alignItems:'center',
},
flag:{
        fontSize:28,
        color:'black',
        marginBottom:4
},
country:{
    fontSize:14,
    color:'#2d3436',
    
}
});
export default currencyBtn;