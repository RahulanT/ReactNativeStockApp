import React, {Component} from "react";  
import { StyleSheet, View, Text, Image } from "react-native"; 
import UserTextInput from "./searchresult";
import Stocksearchpage from "./stocksearchpage.js";

const homepage = () => {


    // Handlepage =()=>{

    //     var thedata = {};

    //     thedata = <UserTextInput/>;e

    //     if(thedata.length !== 0){

    //          <Stocksearchpage tableTitle = {thedata['legend']} DataTable = {thedata['data']}/>;

    //     }

    //     else{

    //      <UserTextInput/>;

    //     };

    // };


        return (  
          <View>
              <Text>Welcome BrownFox Investor!!</Text>
              {/* <Handlepage/> */}
          </View>  
        );  



}

export default homepage;