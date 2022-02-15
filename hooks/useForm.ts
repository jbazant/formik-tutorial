import {useState} from "react";

export function useForm<T, I extends keyof T>(initialValues: T, onFormSubmit: (formData: T) => void) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (inputName: I) => (value: typeof initialValues[I]) => {
    setValues({...values, [inputName]: value});
  }

   const handleSubmit = () => {
    onFormSubmit(values);
   }

  return {
      handleChange,handleSubmit, values
    }
 }