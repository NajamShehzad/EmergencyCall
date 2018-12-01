import React from 'react';
import { AsyncStorage } from "react-native";


export default class Global extends React.Component{
    
    static init(){
        AsyncStorage.setItem("driver",JSON.stringify({})).then(()=>{
            console.log("Added Initial Object in Async");
        }).catch(()=>{
            console.log("Error While Adding Initial Object in Async");
        });
        console.log("Init Ran");
        return(null)
    } 

    static LoginHandler(email, password){
        const driver = {
            email : email
        }
        return AsyncStorage.setItem("driver",JSON.stringify(driver))
    }
}