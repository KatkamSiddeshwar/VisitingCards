import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import VisitingCards from './VisitingCards';

export default function App() {

  const [product] = useState([
    {productNmae: 'Vegitables', productImage: "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000", key: '0'},
    {productNmae: 'Frouts', productImage: "https://pbs.twimg.com/media/D37kgM8UwAA-XSa.jpg", key: '1'},
    {productNmae: 'Meat', productImage: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/paleo-meat-array.jpg?quality=82&strip=1", key: '2'},
  ]);

  return (
    <SafeAreaView>
     <FlatList 
     data={product}
     renderItem = {({item}) => (
      <VisitingCards title={item.productNmae} productImages = {item.key} />
     )}/>
    </SafeAreaView>
  );
};
