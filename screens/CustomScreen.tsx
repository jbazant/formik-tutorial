import { Switch, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { commonFormStyles as styles } from '../styles/commonForm';
import { RootTabScreenProps } from '../types';
import {useForm} from "../hooks/useForm";

export default function CustomScreen({ navigation }: RootTabScreenProps<'Custom'>) {

  const onPress = ({email, message}: {email: string, message: string, doesUserAgree: boolean}) => {
    navigation.navigate('Modal', {
      email, message
    })};

  const { handleSubmit, handleChange, values } = useForm({email:"me@example.com", message: "ahojky", doesUserAgree: false }, onPress);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Better implementation</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Text>Email</Text>
      <TextInput value={values.email} onChangeText={handleChange('email')} placeholder="me@example.com" style={styles.input}/>
      <Text>Message</Text>
      <TextInput value={values.message} onChangeText={handleChange('message')} placeholder="Hello There!" style={styles.input}/>
      <Text>Agreement</Text>
      <Switch value={values.doesUserAgree} onValueChange={handleChange('doesUserAgree')}/>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send it!</Text>
      </TouchableOpacity>
    </View>
  );
}


