import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/SignUp'
import Login from './components/Login'
import UploadProfile from './components/UploadProfile'
import UploadPainting from './components/UploadPainting'
import AddShiAdd from './components/AddShiAdd'
import MyProfile from './components/MyProfile'
import YourAccc from './components/YourAccc'
import LoginSucc from './components/LoginSucc'
import ForgPass from './components/ForgPass'
import Success from './components/Success'
import ShippingAdd from './components/ShippingAdd'
import Visual from './components/Visual'
import Settings from './components/Settings'
import Painting from './components/Painting'
import Camra from './components/Camra'
import CropItem from './components/CropItem'
import Payment from './components/Payment'
import MyOrders from './components/MyOrders'
import SignUp2 from './components/SignUp2'
import PaintList from './components/PaintList'
import Checkout from './components/Checkout'
import MyCart from './components/MyCart'
import PasswordChangePopup from './components/PasswordChangePopup'
import OrderDetails from './components/OrderDetails'
import OtpVer from './components/OtpVer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Addnewcard from './components/Addnewcard';
import Category from './components/Category';
import VendorSignUp from './components/VendorSignUp';
import CustomerSignUp from './components/CustomerSignUp';

const Tab = createBottomTabNavigator();
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <View> */}
      {/* <Category/> */}
      {/* <CustomerSignUp/> */}
      {/* <VendorSignUp/> */}
      {/* <SignUp/> */}
      {/* <OtpVer/> */}
      {/* <SignUp2/> */}
      {/* <YourAccc/> */}
      {/* <Login/> */}
      {/* <LoginSucc/> */}
      {/* <ForgPass/> */}
      {/* <UploadProfile/> */}
      {/* <Visual/> */}
      {/* <Camra/> */}
      {/* <CropItem/> */}
      {/* <UploadPainting/> */}
      {/* <Painting /> */}
      {/* <PaintList/> */}
      {/* <MyCart/> */}
      {/* <Checkout/> */}
      {/* <Payment/> */}
      {/* <Addnewcard/> */}
      {/* <ShippingAdd/> */}
      {/* <AddShiAdd/> */}
      {/* <Success /> */}
      {/* <MyProfile/> */}
      {/* <MyOrders /> */}
      {/* <OrderDetails/> */}
      {/* <Settings /> */}
      {/* <PasswordChangePopup /> */}


      {/* </View> */}

      {<NavigationContainer>
        <Stack.Navigator initialRouteName='sp'>
          <Stack.Screen name='Please select your category' component={Category} />
          <Stack.Screen name='Vendor Sign Up' component={VendorSignUp} />
          <Stack.Screen name='Customer Sign Up' component={CustomerSignUp} />

          <Stack.Screen name='sign up' component={SignUp} />
          <Stack.Screen name='OTP Verification' component={OtpVer} />

          <Stack.Screen name='ForgPass Back' component={ForgPass} />

          <Stack.Screen name='SignUp' component={SignUp2} />

          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Back' component={YourAccc} />

          <Stack.Screen name='Login Back' component={LoginSucc} />
          <Stack.Screen name='My profile' component={MyProfile} />

          <Stack.Screen name='Painting List' component={PaintList} />
          <Stack.Screen name='Upload Profile' component={UploadProfile} />
          <Stack.Screen name='Camera' component={Camra} />

          <Stack.Screen name='Visual Search' component={Visual} />
          <Stack.Screen name='Painting' component={Painting} />
          <Stack.Screen name='Payment methods' component={Payment} />
          <Stack.Screen name='Payment method' component={Addnewcard} />
          <Stack.Screen name='Shipping Addresses' component={ShippingAdd} />
          <Stack.Screen name='Adding Shipping Address' component={AddShiAdd} />
          <Stack.Screen name='Success' component={Success} />
          <Stack.Screen name='Paintings List' component={PaintList} />


        </Stack.Navigator>



        {/* <Tab.Navigator> */}
          {/* <Tab.Screen name='Home' component={MyCart} /> */}

          {/* <Tab.Screen name='Profile' component={MyProfile} /> */}



        {/* </Tab.Navigator> */}
      </NavigationContainer>}






    </>
  )
}

export default App

const styles = StyleSheet.create({})


