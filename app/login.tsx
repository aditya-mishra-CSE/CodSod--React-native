import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import MyButton from "@/components/MyButton";

const Login = () => {
  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });

  const router = useRouter();

  const onLogin = () => {
    console.log(value?.value1 + value?.value2);
    router.navigate("/signup");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          onChangeText={(e) =>
            setValue((prev) => ({ ...prev, value1: e }))
          }
        />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry
          style={styles.input}
          onChangeText={(e) =>
            setValue((prev) => ({ ...prev, value2: e }))
          }
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
  width: "100%",
  height: 300, // adjust as needed
  marginBottom: 20,
},

  form: {
    width: "100%",
    gap: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});



// import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
// import React, {useState} from 'react'
// import { useRouter } from 'expo-router';
// import MyButton from '@/components/MyButton';

// const Login = () => {

//   const [value, setValue] = useState({
//     value1: "",
//     value2: "",
//   });
// //   const [password, setPassword] = useState("");  
//   const router = useRouter();
//   const onLogin = () => {
//     console.log(value?.value1 + value?.value2);
//     router.navigate("/signup")
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Image
//         source={require("@/assets/images/login.png")}
//         style={{
//             width: "100%",
//             height: 400,
//         }}
//         resizeMode='cover'
//       />
//       <View style={{padding:20, gap: 20}}>
//         <TextInput placeholder='Enter Your Email' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}} onChangeText={(e) => setValue(prev => ({...prev, value1:e}))}/>
//         <TextInput placeholder='Enter Your Password' style={{ borderWidth: 1, height: 50, paddingHorizontal: 20}} onChangeText={(e) => setValue(prev => ({...prev, value2:e}))}/>
//         <MyButton title={"Login"} onPress={onLogin}/>
//       </View>
//     </View>
//   );
// }
// export default Login
