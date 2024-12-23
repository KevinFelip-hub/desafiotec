import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    width: '100%',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: '300',
    fontFamily: 'Alilato Arabic Regular',
    color: '#A9A9A9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#F8F8F8',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
    fontFamily: 'Andis Medium',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
    tintColor: '#000',
  },
  findButton: {
    backgroundColor: '#4485fd',
    borderRadius: 8,
    paddingVertical: 19,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    cursor: 'pointer',
  },
  findButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Akagi Medium',
  },
});

export default styles;
