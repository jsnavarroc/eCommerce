import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListProducts from '../listProducts/ListProducts';
import ProductDetail from '../ProductDetail/ProductDetail';

const MainDrawer = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListProducts">
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
