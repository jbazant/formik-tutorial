import { Switch, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { commonFormStyles as styles } from '../styles/commonForm';
import { RootTabScreenProps } from '../types';

export default function NaiveScreen({ navigation }: RootTabScreenProps<'Naive'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naive implementation</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Text>Email</Text>
      <TextInput placeholder="me@example.com" style={styles.input}/>
      <Text>Message</Text>
      <TextInput placeholder="Hello There!" style={styles.input}/>
      <Text>Agreement</Text>
      <Switch/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modal', {
        email: 'some@email.com',
        message: 'General Kenobi!',
      })}>
        <Text style={styles.buttonText}>Send it!</Text>
      </TouchableOpacity>
    </View>
  );
}
