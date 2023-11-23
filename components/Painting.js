import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

const   Painting = ({navigation}) => {
    return (

        <>
           

            <View style={{
                paddingTop: 10


            }}>

                <Image style={{ height: 340, width: 410, }} source={require("../components/screens/camra.png")} />

            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 14, paddingLeft: 15 }} >Vincent Van </Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 14, paddingLeft: 195 }} >$ 19.99 </Text>

            </View>
            <Text style={{ color: 'black', fontSize: 17, paddingTop: 20, marginRight: 20, marginLeft: 20 }}>Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>


            <View style={{ marginTop: 5 }}>

                {/* <View style={{ backgroundColor: 'white', paddingTop: 25, paddingBottom: 25 }}>

                    <View style={{
                        marginLeft: 20,
                        marginRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: 'blue',
                        borderRadius: 30,

                    }}>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>ADD TO CART</Text>
                    </View>


                </View> */}




                <TouchableOpacity onPress={() => navigation.navigate('Payment methods')}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>ADD TO CART</Text>
            </View>
          </View>
        </TouchableOpacity>












            </View>

        </>
    )
}

export default Painting

const styles = StyleSheet.create({})