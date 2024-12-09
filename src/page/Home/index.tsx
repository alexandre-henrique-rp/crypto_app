import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import Api from '../../api/server';
import Lista from '../../components/lista';

type DadosProps = {
  id: number;
  name: string;
  tag: string;
  price_usd: string;
  price_br: string;
  porcentagem_hora: string;
  porcentagem_dia: string;
  porcentagem_semana: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export default function Home() {
  const [Dados, setDados] = useState<DadosProps[]>([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await Api.getAll();
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        // Mostra um alert com a mensagem de erro
        Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados', [
          {
            text: 'OK',
            onPress: () => console.log('Erro confirmado'),
          },
          {
            text: 'Tentar Novamente',
            onPress: () => fetchDados(), // Tenta buscar os dados novamente
          },
        ]);
      }
    };

    fetchDados();
  }, []);

  return (
    <View style={StylesComponente.container}>
      <Text style={StylesComponente.Titulo}>Crypto App</Text>
      <Text style={StylesComponente.SubTitulo}>
        Visualize a cotação de crypto moedas
      </Text>
      <FlatList
        style={StylesComponente.list}
        data={Dados}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Lista dados={item} />}
      />
    </View>
  );
}

const StylesComponente = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1d',
    paddingHorizontal: 15, // Correção de paddingInline para paddingHorizontal
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'ubuntu', // Certifique-se de que esta fonte está carregada
    color: '#f5f5f5',
  },
  SubTitulo: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    color: '#f5f5f5',
  },
  list: {
    marginBottom: 20,
    // Removido 'gap' pois não é suportado diretamente no StyleSheet do React Native
  },
});
