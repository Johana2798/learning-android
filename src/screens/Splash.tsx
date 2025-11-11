import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

//const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {}

function Splash() {
    return (
        <View> 
            <Image
                source={require('../assets/images/airplane.png')}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    }
});