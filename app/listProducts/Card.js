import React from 'react';
import { Image, TouchableNativeFeedback, View } from 'react-native';
import { Text, Card } from 'native-base';

/* Components */
/* Utilities */
import styles from './styles';
import colors from '../utils/colors';
const CardImageExample = ({ value, keyCard, onPress }) => {
  const { colour, name, price, img } = value;

  return (
    <Card>
      <TouchableNativeFeedback
        onPress={() => onPress({ product: value })}
        background={TouchableNativeFeedback.Ripple(colors.bluetikets, true)}
      >
        <View key={keyCard} style={styles.cardInfoUser}>
          <View cardBody>
            <Image
              source={{
                uri: img,
              }}
              style={styles.img}
            />
          </View>
          <View>
            <Text style={styles.text}>
              {name.length > 20 ? `${name.slice(0, 20)}...` : name}
            </Text>
            <Text style={styles.text}>{colour}</Text>
            <Text style={styles.text}>{price}$</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Card>
  );
};

export default CardImageExample;
