import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>
                This is a test for the TypeScript
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a3a3b',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default registerRootComponent(App);
