import { StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';

const Signup = () => {
  const router = useRouter();
  const onSignup = () => {
    router.navigate("/login")
  };
   return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false }>
      <Image
        source={require("@/assets/images/register.png")}
        style={{
            width: "100%",
            height: 400,
        }}
        resizeMode='cover'
      />
      <View style={{padding:20, gap: 20}}>
        <TextInput placeholder='Enter Your Name' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}}/>
        <TextInput placeholder='Enter Your Email' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}}/>
        <TextInput placeholder='Enter Your Password' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}}/>
        <TextInput placeholder='Re-Enter Your Password' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}}/>
      <MyButton title={"Signup"} onPress={onSignup}/>
      </View>
    </ScrollView>
  );
}
export default Signup
