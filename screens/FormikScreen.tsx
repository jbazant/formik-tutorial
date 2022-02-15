import { Switch, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { commonFormStyles as styles } from '../styles/commonForm';
import { RootTabScreenProps } from '../types';
import {useForm} from "../hooks/useForm";
import {Formik} from "formik";

export default function FormikScreen({ navigation }: RootTabScreenProps<'Formik'>) {

  const onPress = ({email, message}: {email: string, message: string, doesUserAgree: boolean}) => {
    navigation.navigate('Modal', {
      email, message
    })};

  return (
    <Formik
      initialValues={{email:"me@example.com", message: "ahojky", doesUserAgree: false }}
      onSubmit={onPress}
    >
      {({ handleChange, setFieldValue, handleBlur, handleSubmit, values }) =>
        (
    <View style={styles.container}>
      <Text style={styles.title}>Better implementation</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Text>Email</Text>
      <TextInput value={values.email} onChangeText={handleChange('email')} placeholder="me@example.com" style={styles.input}/>
      <Text>Message</Text>
      <TextInput value={values.message} onChangeText={handleChange('message')} placeholder="Hello There!" style={styles.input}/>
      <Text>Agreement</Text>
      <Switch value={values.doesUserAgree} onValueChange={ value => setFieldValue('doesUserAgree', value)}/>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Send it!</Text>
      </TouchableOpacity>
    </View>
        )}
  </Formik>
  );
}


