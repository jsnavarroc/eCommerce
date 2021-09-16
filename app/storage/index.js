import React, { useReducer, createContext, useContext } from 'react';
import actions from './actions';
const initalState = {
  product: {},
  card: {},
};

const reducer = (storage, action) => {
  switch (action.type) {
    case actions.SET_PRODUCT: {
      return {
        ...storage,
        product: action.product,
      };
    }
    case actions.CLEAN_PRODUCT: {
      return {
        ...storage,
        product: {},
      };
    }
    case actions.SET_CARD: {
      return {
        ...storage,
        card: action.card,
      };
    }
    default: {
      return {
        ...storage,
      };
    }
  }
};
const StorageContext = createContext();

const Storage = props => {
  const { children } = props;
  const [storage, dispatch] = useReducer(reducer, initalState);
  console.log('storage>>', { storage });
  return (
    <StorageContext.Provider value={{ storage, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};
export const useStorage = () => useContext(StorageContext);
export default Storage;
