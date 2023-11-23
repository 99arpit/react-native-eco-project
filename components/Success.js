import { View, Image, StyleSheet, Text ,TouchableOpacity} from "react-native";
import React from 'react'

const Success = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{
          }}
          source={require("../components/screens/bags.png")}
        />
        <Text style={[styles.bigBlue]}>Success!</Text>
        <Text style={[styles.ap]}>Your order will be delivered soon.
        </Text>
        <Text style={[styles.ar]}>
          Thank you for choosing our app!
        </Text>




      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Paintings List')}>
        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
          <View style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>ADD CARD</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Success

const styles = StyleSheet.create({

  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    textAlign: "center"

  },

  bigBlue: {
    textAlign: 'center',
    paddingTop: 30,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  ap: {
    paddingLeft: 45,
    paddingTop: 10,
    paddingRight: 45,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  ar: {
    paddingLeft: 45,

    paddingRight: 45,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  su: {



  }
})