import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'


const Payment = ({navigation}) => {
  return (
    <>
      {/* <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>

        <Icon name="left" size={22} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black", paddingBottom: 15 }} />
        <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 10, fontSize: 20, paddingLeft: 90, paddingBottom: 0 }} >Payment methods</Text>
      </View> */}

      <Text style={{ paddingLeft: 22, paddingTop: 10, fontSize: 15, color: 'black', fontWeight: 'bold' }}>Your payment cards</Text>
      <View style={{ marginLeft: 20, paddingTop: 20 }}>

        <Image style={{ height: 206, width: 370, borderRadius: 10, }} source={require("../components/screens/atmnew.png")} />

      </View>

      <View style={{ flexDirection: 'row' }}>
        <Icon name="checksquare" size={25} style={{ paddingLeft: 22, paddingTop: 10, fontWeight: 'bold', color: "black", paddingBottom: 20 }} />
        <Text style={{ color: 'black', paddingTop: 10, fontSize: 17, paddingLeft: 20 }}>Use as default payment method</Text>



      </View>

      <View style={{ marginLeft: 20, }}>

        <Image style={{ height: 206, width: 370, borderRadius: 10, }} source={require("../components/screens/visa.png")} />

      </View>

      <View style={{ flexDirection: 'row' }}>
        <Icon1 name="checkbox-blank-outline" size={25} style={{ paddingLeft: 22, paddingTop: 10, fontWeight: 'bold', color: "black", paddingBottom: 20 }} />
        <Text style={{ color: 'black', paddingTop: 10, fontSize: 17, paddingLeft: 20 }}>Use as default payment method</Text>
        {/* <Icon2 name="add-circle-sharp" size={35} style={{ paddingLeft: 40, paddingTop: 30, fontWeight: 'bold', color: "black", }} /> */}

        <TouchableOpacity onPress={() => navigation.navigate('Payment method')}>
          <View style={{ paddingLeft: 0, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Add Card</Text>
            </View>
          </View>
        </TouchableOpacity>


      </View>



      {/* <TouchableOpacity onPress={() => navigation.navigate('OTP Verification')}>
        <Text style={{ color: 'white', fontSize: 20 }}>SIGN UP</Text>
      </TouchableOpacity> */}


    </>

  )
}

export default Payment

const styles = StyleSheet.create({})