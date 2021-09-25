import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const addEntry = () => {};
  return (
    <View>
      <Text style={styles.top}>Saldo: R$ 2.102,45</Text>
      <Button onPress={addEntry} title="Adicionar" />
      <Text style={styles.top}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustivel: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text style={styles.list}>{item.key}</Text>}
      />
      <Text style={styles.top}>Ultimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text style={styles.list}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  list: {
    marginLeft: 10,
  },
});

export default App;
