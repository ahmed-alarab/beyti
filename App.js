import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Search from './screens/Search';
import Post from './screens/Post';
import AboutContact from './screens/Contact&About';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  const house1 = require('./screens/images/h1.jpg');
  const house2 = require('./screens/images/h2.jpg');
  const house3 = require('./screens/images/h3.jpg');
  const house4 = require('./screens/images/h4.jpg');
  const house5 = require('./screens/images/h5.jpg');

  const houseData = [
    {
      id: 1,
      title: 'Modern Apartment in Beirut',
      description: 'Located in the heart of Beirut...',
      location: 'Zahle',
      price: 1200,
      bedrooms: 2,
      propertyType: 'chalets',
      image: house1,
    },
    {
      id: 2,
      title: 'Traditional House in Byblos',
      description: 'A charming traditional house...',
      location: 'Tripoli',
      price: 600,
      bedrooms: 3,
      propertyType: 'Detached Houses',
      image: house2,
    },
    {
      id: 3,
      title: 'Luxurious Villa in Jounieh',
      description: 'A spacious villa...',
      location: 'Jounieh',
      price: 1200,
      bedrooms: 4,
      propertyType: 'Villas',
      image: house3,
    },
    {
      id: 4,
      title: 'Mountain Chalet in Faraya',
      description: 'A cozy mountain chalet...',
      location: 'Baalbeck',
      price: 800,
      bedrooms: 2,
      propertyType: 'Chalets',
      image: house4,
    },
    {
      id: 5,
      title: 'Beachfront Apartment in Batroun',
      description: 'A stylish beachfront apartment...',
      location: 'Beirut',
      price: 500,
      bedrooms: 1,
      propertyType: 'mansions',
      image: house5,
    },
  ];

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Search">
          {() => <Search posts={houseData} />}
        </Drawer.Screen>
        <Drawer.Screen name="Post" component={Post} />
        <Drawer.Screen name="About & Contact" component={AboutContact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
