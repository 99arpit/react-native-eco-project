import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Card } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Foundation'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/FontAwesome'
const MyOrders = () => {
    return (
        <>

            <View style={{ flexDirection: 'row' }}>
                <Icon name="left" size={20} style={{ paddingLeft: 12, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
                <Icon name="search1" size={20} style={{ paddingLeft: 348, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

            </View>

            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, paddingTop: 20, paddingLeft: 18 }}>My Orders</Text>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Text style={{ backgroundColor: 'blue', marginLeft: 20, color: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 30, fontSize: 20 }}>Delivered</Text>
                <Text style={{ fontSize: 20, color: 'black', marginLeft: 30, }}>Processing</Text>
                <Text style={{ fontSize: 20, color: 'black', marginLeft: 30, }}>Cancelled</Text>

            </View>

            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white',paddingBottom:20 ,paddingTop:20}}>

                    <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                        <Text style={{ color: 'black', fontSize: 17, }} >Order No - 1945433</Text>
                        <Text style={{ paddingLeft: 132, }}>05-12-2019</Text>
                    </View>
                    <Text style={{ fontSize: 15, paddingLeft: 10 }} >Tracking number:  IW3475455883</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingLeft: 10 }} >Quntity :   3 </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 140 }} >Total Amount:  112$</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', paddingLeft: 10, fontSize: 16, }}>Details</Text>
                        <Text style={{ color: 'green', paddingLeft: 10, fontSize: 16, paddingLeft: 230 }}>Delivered</Text>

                    </View>


                </Card>
            </View>

            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white',paddingBottom:20 ,paddingTop:20}}>

                    <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                        <Text style={{ color: 'black', fontSize: 17, }} >Order No - 1945433</Text>
                        <Text style={{ paddingLeft: 132, }}>05-12-2019</Text>
                    </View>
                    <Text style={{ fontSize: 15, paddingLeft: 10 }} >Tracking number:  IW3475455883</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingLeft: 10 }} >Quntity :   3 </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 140 }} >Total Amount:  112$</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', paddingLeft: 10, fontSize: 16, }}>Details</Text>
                        <Text style={{ color: 'green', paddingLeft: 10, fontSize: 16, paddingLeft: 230 }}>Delivered</Text>

                    </View>


                </Card>
            </View>




            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white',paddingBottom:20 ,paddingTop:20}}>

                    <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                        <Text style={{ color: 'black', fontSize: 17, }} >Order No - 1945433</Text>
                        <Text style={{ paddingLeft: 132, }}>05-12-2019</Text>
                    </View>
                    <Text style={{ fontSize: 15, paddingLeft: 10 }} >Tracking number:  IW3475455883</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingLeft: 10 }} >Quntity :   3 </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 140 }} >Total Amount:  112$</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', paddingLeft: 10, fontSize: 16, }}>Details</Text>
                        <Text style={{ color: 'green', paddingLeft: 10, fontSize: 16, paddingLeft: 230 }}>Delivered</Text>

                    </View>


                </Card>
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

export default MyOrders

const styles = StyleSheet.create({})