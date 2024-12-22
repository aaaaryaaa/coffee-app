import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'

import IcedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IcedCoffeeImg}
        resizeMode="cover"
        style= {styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 50
  },  
  link: {
    color: 'white',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4
  },
  button: {
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 6,
    margin: 6,
    width: 200
  },  
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
  }
})