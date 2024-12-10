/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

// Defina o tipo para suas rotas
type RootStackParamList = {
  Crypto: { tag: string };
  // Outras rotas que você possa ter
};

type ListaProps = {
  dados: DadosProps| any;
  // navigation: NativeStackNavigationProp<RootStackParamList, 'Crypto'>;
};

export default function Lista({dados}: ListaProps): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTag = () => {
    const tag: string = dados.tag.toLowerCase();
    if (tag) {
      navigation.navigate('Crypto', {tag});
    }
  };

  const formatDate = (createdAt: string) => {
    //setar -3 horas antes de formatar
    const Atual = new Date(createdAt);
    Atual.setHours(Atual.getHours() - 3);
    const [date, time] = Atual.toISOString().split('T');
    const formattedDate = date.split('-').reverse().join('/');
    const formattedTime = time.split('.')[0];
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.texto}>Moeda: {dados.nome}</Text>
          <Text style={styles.tag}>{dados.tag}</Text>
        </View>
        <Text style={styles.texto}>
          Valor em Dólar:{' '}
          <Text style={{fontWeight: 'bold', color: '#f1fa8c'}}>
            {dados.price_usd}
          </Text>
        </Text>
      </View>
        <Text style={styles.texto}>
          Valor em Real:{' '}
          <Text style={{fontWeight: 'bold', color: '#f1fa8c'}}>
            {dados.price_br}
          </Text>
        </Text>
      <View style={styles.row1}>
        <Text style={styles.texto}>
          Hora(%): <Text style={styles.texto2}>{dados.porcentagem_hora}</Text>
        </Text>
        <Text style={styles.texto}>
          Dia(%): <Text style={styles.texto2}>{dados.porcentagem_dia}</Text>
        </Text>
        <Text style={styles.texto}>
          Semana(%):{' '}
          <Text style={styles.texto2}>{dados.porcentagem_semana}</Text>
        </Text>
      </View>
      <Text style={styles.texto}>
        Atualizado em:{' '}
        <Text style={styles.texto2}>{formatDate(dados.createdAt)}</Text>
      </Text>
      <View style={{marginTop: 15}}>
      <Button title="Histórico" onPress={handleTag} color="#bd93f9"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    padding: 10,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 7,
    gap: 7,
  },
  texto: {
    color: '#fff',
  },
  texto2: {
    color: '#bd93f9',
    fontWeight: '600',
  },
  tag: {
    color: '#bd93f9',
    fontSize: 10,
    fontWeight: 'bold',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
