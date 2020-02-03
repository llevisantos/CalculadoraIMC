//----------- Importando componentes -------
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//----------- Aplicação -------

//export default class App extends Component<Props> {
  export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

    let imc = this.state.massa / (this.state.altura * this.state.altura) 
    let s = this.state
    s.resultado = imc
    
    if(s.resultado <16){
      s.resultadoText = "Subpeso | Grau grave"
    } else if(s.resultado <=17){
      s.resultadoText = "Subpeso | Grau moderado"
    } else if(s.resultado <=18.5){
      s.resultadoText = "Subpeso | Grau Leve"
    } else if(s.resultado <=25){
      s.resultadoText = "Peso ideial"
    } else if(s.resultado <=30){
      s.resultadoText = "Sobrepeso | Grau Leve"
    } else if (s.resultado <=35 ){
      s.resultadoText = "Obeso | Grau I"
    } else if(s.resultado <=40){
      s.resultadoText = "Obseso | Grau II"
    }
    else {
      s.resultadoText = "Obeso | Grau III"
    }
    
    this.setState(s)
  }
  
  render() {
    return (

    

      <View style={styles.container}>

        <View style={styles.header}>
          
           <Text style={styles.titulo}> ÍNDICE DE MASSA CORPORAL - IMC </Text>
           <Text style={styles.subtitulo}> CALCULADORA </Text>
        </View> 

        <View style={styles.menu}>

          <Text style={styles.select}> IMC </Text>
          <Text style={styles.select2}> PESO </Text>
          <Text style={styles.select2}> HISTÓRICO </Text>

        </View>

        <View style={styles.dados}>
          
          <TextInput style={styles.input} placeholder="Peso: Ex.: 65.0" keyboardType="numeric" onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput style={styles.input} placeholder="Altura: Ex.: 1.79" keyboardType="numeric" onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}> Calcular </Text></TouchableOpacity>

        <Text style={styles.resultado}> {this.state.resultado.toFixed(2)} </Text>
        <Text style={styles.resultado}> {this.state.resultadoText} </Text>

      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header:{
    backgroundColor: "#40BB63",
    textAlign: 'center',
    height:80,
  },
  titulo:{
    fontSize: 18,
    fontWeight: "bold",
    color:"#FFF",
    textAlign:'center',
    marginTop:30,
  },
  subtitulo:{
    fontSize: 18,
    fontWeight:"normal",
    color:"#FFF",
    textAlign:'center',
  },
  menu:{
    flexDirection:'row',
    alignSelf:'center',
    padding:20,
    fontSize:20,
    color:"#C9C8C8",
  },
  select:{
    textAlign:'center',
    width:100,
    fontWeight: 'bold',
    paddingBottom:5,
    borderBottomColor:"#78C691",
    borderBottomWidth:4,
   
  },
  select2:{
  
    width:100,
    textAlign:'center',

  },
  dados: {
    alignSelf:'center',
    
  },
  input:{
    height:80,
    textAlign:'center',
    width: 300,
    fontSize:40,
    marginTop:24,
    borderBottomColor:"#40BC64",
    borderBottomWidth:2,

  },
  button: {
    borderRadius:10,
    alignSelf:'center',
    width:'50%',
    marginTop:24,
    backgroundColor:"#00cf45",
  },
  buttonText:{
    alignSelf:'center',
    padding: 10,
    fontSize: 18,
    color:"#FFF",
    fontWeight: 'bold',
  },
  resultado:{
    marginTop:24,
    alignSelf: 'center',
    padding: 2,
    fontSize:20,
    fontWeight:'bold',
    color:"#40BB63",
  
  },

});
