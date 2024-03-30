import React from 'react';
import { View, Text } from 'react-native';


const MyBookScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>
                My books
            </Text>
        </View>
    );
}

export default MyBookScreen;