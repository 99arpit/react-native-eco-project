import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Card } from 'react-native-paper';
const SignUp = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');



    return (
        <>
            <View style={{ backgroundColor: "gray" }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="left" size={20} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
                    <Icon name="search1" size={20} style={{ paddingLeft: 350, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />

                </View>
                <View style={styles.container}>

                    <Text style={[styles.bigBlue]}>Settings </Text>

                    <Text style={[styles.pi]}>Personal Information</Text>
                    <Text style={{ paddingLeft: 15,paddingTop:10 }} >Name,Date of Birth </Text>

                    <Text style={[styles.pi]}>Password</Text>
                    <Text style={{ paddingLeft: 15,paddingTop:10 }} >Password settings</Text>


                </View>

                <View style={{ paddingTop: 20 }}>
                    <Card style={{ borderRadius: 40 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', paddingBottom: 70, paddingTop: 20 }}>Password Change</Text>
                        <View style={{ paddingLeft: 20, paddingRight: 20,paddingTop:0 }}>

                            <Text style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 4 }}>Old Password</Text>

                            <Text style={{ paddingLeft: 255, paddingTop: 10 }}>Forgot Password ?  </Text>

                        </View>

                        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                            <Text style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 4 }}>New Password</Text>


                        </View>

                        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                            <Text style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 4 }}>Repeat New Password</Text>


                        </View>


                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 30,
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: 'blue',
                            borderRadius: 30,

                        }}>
                            <Text style={{ color: 'white',textAlign:'center' , fontSize: 20, }}>SAVE PASSWORD</Text>
                        </View>



                    </Card>

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
        paddingTop: 30,
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

