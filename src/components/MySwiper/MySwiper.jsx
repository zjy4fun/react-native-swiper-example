import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export const MySwiper = () => {
  const textList = ['Hello Swiper', 'Beautiful', 'And simple']
  const handleIndexChange = (index) => {
    console.log(index)
  }

  return (
    <Swiper style={styles.wrapper} showsButtons={true} onIndexChanged={(index) => handleIndexChange(index)}>
      {
        textList.map((item, index) => {
          return (
            <View style={styles.slide}>
              <Text style={styles.text}>{item}-{index}</Text>
            </View>
          )
        })
      }
    </Swiper>
  )
}