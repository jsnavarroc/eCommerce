import actions from '../actions';

export function setProduct({ dispatch, product }) {
  dispatch({
    type: actions.SET_PRODUCT,
    product,
  });
}
export function cleanProduct({ dispatch }) {
  dispatch({
    type: actions.CLEAN_PRODUCT,
  });
}
export function setCard({ dispatch, card }) {
  dispatch({
    type: actions.SET_CARD,
    card,
  });
}
