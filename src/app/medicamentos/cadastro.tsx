// components/MedicationForm.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles'; // Ajuste o caminho se seu styles.js estiver em outro lugar
import { Link } from 'expo-router';

const MedicationForm = () => {
  const [trainingName, setTrainingName] = useState('');
  const [exercice, setExercice] = useState('');
  const [frequency, setFrequency] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [hour, setHour] = useState('');

  const onChangeTime = (event, chosenTime) => {
    const currentTime = chosenTime || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const handleSubmit = () => {
    if (!trainingName || !exercice || !frequency) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const formData = {
      trainingName,
      exercice,
      frequency,
      time: formattedTime,
    };

    console.log('Dados do Treino:', formData);
    Alert.alert('Sucesso!', `Treino ${trainingName} agendado para ${formattedTime}.`);

    // Aqui você enviaria os dados para um backend, um estado global, ou armazenamento local
    // Por exemplo:
    // saveExercice(formData);

    // Limpar o formulário após o envio
    setTrainingName('');
    setExercice('');
    setFrequency('');
    setSelectedTime(new Date());
    setHour('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar treino</Text>
      <Text style={styles.subtitle}>Preencha os detalhes do seu treino:</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do treino</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Superior Completo"
          value={trainingName}
          onChangeText={setTrainingName}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do exercício</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Supino com halters"
          value={exercice}
          onChangeText={setExercice}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Séries e repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 3 x 12"
          value={frequency}
          onChangeText={setFrequency}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Hórario do treino</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 14h00"
          value={hour}
          onChangeText={setHour}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Salvar treino</Text>
      </TouchableOpacity>

      <Link href={''}>
        <TouchableOpacity style={styles.submitButtonV}>
        <Text style={styles.submitButtonText}>Voltar</Text>
      </TouchableOpacity>
      </Link>

    
    </ScrollView>
  );
};

export default MedicationForm;
