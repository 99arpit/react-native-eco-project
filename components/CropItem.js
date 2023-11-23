import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/Octicons';

const CropItem = () => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="left" size={25} style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', color: "black" }} color="black" />
                <Text size={20} style={{ paddingTop: 7, paddingLeft: 120, fontWeight: 'bold', color: 'black', fontSize: 20 }}>Crop the item</Text>
            </View>

            <View style={{ paddingTop: 10 }} >

                <ImageBackground style={{ height: 530, width: 410, }} source={require("../components/screens/camra.png")} >


                {/* <Icon4
                        name=""
                        size={22}
                        color="white"
                        style={{ position: 'absolute', top: 13, right: 15 }}

                    /> */}




                </ImageBackground>

            </View>

            <View style={{ paddingTop: 15, paddingLeft: 181 }}>

                <ImageBackground style={{ height: 47, width: 47, }} source={require("../components/screens/Ellipse.png")} >

                    <Icon4
                        name="search"
                        size={22}
                        color="white"
                        style={{ position: 'absolute', top: 13, right: 13 }}

                    />

                </ImageBackground>
            </View>



        </>
    )
}

export default CropItem

const styles = StyleSheet.create({})