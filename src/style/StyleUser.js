import {StyleSheet} from 'react-native';

const userDetailsStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  saveButton: {
    position: 'absolute',
    right: 20,
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 75,
    marginTop: -30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    color: 'gray',
  },
  bio: {
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  separator: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b92e4',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00cc6a',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default userDetailsStyles;
