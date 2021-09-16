import React from 'react';
import { Container, View } from 'native-base';
import { ScrollView } from 'react-native';
import Spinner from '../commons/Spinner';
import Card from './Card';
import useProducts from './hooks/UseListProducts';
import styles from './styles';

const ListProducts = () => {
  const { loading, data, onPress } = useProducts();
  console.log('data>>>', { data });
  return (
    <Container>
      <Spinner loading={loading} />
      {!loading && (
        <ScrollView>
          <View style={styles.content_imgs}>
            {data.map((product, key) => (
              <Card value={product} onPress={onPress} key={key} />
            ))}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

export default ListProducts;
