import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Listar() {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Meus treinos</Text>
      <Text style={styles.subtitle}>Aqui você verá os seus treinos criados.</Text>
      {/* Futuramente, você pode renderizar uma lista de treinos aqui */}
    </View>
  )
}