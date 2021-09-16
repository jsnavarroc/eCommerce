import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getProducts } from '../functions/getProducts';
import { useStorage } from '../../storage/index';
import { useNavigation } from '@react-navigation/native';
import actions from '../../storage/actions';

const onPress = ({ navigate, dispatch, product }) => {
  dispatch({
    type: actions.SET_PRODUCT,
    product,
  });
  navigate('ProductDetail');
};

const useProducts = () => {
  const { navigate } = useNavigation();
  const { dispatch } = useStorage();
  const [dataProducts, setDataProducts] = useState({
    loading: false,
    error: '',
    data: [],
  });

  useFocusEffect(
    useCallback(() => {
      getProducts(setDataProducts);
    }, []),
  );

  return {
    ...dataProducts,
    onPress: ({ product }) => onPress({ navigate, dispatch, product }),
  };
};
export default useProducts;
