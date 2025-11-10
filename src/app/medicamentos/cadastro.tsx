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
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeTime = (event, chosenTime) => {
    const currentTime = chosenTime || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const handleSubmit = () => {
    if (!medicationName || !dosage || !frequency) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const formData = {
      medicationName,
      dosage,
      frequency,
      time: formattedTime,
    };

    console.log('Dados do Medicamento:', formData);
    Alert.alert('Sucesso!', `Medicamento ${medicationName} agendado para ${formattedTime}.`);

    // Aqui você enviaria os dados para um backend, um estado global, ou armazenamento local
    // Por exemplo:
    // saveMedication(formData);

    // Limpar o formulário após o envio
    setMedicationName('');
    setDosage('');
    setFrequency('');
    setSelectedTime(new Date());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar Medicamento</Text>
      <Text style={styles.subtitle}>Preencha os detalhes para agendar seu medicamento.</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do Medicamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Ibuprofeno"
          value={medicationName}
          onChangeText={setMedicationName}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Dosagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 200mg, 1 comprimido"
          value={dosage}
          onChangeText={setDosage}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Frequência</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 8 em 8 horas, 1 vez ao dia"
          value={frequency}
          onChangeText={setFrequency}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Horário</Text>
        <TouchableOpacity onPress={showTimePickerModal} style={styles.timePickerButton}>
          <Text style={styles.timePickerButtonText}>Selecionar Horário</Text>
        </TouchableOpacity>
        <Text style={styles.selectedTimeText}>
          Horário selecionado: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>

        {showTimePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Salvar Medicamento</Text>
      </TouchableOpacity>

      <Link href={'/'} as>
        <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Voltar</Text>
      </TouchableOpacity>
      </Link>

    
    </ScrollView>
  );
};

export default MedicationForm;
