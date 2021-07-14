import React ,{Fragment}from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
const img = require('./Imagenes/chariza.png')

const Pokedex =()=>{
    return(
        <Fragment >
            <View style={styles.container} >
            <Text >Enlistar Poquemon</Text>

            
            <Image source={img}/>
            
            </View>
            
        </Fragment>
    );
}

const styles = StyleSheet.create({

   
});

export default Pokedex;

