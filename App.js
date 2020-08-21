import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Button, TextInput } from "react-native-paper";
export default class App extends Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: "Indeterminado",
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado),
    });

    if (resultado < 18.5) {
      this.setState({ legenda: "Magreza" });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({ legenda: "Normal" });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({ legenda: "Sobrepeso" });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({ legenda: "Obesidade" });
    } else if (resultado >= 40) {
      this.setState({ legenda: "Obesidade grave" });
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            label="Peso"
            keyboardType="number-pad"
            onChangeText={(value) => {
              this.setState({
                peso: value.replace(",", "."),
              });
            }}
          />

          <TextInput
            style={styles.input}
            label="Altura"
            keyboardType="number-pad"
            onChangeText={(value) => {
              this.setState({
                altura: value.replace(",", "."),
              });
            }}
          />

          <Button
            contentStyle={styles.button}
            color="#eee"
            mode="contained"
            onPress={this.calcularIMC}
          >
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
    backgroundColor: "#8684d1",
  },
  legenda: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#eee",
  },
  resultado: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "#eee",
  },
  diagnostico: {
    textAlign: "center",
    fontSize: 20,
    color: "#eee",
    paddingBottom: 20,
  },
  input: {
    margin: 10,
  },
  button: {
    backgroundColor: "#9055A2",
    padding: 10,
  },
});
