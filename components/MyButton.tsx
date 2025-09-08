import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
      >
        <Text
        style={styles.text}>
            {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "orange",
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 10
    },
    text:{
        fontSize: 16,
        color: "white",
    }
});

export default MyButton