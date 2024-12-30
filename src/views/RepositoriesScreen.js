import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/StyleRepository';

export default function RepositoriesScreen({navigation, route}) {
  const storedRepositories = useSelector(state => state.user.repositories);
  const repositories = route.params?.repositories || storedRepositories;
  const [sortOrder, setSortOrder] = useState('desc');

  const openRepository = url => {
    Linking.openURL(url);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  const sortedRepositories = [...repositories].sort((a, b) => {
    return sortOrder === 'desc'
      ? b.stargazers_count - a.stargazers_count
      : a.stargazers_count - b.stargazers_count;
  });

  if (!repositories || repositories.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyMessage}>Nenhum repositório encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Repositories</Text>
      </View>

      <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
        <Text style={styles.sortButtonText}>
        Show {sortOrder === 'desc' ? 'Less Stars' : 'More Stars'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={sortedRepositories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.repositoryContainer}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>
                {item.description || 'No description available'}
              </Text>
              <Text style={styles.language}>
                {item.language || 'Unknown language'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => openRepository(item.html_url)}
              style={styles.openButton}>
              <Text style={styles.openButtonText}>Open</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
