import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'

const OrderDetails = () => {
    return (

        <ScrollView >
            {/* <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingBottom: 15 }}>
                <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
                <Text style={{ color: 'black', fontSize: 20, paddingTop: 6, paddingLeft: 120, fontWeight: 'bold' }}>Order Details</Text>

            </View> */}






            <View style={{ flexDirection: 'row' }}>

                <Text style={{ paddingLeft: 20, fontSize: 17, color: 'black', fontWeight: 'bold', paddingTop: 20 }}>Order №1947034</Text>
                <Text style={{ paddingLeft: 175, paddingTop: 20 }}>05-12-2019</Text>


            </View>


            <View style={{ flexDirection: 'row' }}>

                <Text style={{ paddingLeft: 20, fontSize: 16, fontWeight: 'bold', paddingTop: 20 }}>Tracking number : IW3475453455</Text>
                <Text style={{ paddingLeft: 65, paddingTop: 20, color: 'green' }}>Delivered</Text>



            </View>


            <Text style={{ paddingLeft: 20 }}>3 items</Text>


            <View style={{ paddingTop: 15, marginLeft: 20, marginRight: 20, }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image style={{ borderRadius: 10, height: 100, width: 100 }} source={require("../components/screens/image.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>ruby</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 218, paddingTop: 10, }} />
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

                            <Image style={{ borderRadius: 10, height: 100, width: 100 }} source={require("../components/screens/image1.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>Erin</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 218, paddingTop: 10, }} />
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

                            <Image style={{ borderRadius: 10, height: 100, width: 100 }} source={require("../components/screens/image2.png")} />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5 }}>Rococo</Text>
                            <Icon1 name="dots-three-vertical" size={15} style={{ paddingLeft: 188, paddingTop: 10, }} />
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            {/* <Icon2 name="md-add-circle-outline" size={15} style={{ paddingLeft: 10, paddingTop: 0, }} color="black" /> */}
                        </View>

                    </View>

                </Card>
            </View>


            <Text style={{ paddingLeft: 20, fontSize: 17, color: 'black', paddingTop: 20 }}>Order information</Text>

            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, paddingLeft: 20 }}>Shipping Address:</Text>
                <Text style={{ fontSize: 17, paddingLeft: 20, color: 'black' }}>3 Newbridge Court ,Chino Hills,
                    CA 91709, United States</Text>


            </View>




            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, paddingLeft: 20 }}>Payment method:</Text>
                <Image style={{ height: 30, width: 40 }} source={require("../components/screens/master.png")}></Image>
                <Text style={{ fontSize: 17, paddingLeft: 20 }}>**** **** **** 3947</Text>


            </View>




            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, paddingLeft: 20 }}>Delivery method:</Text>
                <Text style={{ fontSize: 17, paddingLeft: 20, color: 'black' }}>FedEx, 3 days, 15$</Text>


            </View>



            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, paddingLeft: 20 }}>Total Amount:</Text>
                <Text style={{ fontSize: 17, paddingLeft: 20, color: 'black' }}>133$</Text>


            </View>


            <View style={{ flexDirection: 'row', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, paddingLeft: 20 }}>Total Amount:</Text>
                <Text style={{ fontSize: 17, paddingLeft: 20, color: 'black' }}>133$</Text>


            </View>



        </ScrollView>



    )
}

export default OrderDetails

const styles = StyleSheet.create({})