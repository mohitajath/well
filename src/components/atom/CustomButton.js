//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors';


const CustomButton = ({ title, onPress = () => { } }) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={{
                    height: 55,
                    width: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10,
                    backgroundColor: COLORS.primary,
                    borderRadius:5
                }}
            >
                <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});


export default CustomButton;
