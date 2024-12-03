import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';

export default function Post() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [propertyType, setPropertyType] = useState("");

    const handlePost = () => {
        console.log("Post submitted:");
        console.log({ title, description, location, price, image, bedrooms, propertyType });
    };

    return (
        <ScrollView style={styles.PostContainer}>
            <View style={styles.inputsContainer}>
                <Text style={styles.postTitle}>Post Listing</Text>
                <Text style={styles.textInputs}>Add a title for your post (e.g., Beachfront Villa)</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Text style={styles.textInputs}>Add details about the property (e.g., Good/Bad issues)</Text>
                <TextInput
                    style={styles.input2}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <Text style={styles.textInputs}>Location (e.g., Beirut, Choueifat, 45 street, block 5, 2nd floor)</Text>
                <TextInput
                    style={styles.input3}
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                />
                <Text style={styles.textInputs}>Price in dollars ($$)</Text>
                <TextInput
                    style={styles.input4}
                    placeholder="Price"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={setPrice}
                />
                <Text style={styles.textInputs}>Add image for your property</Text>
                <TextInput
                    style={styles.input5}
                    placeholder="Image URL"
                    value={image}
                    onChangeText={setImage}
                />
                <Text style={styles.textInputs}>Number of Bedrooms</Text>
                <TextInput
                    style={styles.input6}
                    placeholder="Number of Bedrooms"
                    keyboardType="numeric"
                    value={bedrooms}
                    onChangeText={setBedrooms}
                />
                <Text style={styles.textInputs}>Property Type (e.g., Apartment, House, Villa)</Text>
                <TextInput
                    style={styles.input7}
                    placeholder="Property Type"
                    value={propertyType}
                    onChangeText={setPropertyType}
                />
                <Pressable onPress={handlePost} style={styles.postButton}>
                    <Text style={styles.postButtonText}>POST</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    PostContainer: {
        flex: 1,
        backgroundColor: "rgba(23,56,12,0.2)",
    },
    inputsContainer: {},
    postTitle: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input1: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input2: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input3: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input4: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input5: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input6: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    input7: {
        width: "60%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        paddingLeft: 20,
        marginLeft: 5,
    },
    textInputs: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
    },
    postButton: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "blue",
        width: 120,
        height: 40,
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "blue",
    },
    postButtonText: {
        color: "white",
        fontSize: 18,
        textAlign:"center",
        marginTop:"5%",
    },
});
