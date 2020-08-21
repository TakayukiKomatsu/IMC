import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Button, TextInput } from "react-native-paper";
export default class App extends Component {
  state = {
    height: 0,
    weight: 0,
    imc: 0,
  };

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View>
          <Text style={styles.resultado}>20</Text>
          <Text style={styles.diagnostico}>Normal</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            label="Peso"
            keyboardType="number-pad"
          />
          <TextInput style={styles.input} label="Altura" />
          <Button contentStyle={styles.button} color="#eee">
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
});
