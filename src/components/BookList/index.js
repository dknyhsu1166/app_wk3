import React from "react";
import { Text, FlatList,View } from "react-native";
import sections from "../../json/book.json";
import BookDetail from "../BookDetail";
import styles from "./style";

const BookList = ({ navigation }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>
                {sections[0].title}
            </Text>
            <FlatList
                horizontal={true}
                data={sections[0].data}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
            <Text style={styles.sectionHeader}>
                {sections[1].title}
            </Text>
            <FlatList
                horizontal={true}
                data={sections[1].data}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
        </View>
    );
};

export default BookList;