import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon0 from 'react-native-vector-icons/FontAwesome'

import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import { Card } from 'react-native-paper'
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors'
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/Foundation'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import Icon7 from 'react-native-vector-icons/FontAwesome'



const PaintList = ({ navigation }) => {
  return (
    <>


      <View style={{ flexDirection: 'row', paddingTop: 0 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Painting')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>ruby</Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Painting')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Rococo</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Painting')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Erin</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Painting')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Forest</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* <Text style={{ backgroundColor: 'blue', marginLeft: 20, color: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 30, fontSize: 20 }}>ruby</Text> */}
        {/* <Text style={{ backgroundColor: 'blue', marginLeft: 20, color: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 30, fontSize: 20 }}>Rococo</Text>
        <Text style={{ backgroundColor: 'blue', marginLeft: 20, color: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 30, fontSize: 20 }}>Erin</Text>
        <Text style={{ backgroundColor: 'blue', marginLeft: 20, color: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 30, fontSize: 20 }}>Forest</Text> */}

      </View>


      <Card>

        <View style={{ flexDirection: 'row' }}>

          <Icon3 name="md-filter" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
          <Text style={{ paddingTop: 10, paddingLeft: 10, color: 'black' }}>Filters</Text>
          <Icon1 name="long-arrow-up" size={20} style={{ paddingLeft: 60, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
          <Icon2 name="arrow-long-down" size={20} style={{ paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
          <Text style={{ paddingTop: 10, paddingLeft: 10, color: 'black' }}>Price: lowest to high</Text>
          <Icon0 name="bars" size={20} style={{ paddingLeft: 70, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />


        </View>




      </Card>

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image style={{ marginLeft: 20, marginTop: 20, borderRadius: 10, height: 160, width: 160 }} source={require("../components/screens/ruby.png")} />
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10 }}>ruby</Text>
          <Text style={{ color: 'black', paddingLeft: 20 }}>12$</Text>
        </View>



        <View>
          <Image style={{ marginLeft: 40, marginTop: 20, borderRadius: 10, height: 160, width: 160 }} source={require("../components/screens/roc.png")} />
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10 }}>Rococo</Text>
          <Text style={{ color: 'black', paddingLeft: 20 }}>12$</Text>

        </View>



      </View>


      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image style={{ marginLeft: 20, marginTop: 20, borderRadius: 10, height: 160, width: 160 }} source={require("../components/screens/fore.png")} />
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10 }}>Erin</Text>
          <Text style={{ color: 'black', paddingLeft: 20 }}>12$</Text>

        </View>



        <View>
          <Image style={{ marginLeft: 40, marginTop: 20, borderRadius: 10, height: 160, width: 160 }} source={require("../components/screens/ruby.png")} />
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10 }}>ruby</Text>
          <Text style={{ color: 'black', paddingLeft: 20 }}>12$</Text>


        </View>




      </View>


      <View style={{ paddingTop: 0 }}>

        <Card style={{ marginTop: 10, backgroundColor: 'white', }}>
          <View style={{ flexDirection: 'row', }}>
            <Icon4 style={{ margin: 10, paddingLeft: 30 }} name="home-outline" size={30}   ></Icon4>
            <Icon style={{ margin: 10, paddingLeft: 30 }} name="shoppingcart" size={30}   ></Icon>
            <Icon5 style={{ margin: 10, paddingLeft: 30 }} name="shopping-bag" size={30}   ></Icon5>
            <Icon6 style={{ margin: 10, paddingLeft: 30 }} name="favorite-outline" size={30}   ></Icon6>
            <Icon7 style={{ margin: 10, paddingLeft: 30 }} name="user-o" size={30} ></Icon7>
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

export default PaintList

const styles = StyleSheet.create({})