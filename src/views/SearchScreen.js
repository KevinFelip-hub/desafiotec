import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../viewmodels/userViewModel';

export default function SearchScreen({navigation}) {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    await dispatch(fetchUser(username));
    navigation.navigate('UserDetails');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search GitHub User"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
