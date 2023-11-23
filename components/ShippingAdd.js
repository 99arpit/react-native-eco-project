import { StyleSheet, Text, View, Title, Paragraph, Button,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card } from 'react-native-paper';

const SignUp = ({navigation}) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');



    return (


        <>
           


            <View style={{ paddingTop: 30, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 17, }} >Jane Doe</Text>
                            <Text style={{ paddingLeft: 245, color: 'blue' }}>Edit</Text>
                        </View>
                        <Text style={{ color: 'black', }}>3 Newbridge Court</Text>
                        <Text style={{ color: 'black', }}>Chino Hills, CA 91709, United States</Text>

                        <View style={{ flexDirection: 'row'  }}>
                            <Icon name="checksquare" size={20} style={{  paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

                            <Text style={{ color: 'black', fontSize: 15, paddingTop: 10, paddingLeft: 20 }}>Use as the shipping address</Text>
                        </View>

                    </Card.Content>
                </Card>
            </View>

            <View style={{ paddingTop: 30, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 17, }} >Jane Doe</Text>
                            <Text style={{ paddingLeft: 245, color: 'blue' }}>Edit</Text>
                        </View>
                        <Text style={{ color: 'black', }}>3 Newbridge Court</Text>
                        <Text style={{ color: 'black', }}>Chino Hills, CA 91709, United States</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon3 name="checkbox-blank-outline" size={22} style={{  paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

                            <Text style={{ color: 'black', fontSize: 15, paddingTop: 10, paddingLeft: 20 }}>Use as the shipping address</Text>
                        </View>

                    </Card.Content>
                </Card>
            </View>

            <View style={{ paddingTop: 30, marginLeft: 20, marginRight: 20 }}>
                <Card style={{ backgroundColor: 'white', }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 17, }} >Jane Doe</Text>
                            <Text style={{ paddingLeft: 245, color: 'blue' }}>Edit</Text>
                        </View>
                        <Text style={{ color: 'black', }}>3 Newbridge Court</Text>
                        <Text style={{ color: 'black', }}>Chino Hills, CA 91709, United States</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon3 name="checkbox-blank-outline" size={22} style={{  paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

                            <Text style={{ color: 'black', fontSize: 15, paddingTop: 10, paddingLeft: 20 }}>Use as the shipping address</Text>
                        </View>

                    </Card.Content>
                </Card>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Adding Shipping Address')}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                                <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: 'white', fontSize: 20 }}>Add Shipping</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


        </>

    );
};

const styles = StyleSheet.create({





});

export default SignUp

