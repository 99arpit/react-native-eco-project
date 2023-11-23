import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Card } from 'react-native-paper';
import painting from './Painting';

const Checkout = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingBottom: 15 }}>
                <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
                <Text style={{ color: 'black', fontSize: 20, paddingTop: 6, paddingLeft: 120, fontWeight: 'bold' }}>Checkout</Text>

            </View>
            <Text style={{ color: 'black', fontSize: 15, paddingTop: 10, paddingLeft: 20, color: 'black', fontWeight: 'bold' }}>Shipping address</Text>
            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 17, }} >Jane Doe</Text>
                            <Text style={{ paddingLeft: 220, color: 'blue' }}>Change</Text>
                        </View>
                        <Text style={{ color: 'black', }}>3 Newbridge Court</Text>
                        <Text style={{ color: 'black', }}>Chino Hills, CA 91709, United States</Text>



                    </Card.Content>
                </Card>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, }}>
                <Text style={{ paddingTop: 10, paddingLeft: 20, color: 'black', fontSize: 17, fontWeight: 'bold' }}>Payment</Text>
                <Text style={{ paddingTop: 10, color: 'blue', paddingLeft: 245 }}>Change </Text>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>


                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <Image style={{ height: 34, width: 44, }} source={require("../components/screens/master.png")} />
                    </Card.Content>
                </Card>

                <Text style={{ paddingTop: 24, fontSize: 13, color: 'black' }}>     **** **** **** 3947</Text>



            </View>

            <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 20, paddingLeft: 20, fontSize: 15 }}>Delivery method</Text>



            <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>


                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <Image style={{ height: 34, width: 80, }} source={require("../components/screens/fed.png")} />

                        <Text style={{ paddingLeft: 9 }}>2-3 days</Text>

                    </Card.Content>
                </Card>

                <View style={{ paddingLeft: 20 }}>
                    <Card style={{ backgroundColor: 'white', }}>
                        <Card.Content>
                            <Image style={{ height: 34, width: 80, }} source={require("../components/screens/USPS.png")} />

                            <Text style={{ paddingLeft: 9 }}>2-3 days</Text>

                        </Card.Content>
                    </Card>

                </View>

                <View style={{ paddingLeft: 20 }}>

                    <Card style={{ backgroundColor: 'white', }}>
                        <Card.Content>
                            <Image style={{ height: 34, width: 80, }} source={require("../components/screens/DHL.png")} />

                            <Text style={{ paddingLeft: 9 }}>2-3 days</Text>

                        </Card.Content>
                    </Card>


                </View>






            </View>
            <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                <Text style={{ paddingLeft: 5, fontSize: 14 }}>Order :</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', paddingLeft: 305, fontSize: 14 }}>112$</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Text style={{ paddingLeft: 5, fontSize: 14 }}>Delivery :</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', paddingLeft: 298, fontSize: 14 }}>15$</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Text style={{ paddingLeft: 5, fontSize: 14 }}>Summary :</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', paddingLeft: 280, fontSize: 14 }}>127$</Text>
            </View>


            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                <View style={{

                    marginTop: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: 'blue',
                    borderRadius: 30,

                }}>
                    <Text style={{ color: 'white', paddingLeft: 145, fontSize: 14, }}>SUBMIT ORDER</Text>
                </View>

            </View>

        </>
    )
}

export default Checkout

const styles = StyleSheet.create({})