import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/StyleRepositoryDetails';

export function RepositoryDetailsScreen({ route, navigation }) {
  const { repository } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{repository.name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.detail}><Text style={styles.label}>Name:</Text> {repository.name}</Text>
        <Text style={styles.detail}><Text style={styles.label}>Description:</Text> {repository.description}</Text>
        <Text style={styles.detail}><Text style={styles.label}>Stars:</Text> {repository.stargazers_count}</Text>
        <Text style={styles.detail}><Text style={styles.label}>Language:</Text> {repository.language}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(repository.html_url)}>
          <Text style={styles.externalLink}>Go to Repository</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
