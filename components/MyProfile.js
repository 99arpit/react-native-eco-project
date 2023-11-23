import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Foundation'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/FontAwesome'



import { Card } from 'react-native-paper';


const MyCart = () => {
  return (

    <>


      <View style={{ paddingLeft: 20, paddingTop: 10, flexDirection: 'row' }} >

        <Image source={require("../components/screens/O.png")} />
        <View >

          <Text style={{ fontSize: 20, color: 'black', }}>Matida Brown</Text>

          <Text style={{ paddingTop: 2, paddingLeft: 11, fontSize: 15 }}>matildabrown@mail.com</Text>

        </View>




      </View>



      <View >
        <View style={{ paddingLeft: 20, paddingTop: 20, flexDirection: 'row' }} >
          <Text style={{ fontSize: 20, color: 'black', }}>My order</Text>
          <Icon name="right" size={20} style={{ paddingLeft: 278, paddingTop: 20 }} />
        </View>
        <Text style={{ paddingLeft: 20 }}>Alredy have 12 orders</Text>
      </View>


      <View style={{ paddingTop: 10 }}>
        <View style={{ paddingLeft: 20, paddingTop: 20, flexDirection: 'row' }} >
          <Text style={{ fontSize: 20, color: 'black', }}>Shipping address</Text>
          <Icon name="right" size={20} style={{ paddingLeft: 198, paddingTop: 20 }} />
        </View>
        <Text style={{ paddingLeft: 20 }}>3 address</Text>
      </View>


      <View style={{ paddingTop: 10 }}>
        <View style={{ paddingLeft: 20, paddingTop: 20, flexDirection: 'row' }} >
          <Text style={{ fontSize: 20, color: 'black', }}>Payment methods</Text>
          <Icon name="right" size={20} style={{ paddingLeft: 188, paddingTop: 20 }} />
        </View>
        <Text style={{ paddingLeft: 20 }}>Visa **34</Text>
      </View>



      <View style={{ paddingTop: 10 }}>
        <View style={{ paddingLeft: 20, paddingTop: 20, flexDirection: 'row' }} >
          <Text style={{ fontSize: 20, color: 'black', }}>Settings</Text>
          <Icon name="right" size={20} style={{ paddingLeft: 278, paddingTop: 20 }} />
        </View>
        <Text style={{ paddingLeft: 20 }}>Notification,password</Text>
      </View>




















      <View style={{ paddingTop: 40 }}>

        <Card style={{ marginTop: 10, backgroundColor: 'white', }}>
          <View style={{ flexDirection: 'row', }}>
            <Icon2 style={{ margin: 10, paddingLeft: 30 }} name="home-outline" size={30}   ></Icon2>
            <Icon style={{ margin: 10, paddingLeft: 30 }} name="shoppingcart" size={30}   ></Icon>
            <Icon3 style={{ margin: 10, paddingLeft: 30 }} name="shopping-bag" size={30}   ></Icon3>
            <Icon4 style={{ margin: 10, paddingLeft: 30 }} name="favorite-outline" size={30}   ></Icon4>
            <Icon5 style={{ margin: 10, paddingLeft: 30 }} name="user-o" size={30} ></Icon5>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
            <Text style={{ marginLeft: 10, paddingLeft: 25 }} >Home</Text>
            <Text style={{ marginLeft: 10, paddingLeft: 40 }} >Shop</Text>
            <Text style={{ marginLeft: 10, paddingLeft: 37 }} >Bag</Text>
            <Text style={{ marginLeft: 10, paddingLeft: 24 }} >Favorites</Text>
            <Text style={{ marginLeft: 10, paddingLeft: 18 }} >Profile</Text>




          </View>
        </Card>


      </View>




    </>


  )
}

export default MyCart

const styles = StyleSheet.create({})