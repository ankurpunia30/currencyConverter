
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
//constant
import { currencyByRupee } from './constant';
//components
import CurrencyBtn from './components/currencyBtn';

import Snackbar from 'react-native-snackbar';


const App= ():JSX.Element=> {
  const [inputValue,setInputValue]=useState('');
  const [resultValue,setResultValue]=useState('');
  const [selectedCurrency,setSelectedCurrency]=useState('');  
  const buttonPressed=(targetValue: Currency) => {
      if(!inputValue)
        {
          return Snackbar.show({
          text:'Enter a value to convert',
          backgroundColor:'#EA7773',
          textColor:'#000000'
        })
  }
  const inputAmount=parseFloat(inputValue)
    if (!isNaN(inputAmount)){
      //const ans=(inputAmount/targetValue.value).toFixed(2);
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setSelectedCurrency(targetValue.name)
    }
    else{
      Snackbar.show({
        text:'Enter a valid number',
        backgroundColor:'#EA7773',
        textColor:'#000000'
      })
    }
   
  
}
  
  return (
    <>
    <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='numeric'
            placeholder='Enter Amount in rupees'
           style={styles.inputAmountTextField}
           />
          </View>
            {resultValue&&(
                <Text style={styles.resultTxt}>
                {resultValue}
                </Text>
             
            )} 
            </View>
            <View style={styles.bottomContainer}>
              <FlatList
              numColumns={2}
              data={currencyByRupee}
              keyExtractor={item=>item.name}
              renderItem={({item})=>(
                  <Pressable
                  style={[
                    styles.button,
                    selectedCurrency===item.name&&styles.selected
                  ]}
                  onPress={()=>buttonPressed(item)}
                  >
                   <CurrencyBtn {...item}/>

                  </Pressable>
              )}
              />
            </View>
        

      </View>
      
    </>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80859E',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  inputAmountTextField:{
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'darkgrey',
  },
  resultTxt: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
    borderRadius: 8,
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 8,
    backgroundColor: '#ffffff',

  },
  rupee: {
    marginRight: 8,

    fontSize: 23,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 8,

  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    height: 100,
    width: 100,
    margin:10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
