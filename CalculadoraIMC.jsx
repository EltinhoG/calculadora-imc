import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

export default class App extends React.Component {
  
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7'
  };
 
 
  calcularIMC = () => {
   
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      });
    } else if(resultado >= 18.5 && resultado < 25) {
       this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      });
    } else if(resultado >= 25 && resultado < 30) {
       this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if(resultado >= 30 && resultado < 40) {
       this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    } else if (resultado >= 40){
       this.setState({
        legenda: 'Obesidade Grave',
        cor: '#e74c3c'
      });
    }
  }

  render() {
   

  return (
     <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        
        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
          style={styles.peso} 
          label="Peso"
          keyboardType="numeric"
          onChangeText={valor => {
            this.setState({peso: valor.replace(',', '.')});
          }}
          />
          <TextInput 
          style={styles.altura} 
          label='Altura ( com ponto )'
          onChangeText={valor => {
            this.setState({altura: valor.replace(',', '.')});
          }}
          />
          <Button style={styles.botao} mode='contained' onPress={this.calcularIMC}>
            Calcular
          </Button>
          
        </View>

      </View>
   );
  }
}
const styles = StyleSheet.create({
  app: {
    padding: 20,
    marginTop: 50
  },

  painel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 180,
    marginVertical: 20,
    padding: 8,
  },
 
  legenda: {
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23
  },
  
  resultado: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
 
  diagnostico: {
     textAlign: 'center',
    fontSize: 16,
  },
  
  peso: {
    marginVertical: 30,
    marginHorizontal: 20
  },
  
   altura: {
    marginVertical: 30,
    marginHorizontal: 20
    
  },

  botao: {
    marginVertical: 30,
    
    
  }
  
  
});