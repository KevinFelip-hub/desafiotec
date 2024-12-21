import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function UserDetailsScreen({navigation}) {
  const {userDetails, repositories} = useSelector(state => state.user);

  return (
    <View style={styles.container}>
      <Image source={{uri: userDetails.avatar_url}} style={styles.avatar} />
      <Text style={styles.name}>{userDetails.login}</Text>
      <Text style={styles.email}>{userDetails.email}</Text>
      <Text style={styles.bio}>{userDetails.bio}</Text>

      <View style={styles.stats}>
        <Text>Followers: {userDetails.followers}</Text>
        <Text>Following: {userDetails.following}</Text>
      </View>

      <Button
        title="See Repositories"
        onPress={() => navigation.navigate('Repositories')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
  name: {fontSize: 24, fontWeight: 'bold'},
  email: {fontSize: 14, color: '#777'},
  bio: {marginVertical: 10},
  stats: {flexDirection: 'row', justifyContent: 'space-between'},
});
