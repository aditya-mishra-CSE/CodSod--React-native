import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';

const Login = () => {

  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });
//   const [password, setPassword] = useState("");  
  const router = useRouter();
  const onLogin = () => {
    console.log(value?.value1 + value?.value2);
    router.navigate("/signup")
  };
  return (
    <View style={{flex: 1}}>
      <Image
        source={require("@/assets/images/login.png")}
        style={{
            width: "100%",
            height: 400,
        }}
        resizeMode='cover'
      />
      <View style={{padding:20, gap: 20}}>
        <TextInput placeholder='Enter Your Email' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}} onChangeText={(e) => setValue(prev => ({...prev, value1:e}))}/>
        <TextInput placeholder='Enter Your Password' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}} onChangeText={(e) => setValue(prev => ({...prev, value2:e}))}/>
      <MyButton title={"Login"} onPress={onLogin}/>
      </View>
    </View>
  );
}
export default Login
