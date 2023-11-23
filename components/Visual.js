import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const Visual = ({navigation}) => {
    return (
        <>



            <ImageBackground style={{ height: 660, width: 413, }} source={require("../components/screens/visualback.png")} >
                <View >
                    <Text style={{ paddingLeft: 20, color: 'white', fontSize: 23, paddingTop: 150 }}>
                        Search for an painting by taking
                    </Text>
                    <Text style={{ paddingLeft: 20, color: 'white', fontSize: 23, paddingTop: 5 }}>
                        a photo or uploading an image
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>TAKE A PHOTO</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                        <View style={{
                            textAlign: 'center',
                            marginTop: 0,
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 30,
                            fontSize: 14,
                            borderWidth: 1.5,
                            borderColor: 'white',

                        }}>
                            <Text style={{ color: 'white', paddingLeft: 125, fontSize: 14, }}>UPLOAD AN IMAGE</Text>
                        </View>

                    </View>



                </View>


            </ImageBackground>

        </>


    )
}

export default Visual

const styles = StyleSheet.create({})