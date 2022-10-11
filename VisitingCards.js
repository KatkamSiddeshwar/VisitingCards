import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';


export default function VisitingCards({title, productImages}) {
    const productImage = ["https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000", 
    "https://pbs.twimg.com/media/D37kgM8UwAA-XSa.jpg", 
    "https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/paleo-meat-array.jpg?quality=82&strip=1"];
    
      return(
        <View style= {styles.viewContainer}> 
        <Image source={{
        uri: productImage[productImages]}} 
        style= {styles.imageContainer} />
        <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
      width: "90%",
      height: 300,
      backgroundColor: "gold",
      alignItems: "center",
      justifyContent: "center",
      margin:20,
    },
  
    imageContainer: {
      width: "80%",
      height: 200,
      margin: 5,
    },
  
    titleContainer: {
      fontSize: 18,
      fontWeight: 'bold',
    }
  });
  