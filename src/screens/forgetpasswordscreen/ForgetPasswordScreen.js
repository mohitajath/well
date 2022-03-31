//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import COLORS from '../../theme/colors';

import CustomInput from '../../components/atom/CustomInput';
import CustomButton from '../../components/atom/CustomButton';


const ForgetPasswordScreen = () => {
    return (
        <SafeAreaView  >
            <ScrollView contentContainerStyle={{
                paddingTop: 20,
                paddingHorizontal: 30,
            }} >
                <Text style={styles.txt}>Forgot Password</Text>
                <Text style={{ marginTop: 10, fontSize: 14 }}>We just need your registered e-mail ID to send reset link
                </Text>
                <CustomInput placeholder='Enter your registered email-id' />
                <CustomButton title='Send Verification code' />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    txt: {
        color: COLORS.secondary,
        fontSize: 32,

    },
});

export default ForgetPasswordScreen;
