import React, { useState, useEffect, Component } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput,View } from "react-native";
import  getStock from "../assets/main_js_script.js";
import Stocksearchpage from "./stocksearchpage.js";
// import UserTextInput from "./jsfiles/searchresult.js";


class searchpage extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        // tableTitle : [null],
        DataTable : {},
        shouldShow : true,
        text: String
        
      }

    }

    // ngOnInit= () =>{

    //     this.setState({shouldShow : true});
    // };

setText(passtext){

  this.setState({text:passtext});
}

sampfunc = () => {

   getStock(this.state.text)

   .then( data => {

      this.setState({DataTable : data});

     this.setState({ shouldShow :false});


    });
};

render(){

    let state = this.state;

    return(
   
      <View>
        <TextInput
          value={state.text}
          onChangeText={(text) => this.setText(text)}

        />
        <Button
          title = 'Search'
          onPress = {() => this.sampfunc()}
        />
     
      <View>
        <Stocksearchpage  shouldweShow ={state.shouldShow} DataTable = {state.DataTable}/> 
       </View>
       </View>
 
    );

}

}

export default searchpage;
