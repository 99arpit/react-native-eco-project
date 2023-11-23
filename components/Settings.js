import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
const SignUp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');



  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
        <Icon name="search1" size={20} style={{ paddingLeft: 350, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

      </View>
      <View style={styles.container}>

        <Text style={[styles.bigBlue]}>Settings </Text>

        <Text style={[styles.pi]}>Personal Information</Text>

        <View style={styles.ar}>
          <SafeAreaView >
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Full Name"
            />
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Date of Birth"
              />
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.password}>Password</Text>

              <Text style={{ paddingLeft: 210, paddingTop: 34, fontSize: 18 }}> Change </Text>
            </View>
            <View style={{ paddingTop: 14 }}>
              <TextInput
                style={styles.input}

                onChangeText={onChangeNumber}

                placeholder="Password"
                keyboardType="numeric"
              />
            </View>
          </SafeAreaView>
        </View>





      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingLeft: 14, paddingTop: 20 }}>Notifications</Text>


      </View>
      <View style={{ flexDirection: 'row' }}>

        <Text style={{ color: 'black', fontSize: 18, paddingLeft: 14, paddingTop: 20 }}>Sales</Text>


        <View style={styles.Switch}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="blue"
            // onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>




      </View>


      <View style={{ flexDirection: 'row' }}>

        <Text style={{ color: 'black', fontSize: 18, paddingLeft: 14, paddingTop: 20 }}>New arrivals</Text>


        <View style={styles.Switch2}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="blue"
            // onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>





      </View>


      <View style={{ flexDirection: 'row' }}>

        <Text style={{ color: 'black', fontSize: 18, paddingLeft: 14, paddingTop: 20 }}>Delivery status change</Text>


        <View style={styles.Switch3}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="blue"
            // onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>



      </View>


    </>


  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  bigBlue: {
    paddingLeft: 14,

    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  Switch: {
    flex: 1,
    paddingLeft: 280,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Switch2: {
    flex: 1,
    paddingLeft: 220,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Switch3: {
    flex: 1,
    paddingLeft: 140,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 60,
    margin: 5,

  },
  ar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15

  },
  pi: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 14,
    fontSize: 17,
    color: 'black'
  },
  password: {
    paddingLeft: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 30,
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

