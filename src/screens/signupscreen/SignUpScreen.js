//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import COLORS from '../../theme/colors'
import CustomInput from '../../components/atom/CustomInput';
import CustomButton from '../../components/atom/CustomButton';
import CustomRadio from '../../components/atom/CustomRadio';

const SignUpScreen = () => {
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
                    <Text style={{
                        marginTop: 20
                    }} >
                        Gender
                    </Text>

                    {/* <CustomRadio /> */}

                    <CustomInput
                        placeholder="Password"
                    />
                    <CustomInput
                        placeholder="Confirm Password"
                    />
                    <CustomButton
                        title='SignUp' />
                    <Text style={{
                        alignItems: 'center', marginTop: 10,
                        marginHorizontal: 150,
                        fontSize: 15
                    }}>
                        or
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        color: COLORS.secondary,
        fontSize: 40,
    }
});


export default SignUpScreen;
