import React, {Component} from "react";  
import { StyleSheet, View, Text, Image } from "react-native"; 

const titlepage = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Bottomnavigator')
    }, 5000);
 
        return (  
          <View style={styles.container}>
              <Text style = {styles.textTitleStyle}>BrownFox</Text>
              <Image style={{height: 300, width: 350}} source = { require ('./foxpic4.png') }/>
          </View>  
        );  

}  



const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: "flex-start",  
      alignContent: "center",  
      margin: 10,
      backgroundColor: '#191970' 
    },  
    textTitleStyle: {  
      color: '#FFFFFF', 
      fontSize: 80 ,
      fontWeight: "bold", 
    //   borderWidth: 1,  
      height: 40,  
      marginLeft: 20,  
      marginRight: 20,  
      textAlign: "center",
      padding: 10,  
      marginTop: 250,
      fontFamily: "rockwell"  
    }
  })  

  export default titlepage;