//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors';
import CustomButton from '../../components/atom/CustomButton';
import CustomInput from '../../components/atom/CustomInput';

// create a component
const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView >
            <ScrollView contentContainerStyle={{
                paddingTop: 20,
                paddingHorizontal: 30,
            }}>
                <Text style={styles.txt}>
                    Sign In
                </Text>
                <View style={{ marginTop: 20 }}>

                    <CustomInput
                        placeholder="E-mail"
                    />
                    <CustomInput
                        placeholder="Password"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')}
                        style={{ alignItems: 'flex-end', marginTop: 20 }}>
                        <Text>Forget Password ?</Text>
                    </TouchableOpacity>
                    <CustomButton
                        title='SignIn' />

                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text>Don't Have an Account?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={{}}>
                            <Text style={{ color: COLORS.secondary }}> Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    txt: {
        color: COLORS.secondary,
        fontSize: 40,
    }
});

//make this component available to the app
export default SignInScreen;
