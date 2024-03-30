import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import Starlist from '../../components/Star';
import styles from "./style";

const DetailScreen = ({ route }) => {
    const {
        name,
        author,
        image,
        stars,
        info,
    } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.ImageStyle}
            />
            <View style={styles.info}>
                <Text style={styles.bookTextStyle}>{name}</Text>
                <Text style={styles.authorTextStyle}>{author}</Text>
                <View style={styles.starSection}>
                    <Starlist stars={stars} /> 
                    <Text style={styles.score}>
                        {stars}.0 <Text style={styles.scoreNum}>/ 5.0</Text>
                    </Text> 
                </View>
                <Text style={styles.descriptionText}>{info}</Text>
            </View>

            <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Buy Now for $46.99</Text>
            </Pressable>
        </View>
    );
}

export default DetailScreen;