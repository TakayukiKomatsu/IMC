import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Button, TextInput } from "react-native-paper";
export default class App extends Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: "Indeterminado",
    cor: "#bfc3c7",
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado),
    });

    if (resultado < 18.5) {
      this.setState({ legenda: "Magreza", cor: "#e74c3c" });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({ legenda: "Normal", cor: "##2ecc71" });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({ legenda: "Sobrepeso", cor: "#f1c40f" });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({ legenda: "Obesidade", cor: "#e67e22" });
    } else if (resultado >= 40) {
      this.setState({ legenda: "Obesidade grave", cor: "#e74c3c" });
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[{ backgroundColor: this.state.cor }, styles.painel]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput
            style={styles.peso}
            label="Peso"
            keyboardType="number-pad"
            onChangeText={(value) => {
              this.setState({
                peso: value.replace(",", "."),
              });
            }}
          />

          <TextInput
            style={styles.altura}
            label="Altura"
            keyboardType="number-pad"
            onChangeText={(value) => {
              this.setState({
                altura: value.replace(",", "."),
              });
            }}
          />

          <Button mode="contained" onPress={this.calcularIMC}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },

  painel: {
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 8,
    width: 150,
    alignSelf: "center",
  },

  legenda: {
    textAlign: "center",
    fontWeight: "bold",
  },

  resultado: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  diagnostico: {
    textAlign: "center",
    fontSize: 20,
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
    marginVertical: 10,
  },
  button: {
    padding: 10,
  },
});
