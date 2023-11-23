import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const SignUp = ({ navigation }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [Password] = React.useState('')
    const submit = () => {
        navigation.navigate("arp");
    }

    return (
        <>



            <View style={styles.container}>

                <View style={styles.ar}>
                    <SafeAreaView >



                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}

                            placeholder="OTP"
                            keyboardType="numeric"
                        />

                    </SafeAreaView>
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('OTP Verification')}>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                        <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>SIGN UP</Text>
                        </View>
                    </View>
                </TouchableOpacity>




                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                        <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>LOGIN </Text>
                        </View>
                    </View>
                </TouchableOpacity>




            </View>


        </>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    bigBlue: {
        paddingLeft: 10,

        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        paddingLeft: 10,
        backgroundColor: 'white',
        height: 60,
        margin: 5,
        padding: 10,
    },
    ar: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 40

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

