//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Pressable} from 'react-native';
import COLORS from '../../theme/colors';


const CustomButton = ({ title, onPress = () => { } }) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                style={styles.button}
            >
                <Text style={styles.txt}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        height: 55,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius:5,
        backgroundColor: COLORS.primary,
    },
    txt:{
        color: COLORS.white, 
        fontWeight: 'bold', 
        fontSize: 18 
    }
});


export default CustomButton;
