import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const SignUp = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');



  return (
    <>

      <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />



      <View style={styles.container}>

        <Text style={[styles.red, styles.bigBlue]}>Forgot Password</Text>

        <View style={styles.ar}>
          <SafeAreaView >
            <Text style={{ color: 'black', paddingLeft: 10, paddingBottom: 10, paddingTop: 40, fontSize: 17 }}>Please, enter your email address. You will receive a link to create a new
              password via email. </Text>

            <TextInput
            
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Email"
            />


          </SafeAreaView>
        </View>

        <View style={{
          marginRight: 10,
          marginLeft: 10,
          marginTop: 40,
          paddingTop: 20,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: 'blue',
          borderRadius: 30,

        }}>
          <Text style={{ color: 'white', paddingLeft: 180, fontSize: 20, }}>SEND</Text>
        </View>


      </View>



    </>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  bigBlue: {
    paddingLeft: 10,

    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 60,
    margin: 5,
    padding: 10,

  },
  ar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40

  },
  item: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    width: 160,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingBottom: 22
  }

});

export default SignUp

