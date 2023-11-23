import { StyleSheet, Text, View, Image,SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'


const UploadPainting = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');



  return (
    <>

        <View style={{ flexDirection: 'row' }}>
          <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 13, fontWeight: 'bold', color: "black" }} color="black" />
          <Text style={{ paddingLeft: 110, paddingTop: 10, paddingBottom: 10, fontSize: 20, color: 'black', fontWeight: 'bold' }}>Upload Painting</Text>
        </View>
        <View style={{ paddingLeft: 150, paddingTop: 20 }} >

          <Image source={require("../components/screens/O.png")} />


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
              placeholder="Price"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}

              placeholder="Description"
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