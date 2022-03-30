//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';
import COLORS from '../../theme/colors';


const CustomInput = ({ error, placeholder, secureTextEntry, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    const [message, setMessage] = useState('');
    return (
        <View style={styles.container}>
            <View style={[
                styles.inputContainer,
                {
                    borderColor: error
                        ? COLORS.red
                        : isFocused
                            ? COLORS.secondary
                            : COLORS.light
                }
            ]}>
                <TextInput
                    style={{
                        flex: 1,
                        height: 55,
                        width: '100%',
                        borderWidth: 1,
                        borderRadius: 5,
                        alignItems: 'center',
                        marginTop:15
                    }}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    onChangeText={() => { }}
                    {...props}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({});

export default CustomInput;
