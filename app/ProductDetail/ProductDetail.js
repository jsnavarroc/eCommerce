import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { bluetikets } from '../utils/colors';
import useProductDetail from './useProductDetail';

const ProductDetail = () => {
  const { product, onBack, onBuy } = useProductDetail();
  return (
    <ScrollView>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: product.img }} />
              <Body>
                <Text>
                  {product?.name?.length > 20
                    ? `${product?.name.slice(0, 20)}...`
                    : product.name}
                </Text>
                <Text note>Feb 24 2022</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: product.img }}
              style={{ height: 600, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Grid>
              <Row style={styles.rowStyle}>
                <Col style={styles.colStyle}>
                  <Button light style={styles.buttonStyle} onPress={onBack}>
                    <Icon
                      active
                      name={'arrow-back-outline'}
                      type={'Ionicons'}
                    />
                  </Button>
                </Col>
                <Col style={styles.colStyle}>
                  <Button
                    light
                    style={styles.buttonStyle}
                    onPress={() => {
                      onBuy({ product });
                    }}
                  >
                    <Icon active name={'cart-outline'} type={'Ionicons'} />
                  </Button>
                </Col>
              </Row>
            </Grid>
          </CardItem>
          <CardItem header bordered>
            <Text style={styles.title}>Price</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{product.price}$</Text>
            </Body>
          </CardItem>
          <CardItem header bordered>
            <Text style={styles.title}>Description</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{product.name}</Text>
            </Body>
          </CardItem>
          <CardItem header bordered>
            <Text style={styles.title}>Color</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{product.colour}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </ScrollView>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
  },
  rowStyle: {
    height: 50,
    padding: 2,
    alignSelf: 'center',
  },
  colStyle: {
    width: 70,
  },
  title: {
    color: bluetikets,
  },
});
