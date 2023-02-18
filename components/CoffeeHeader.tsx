import { Image, StyleSheet, Text, View } from "react-native";

const cover = require('../assets/coffee/coffee.-cover.jpg')

const CoffeeHeader = () => {
    return <>
        <Image style={styles.image} source={cover} />
        <View style={styles.container}>
            <Text style={styles.title}>Types of Coffee</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6F4E37',
        paddingVertical: 8,
        marginBottom: 12
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 140,
        resizeMode: 'cover'
    }
})

export default CoffeeHeader;