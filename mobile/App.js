//----------- Importando componentes -------
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//----------- Aplicação -------
//type Props = {}
//export default class App extends Component<Props> {
  export default class App extends React.Component {

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
      s.resultadoText = "Subpeso"
    } else if(s.resultado <17){
      s.resultadoText = "Subpeso moderado"
    } else if(s.resultado <18.5){
      s.resultadoText = "Subpeso Leve"
    } else if(s.resultado <25){
      s.resultadoText = "Normal"
    } else if(s.resultado <30){
      s.resultadoText = "Sobrepeso"
    } else if (s.resultado <35 ){
      s.resultadoText = "Obeso I"
    } else if(s.resultado <40){
      s.resultadoText = "Obsidade II"
    }
    else {
      s.resultadoText = "Obesidade III"
    }
    this.setState(s)    
  }
  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.dados}>
          <TextInput style={styles.input} placeholder="Massa" keyboardType="numeric" onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric" onChangeText={(massa)=>{this.setState({massa})}}/>
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
    backgroundColor: '#fafafa',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  dados: {
    flexDirection: 'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:40,
    marginTop:24,
  },
  button: {
    
    backgroundColor:'#00cf45',

  },
  buttonText:{
    alignSelf:'center',
    padding: 10,
    fontSize: 18,
    color:'#FFF',
    fontWeight: "bold",
  },
  resultado:{
    alignSelf: 'center',
    padding: 2,
    fontSize:18,
    color:'#D4D4D4',
  
  },

});
