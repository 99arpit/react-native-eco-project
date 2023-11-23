import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const SignUp = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [Password] = React.useState('')
  const submit = () => {
    navigation.navigate("arp");
  }

  return (
    <>



      <View style={styles.container}>

        <View style={styles.ar}>
          <SafeAreaView >

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Name"
              autoCapitalize='none'

            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}

              placeholder="Password"
              keyboardType="numeric"
            />

          </SafeAreaView>
        </View>


        <TouchableOpacity onPress={() => navigation.navigate('OTP Verification')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>SIGN UP</Text>
            </View>
          </View>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row' }}>


          <TouchableOpacity onPress={() => navigation.navigate('Painting List')}>
            <View style={{ paddingLeft: 90, paddingRight: 20, paddingTop: 20 }}>
              <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Customer</Text>
              </View>
            </View>

          </TouchableOpacity>



          <TouchableOpacity onPress={() => navigation.navigate('Upload Profile')}>
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Vendor</Text>
              </View>
            </View>

          </TouchableOpacity>

        </View>




        <Text style={{ color: 'black', paddingLeft: 80, paddingTop: 70, fontSize: 20 }}>Or sign up with social account </Text>

        <View style={{ flex: 1, paddingLeft: 25, flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={styles.item}>
            <Image source={require("../components/screens/go.jpeg")} />

          </Text>
          <Text style={styles.item}>   <Image source={require("../components/screens/FB.png")} /></Text>

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

