import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const SignUp = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');



  return (


    <>

      <View style={styles.container}>
        <View style={styles.ar}>
          <SafeAreaView >
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Full Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Address"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="City"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="State/Province/Region"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}

              placeholder="Zip Code(Postal Code)"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}

              placeholder="Country"
              keyboardType="numeric"
            />

          </SafeAreaView>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>ADD CARD</Text>
            </View>
          </View>
        </TouchableOpacity>



      </View>


    </>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    textAlign: 'center'
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10

  },
  item: {
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    width: 100,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingBottom: 22
  }

});

export default SignUp

