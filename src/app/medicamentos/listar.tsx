import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Listar() {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Meus Medicamentos</Text>
      <Text style={styles.subtitle}>Aqui você verá a lista dos seus medicamentos cadastrados.</Text>
      {/* Futuramente, você pode renderizar uma lista de medicamentos aqui */}
    </View>
  )
}