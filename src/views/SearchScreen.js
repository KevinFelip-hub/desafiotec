/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../viewmodels/userSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/StyleScreen';

export default function SearchScreen({navigation}) {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!username.trim()) {
      alert('Por favor insira um nome de usuário para pesquisar.');
      return;
    }

    try {
      const usernameInput = username.includes('github.com')
        ? username.split('/').pop()
        : username;

      await dispatch(fetchUser(usernameInput));
      navigation.navigate('UserDetails');
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            accessibilityLabel="Menu"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="person"
            size={40}
            color="gray"
            accessibilityLabel="User Profile"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Find <Text style={styles.subtitle}>a dev</Text>
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Procure por um Desenvolvedor"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity onPress={handleSearch}>
          <MaterialIcons
            name="search"
            size={24}
            color="black"
            accessibilityLabel="Search"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.findButton} onPress={handleSearch}>
        <Text style={styles.findButtonText}>Find</Text>
      </TouchableOpacity>
    </View>
  );
}
