import { StyleSheet } from 'react-native';

export const commonFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    margin: 12,
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#339',
    margin: 12,
    padding: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
