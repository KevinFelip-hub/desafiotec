import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/StyleUser';
import axios from 'axios';

export default function UserDetailsScreen({navigation}) {
  const user = useSelector(state => state.user.userData);
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  const handleSeeRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user.login}/repos?sort=stars&order=desc`,
      );

      dispatch({
        type: 'FETCH_REPOSITORIES_SUCCESS',
        payload: response.data,
      });

      navigation.navigate('RepositoriesScreen', {
        repositories: response.data,
      });
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        alert('No response from the server. Check your internet connection.');
      } else {
        alert('Failed to fetch repositories. Try again later.');
      }
    }
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#000" style={styles.loading} />
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                paddingTop={25}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Icon name="bookmark-o" paddingTop={25} size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Image source={{uri: user.avatar_url}} style={styles.avatar} />
          <Text style={styles.name}>{user.name || 'Name Dev'}</Text>
          <Text style={styles.email}>
            {user.email || 'E-mail não informado'}
          </Text>
          <Text style={styles.bio}>{user.bio || 'Biografia não descrita'}</Text>

          <View style={styles.footer}>
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Followers</Text>
                <Text style={styles.statNumber}>{user.followers}</Text>
              </View>
              <Text style={styles.separator}>|</Text>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Following</Text>
                <Text style={styles.statNumber}>{user.following}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSeeRepositories}>
              <Text style={styles.buttonText}>See repositories</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>No user data available.</Text>
      )}
    </ScrollView>
  );
}
