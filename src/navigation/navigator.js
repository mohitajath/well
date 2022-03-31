import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signupscreen/SignUpScreen';
import SignInScreen from '../screens/signinscreen/SignInScreen';
import ForgetPasswordScreen from '../screens/forgetpasswordscreen/ForgetPasswordScreen';


const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen name='SignInScreen' component={SignInScreen} />
                <Stack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;