import { useStorage } from '../storage/index';
import { useNavigation } from '@react-navigation/native';
import actions from '../storage/actions';

const onBack = ({ navigate, dispatch }) => {
  navigate('ListProducts');
  dispatch({
    type: actions.CLEAN_PRODUCT,
  });
};

/**
 *
 * @param {Storage} param0
 * @param {product} param1
 * This function will be in charge of registering the product
 * in the shopping cart and redirecting it to the shopping cart.
 * storage.card
 */
const processAddProduct = ({ card, product }) => {
  const quantityProduct = card[product.id]?.quantity || 0;
  return {
    ...card,
    [product.id]: {
      price: product.price,
      quantity: quantityProduct + 1,
    },
  };
};

const onBuy = ({ navigate, dispatch, card, product }) => {
  navigate('Card');
  const newCard = processAddProduct({ card, product });
  dispatch({
    type: actions.SET_CARD,
    card: newCard,
  });
};

const useProductDetail = () => {
  const { navigate } = useNavigation();
  const {
    storage: { product, card },
    dispatch,
  } = useStorage();

  return {
    product,
    onBack: () => onBack({ navigate, dispatch }),
    onBuy: ({ product }) => onBuy({ navigate, dispatch, card, product }),
  };
};
export default useProductDetail;
