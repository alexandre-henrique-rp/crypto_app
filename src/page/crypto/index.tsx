/* eslint-disable react-native/no-inline-styles */
import {useRoute, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Api from '../../api/server';
import Card from '../../components/card';
// import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

// Defina o tipo para os parâmetros da rota
type RootStackParamList = {
  Crypto: {tag: string};
};

export default function Crypto(): React.JSX.Element {
  // Especifique o tipo da rota
  const route = useRoute<RouteProp<RootStackParamList, 'Crypto'>>();
  const [Data, setData] = React.useState<any>([]);
  const [Principal, setPrincipal] = React.useState<any>([]);

  React.useEffect(() => {
    if (!route.params?.tag) {
      return;
    }
    (async () => {
      const response = await Api.getTag(route.params?.tag);
      setData(response.data);
      setPrincipal(response.objInitial);
    })();
  }, [route.params?.tag]);

  return (
    <View style={styles.container}>
      <View style={styles.BoxTitle}>
        <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.texto}>{Principal.nome}</Text>
          <Text style={styles.texto}>{Principal.tag}</Text>
        </View>
        <Text style={styles.texto}>
          Atualizado em:{' '}
          <Text style={{fontWeight: 'bold', color: '#b7adf7'}}>
            {Principal.createdAt}
          </Text>
        </Text>
        <Text style={styles.texto}>
          Cotação atual em Dólar:{' '}
          <Text style={styles.CurrentValor}>{Principal.price_usd}</Text>
        </Text>
        <Text style={styles.texto}>
          Cotação atual em Reais:{' '}
          <Text style={styles.CurrentValor}>{Principal.price_br}</Text>
        </Text>
        <View style={styles.row1}>
          <Text style={styles.texto}>
            Hora(%):{' '}
            <Text style={styles.texto2}>{Principal.porcentagem_hora}</Text>
          </Text>
          <Text style={styles.texto}>
            Dia(%):{' '}
            <Text style={styles.texto2}>{Principal.porcentagem_dia}</Text>
          </Text>
          <Text style={styles.texto}>
            Semana(%):{' '}
            <Text style={styles.texto2}>{Principal.porcentagem_semana}</Text>
          </Text>
        </View>
      </View>
      <View style={{flex: 1, marginBottom: 60}}>
        <FlatList
          data={Data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card dados={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1d', // Mantive o tema do código anterior
    paddingInline: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    color: '#fff',
  },
  BoxTitle: {
    color: '#fff',
    marginInline: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  row1: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
