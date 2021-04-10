/*IMPORTA E INSTANCIA O REACT*/
import React from 'react';

/*IMPORTA OS CLASS COMPONENTS: VIEW, TEXT*/
import { View, Text, StyleSheet } from 'react-native';

const Estilo = (props) => (

    <View style={styles.container}>

        <Text style={styles.title}>{ props.titulo }</Text>

    </View>

)

const styles = StyleSheet.create({

    container:{
        marginTop:30,
        backgroundColor:'yellow',
        
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 20,
        marginBottom: 5,
        marginTop: 5
    }

})


export default Estilo