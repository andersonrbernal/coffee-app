import { Image, Text, View } from "react-native";
import { Coffee } from "../data/coffeeList";
import { StyleSheet } from "react-native";

const CoffeeItem = ({ name, image, description }: Coffee) => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 100, height: 80 }} source={image} />
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text numberOfLines={5} style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 14
    },
    content: {
        flexShrink: 1,
        marginLeft: 10
    },
    title: {
        color: '#6F4E37',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#000'
    }
})

export default CoffeeItem;