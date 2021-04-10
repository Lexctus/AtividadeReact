import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Estilo from './src/components/Estilo';



export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      alunos : []
    }
  }


  alunosMed(){
 
    const nomesMed = [

      'Carlos Daniel Feitosa',
      'Marcela Medina Mariano',
      'Caled Caleb',
      'Luana Maria dos Santos',
      'Aline Silva',
      'Bruno Caio Borges'
    ];

  
    const textElements = nomesMed.map((nome, index) => {
   
      return <Text style={styles.container} key={index}>{ nome }</Text>
      
   
    })
   
   return textElements
  }

  alunosEnf(){
 
    const nomesEnf = [

      'Fernanda Souza',
      'Bernado dos Santos Silva',
      'Carlos Terra',
      'Gabriel Silva',
      'Gabriel Ferreira',
      'Ana Maria Lopes'
    ];

  
    const textElements = nomesEnf.map((nome, index) => {
   
      return <Text style={styles.container} key={index}>{ nome }</Text>
      
   
    })
   
   return textElements
  }
  

  render(){
 
    return(
    
      <>
      <View style = {StyleSheet.container}>

        <Estilo titulo = "CURSO: Medicina" />
        {(this.alunosMed())}
        <Estilo titulo = "CURSO: Enfermagem" />
        {(this.alunosEnf())}
      </View>
      </>
    )
  
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 20,
    backgroundColor: '#fff',
  }
})

