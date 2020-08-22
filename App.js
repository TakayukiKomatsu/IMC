import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(0);
  const [legenda, setLegenda] = useState("");
  const [cor, setCor] = useState("");

  function calcularIMC() {
    const resultado = peso / (altura * altura);
    setIMC(Math.ceil(resultado));

    if (resultado < 18.5) {
      setLegenda("Magreza");
      setCor("#e74c3c");
    } else if (resultado >= 18.5 && resultado < 25) {
      setLegenda("Normal");
      setCor("##2ecc71");
    } else if (resultado >= 25 && resultado < 30) {
      setLegenda("Sobrepeso");
      setCor("#f1c40f");
    } else if (resultado >= 30 && resultado < 40) {
      setLegenda("Obesidade");
      setCor("#e67e22");
    } else if (resultado >= 40) {
      setLegenda("Obesidade grave");
      setCor("#e74c3c");
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>

      <View style={[{ backgroundColor: cor }, styles.painel]}>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          style={styles.peso}
          label="Peso"
          keyboardType="number-pad"
          onChangeText={(value) => setPeso(value.replace(",", "."))}
        />
        <TextInput
          style={styles.altura}
          label="Altura"
          keyboardType="number-pad"
          onChangeText={(value) => setAltura(value.replace(",", "."))}
        />

        <Button mode="container" onPress={calcularIMC}>
          Calcular
        </Button>
      </View>
    </View>
  );
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
