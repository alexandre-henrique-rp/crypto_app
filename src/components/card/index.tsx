import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DadosProps = {
  id: number;
  nome: string;
  tag: string;
  price_usd: string;
  price_br: string;
  porcentagem_hora: string;
  porcentagem_dia: string;
  porcentagem_semana: string;
  createdAt: string;
};

type ListaProps = {
  dados: DadosProps | any;
  // navigation: NativeStackNavigationProp<RootStackParamList, 'Crypto'>;
};

export default function Card({dados}: ListaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Valor do período: <Text style={styles.CurrentValor}>{dados.price_usd}</Text>
      </Text>
      <Text style={styles.texto}>
        Período: <Text style={styles.texto2}>{dados.createdAt}</Text>
      </Text>
      <Text style={styles.texto}>
        Diferença: <Text style={styles.CurrentValor}>{dados.valor_usd}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    padding: 3,
    marginVertical: 10,
    elevation: 5,
  },
  texto: {
    color: '#fff',
  },
  texto2: {
    color: '#bd93f9',
    fontWeight: '600',
  },
  CurrentValor: {
    color: '#f1fa8c',
    fontWeight: 'bold',
  },
});
