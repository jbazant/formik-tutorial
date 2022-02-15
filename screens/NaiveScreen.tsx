import { Switch, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import { commonFormStyles as styles } from '../styles/commonForm';
import { RootTabScreenProps } from '../types';
import {useState} from "react";

export default function NaiveScreen({ navigation }: RootTabScreenProps<'Naive'>) {
  const [emailInputText, setEmailInputText] = useState<string>('me@example.com');
  const [messageInputText, setMessageInputText] = useState<string>('ahojky');
  const [doesUserAgree, setDoesUserAgree] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naive implementation</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Text>Email</Text>
      <TextInput value={emailInputText} onChangeText={setEmailInputText} placeholder="me@example.com" style={styles.input}/>
      <Text>Message</Text>
      <TextInput value={messageInputText} onChangeText={setMessageInputText} placeholder="Hello There!" style={styles.input}/>
      <Text>Agreement</Text>
      <Switch value={doesUserAgree} onValueChange={setDoesUserAgree}/>
      <TouchableOpacity style={styles.button} onPress={() => doesUserAgree ? navigation.navigate('Modal', {
        email: emailInputText,
        message: messageInputText,
      }) : Alert.alert('You have to agree with us!')}>
        <Text style={styles.buttonText}>Send it!</Text>
      </TouchableOpacity>
    </View>
  );
}
