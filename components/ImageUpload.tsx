import React, { useState } from "react";
import {
    View, Text, Image, TouchableOpacity,
    StyleSheet, Alert
} from "react-native";
import { ImageBrowser } from 'expo-image-picker-multiple';
import * as ImagePicker from 'react-native-image-picker';
import { Icon } from "@rneui/themed";
import { FontAwesomeIcon } from "./navigation/TabBarIcon";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function ImageUpload() {

    // Stores the selected image URI
    const [files, setFiles] = useState<string[] | null>(null);

    // Stores any error message
    const [error, setError] = useState(null);

    // Function to pick an image from 
    //the device's media library
    const pickImage = async () => {
        ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            // maxWidth: 4,
            // maxHeight: 3,
            // quality: 1,
            // selectionLimit: 6,

        }, (response) => {
            console.log(response);
        },);
        // ImageCropPicker.openPicker({
        //     width: 200,
        //     height: 200,
        //     cropping: true,
        //     multiple: true
        // }).then(images => {
        //     setFiles(
        //         images.map(image => {
        //             if (!image.sourceURL) { return }
        //             else {
        //                 return image.sourceURL
        //             }
        //         })
        //     )
        // }).catch(

        // )
        // const { status } = await ImagePicker.
        //     requestMediaLibraryPermissionsAsync();

        // if (status !== "granted") {

        //     // If permission is denied, show an alert
        //     Alert.alert(
        //         "Permission Denied",
        //         `Sorry, we need camera 
        //          roll permission to upload images.`
        //     );
        // } else {

        //     // Launch the image library and get
        //     // the selected image
        //     const result =
        //         await ImagePicker.launchImageLibraryAsync();

        //     if (!result.canceled) {

        //         // If an image is selected (not cancelled), 
        //         // update the file state variable
        //         setFile(result.assets.map(item => item.uri));

        //         // Clear any previous errors
        //         setError(null);
        //     }
        // }
    };

    return (
        <View style={styles.container}>
            {/* Button to choose an image */}
            <View style={styles.row}>
                <View style={styles.addImage}>
                    <Text>Add Images</Text>
                    <MaterialCommunityIcons name="camera-plus" size={50} color="black" onPress={pickImage} />
                </View>
                {/* <TouchableOpacity style={styles.button}
                onPress={pickImage}>
                <Text style={styles.buttonText}>
                    Choose Image
                </Text>
            </TouchableOpacity> */}

                {/* Conditionally render the image 
            or error message */}
                {files ? (
                    // Display the selected image
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: files[0] }}
                            style={styles.image}
                        />
                    </View>
                ) : (
                    // Display an error message if there's 
                    // an error or no image selected
                    <View style={{ ...styles.image, ...styles.imageContainer, borderColor: 'black', borderWidth: 2, borderStyle: "dashed" }}>
                        {/* <Text style={styles.errorText}>{error}</Text> */}
                        <Image
                            style={{ justifyContent: "center", alignSelf: "center", margin: 'auto' }}
                            source={require('@/assets/images/favicon.png')}
                        />
                    </View>
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // padding: 16,

    },
    row: { flexDirection: 'row' },
    header: {
        fontSize: 20,
        // marginBottom: 16,
    },
    addImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    imageContainer: {
        marginLeft: 'auto',
        borderRadius: 8,
        margin: 20,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    errorText: {
        color: "red",
        marginTop: 16,
    },
});