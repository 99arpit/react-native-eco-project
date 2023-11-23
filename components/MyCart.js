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
            <Icon name="search1" size={20} style={{ paddingLeft: 380, paddingTop: 3, fontWeight: 'bold', color: "black" }} color="black" />
            <Text style={{ color: 'black', fontSize: 25, paddingLeft: 20, fontWeight: 'bold' }}>My Cart</Text>

            <View style={{ paddingTop: 15, marginLeft: 20, marginRight: 20, }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image style={{ borderRadius: 10, height: 90, width: 90 }} source={require("../components/screens/image.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>ruby</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 228, paddingTop: 10, }}  />
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            {/* <Icon2 name="md-add-circle-outline" size={15} style={{ paddingLeft: 10, paddingTop: 0, }} color="black" /> */}
                        </View>

                    </View>

                </Card>

            </View>


            <View style={{ paddingTop: 15, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image style={{ borderRadius: 10, height: 90, width: 90 }} source={require("../components/screens/image1.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>Erin</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 228, paddingTop: 10, }}/>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            {/* <Icon2 name="md-add-circle-outline" size={15} style={{ paddingLeft: 10, paddingTop: 0, }} color="black" /> */}
                        </View>

                    </View>

                </Card>
            </View>


            <View style={{ paddingTop: 15, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image style={{ borderRadius: 10, height: 90, width: 90 }} source={require("../components/screens/image2.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>Rococo</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 198, paddingTop: 10, }}  />
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            {/* <Icon2 name="md-add-circle-outline" size={15} style={{ paddingLeft: 10, paddingTop: 0, }} color="black" /> */}
                        </View>

                    </View>

                </Card>
            </View>


            <TextInput
                style={{ backgroundColor: 'white', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20, }}
                placeholder="Enter your promo code"
            />

            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ paddingLeft: 20 }}>Total amount:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: 238, }}>124$</Text>
            </View>
            <View style={{ paddingTop: 15 }} >

                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: 'blue',
                    borderRadius: 30,

                }}>
                    <Text style={{ color: 'white', paddingLeft: 135, fontSize: 20, }}>CHECK OUT</Text>
                </View>


            </View>

            <View style={{ paddingTop: 10 }}>

                <Card style={{ marginTop: 10, backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon2 style={{ margin: 10, paddingLeft: 30 }} name="home-outline" size={30}   ></Icon2>
                        <Icon style={{ margin: 10, paddingLeft: 30 }} name="shoppingcart" size={30}   ></Icon>
                        <Icon3 style={{ margin: 10, paddingLeft: 30 }} name="shopping-bag" size={30}   ></Icon3>
                        <Icon4 style={{ margin: 10, paddingLeft: 30 }} name="favorite-outline" size={30}   ></Icon4>
                        <Icon5 style={{ margin: 10, paddingLeft: 30 }} name="user-o" size={30} ></Icon5>
                    </View>
                    <View style={{ flexDirection: 'row',paddingBottom:20 }}>
                    <Text style={{marginLeft:10,paddingLeft:25}} >Home</Text>
                    <Text style={{marginLeft:10,paddingLeft:40}} >Shop</Text>
                    <Text style={{marginLeft:10,paddingLeft:37}} >Bag</Text>
                    <Text style={{marginLeft:10,paddingLeft:24}} >Favorites</Text>
                    <Text style={{marginLeft:10,paddingLeft:18}} >Profile</Text>




                    </View>
                </Card>


            </View>




        </>


    )
}

export default MyCart

const styles = StyleSheet.create({})