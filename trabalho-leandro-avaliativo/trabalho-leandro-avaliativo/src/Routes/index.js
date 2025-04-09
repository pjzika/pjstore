import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/index';
import Products from '../Pages/Products/index';
import Details1 from '../Pages/Details1/index'; 

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Produtos" component={Products} />
        <Drawer.Screen name="Detalhes Produto" component={Details1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
