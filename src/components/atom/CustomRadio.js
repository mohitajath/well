//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';



const CustomRadio = () => {

    const [check2, setCheck2] = useState(false);
    return (
        <>
            <CheckBox
                center
                title="Male"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={check2}
                onPress={() => setCheck2(!check2)}
            />
        </>
    );
};


const styles = StyleSheet.create({});


export default CustomRadio;
