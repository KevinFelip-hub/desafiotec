import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/StyleRepository';

export default function RepositoriesScreen({navigation}) {
  const repositories = useSelector(state => state.user.repositories);

  const openRepository = url => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Repositories</Text>
      </View>

      <FlatList
        data={repositories}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.repositoryContainer}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.language}>{item.language}</Text>
            </View>
            <TouchableOpacity onPress={() => openRepository(item.url)}>
              <Text>Open</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
