//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors'
import CustomInput from '../../components/atom/CustomInput';
import CustomButton from '../../components/atom/CustomButton';
import CustomRadio from '../../components/atom/CustomRadio';

const SignUpScreen = ({ navigation }) => {
    return (

        <SafeAreaView >
            <ScrollView contentContainerStyle={{
                paddingTop: 20,
                paddingHorizontal: 30
            }}>
                <Text style={styles.txt}>
                    Sign Up
                </Text>
                <View style={{ marginTop: 20 }}>
                    <CustomInput

                        placeholder="Full Name"
                    />
                    <CustomInput

                        placeholder="Email"
                    />
                    <CustomInput

                        placeholder="Mobile No"
                    />

                    {/* <Text style={{
                        marginTop: 20
                    }} >
                        Gender
                    </Text>

                    <CustomRadio /> */}

                    <CustomInput
                        placeholder="Password"
                    />
                    <CustomInput
                        placeholder="Confirm Password"
                    />
                    <CustomButton
                        title='SignUp' />
                    
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>

                        <Text>Already Have an Account?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={{}}>
                            <Text style={{ color: COLORS.secondary }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    txt: {
        color: COLORS.secondary,
        fontSize: 40,
    }
});


export default SignUpScreen;
