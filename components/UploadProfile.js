import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Ionicons'



const UploadPainting = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');


  return (
    <>

      <View style={{ paddingLeft: 150, paddingTop: 20, flexDirection: 'row' }} >

        <Image source={require("../components/screens/O.png")} />

        {/* <Icon1 name="add-circle" size={25} style={{ paddingTop: 78, fontWeight: 'bold', color: "blue" }} color="black" /> */}

        <TouchableOpacity onPress={() => navigation.navigate('Visual Search')}>
          <View style={{ paddingLeft: 5, paddingRight: 20, paddingTop: 50 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>ADD</Text>
            </View>
          </View>
        </TouchableOpacity>


      </View>






      <View style={styles.ar}>
        <SafeAreaView >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Name"

          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Age"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}

            placeholder="City"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}

            placeholder="Working or Studying"
            keyboardType="numeric"
          />


        </SafeAreaView>
      </View>

      <View style={{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'blue',
        borderRadius: 120,

      }}>
        <Text style={{ color: 'white', paddingLeft: 175, fontSize: 20, }}>Submit</Text>
      </View>




    </>
  )
}

export default UploadPainting

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    textAlign: 'center'
  },
  bigBlue: {
    paddingLeft: 90,

    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
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