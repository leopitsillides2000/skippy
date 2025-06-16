import { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard, ScrollView } from "react-native";

interface InputProps {
    text: string,
    setText: (text: string) => void,
    label: string,
    placeholder?: string,
    height?: number
}

const CustomTextInput = (props: InputProps) => {

    return (

        <View>
            <View style={styles.labelContainer}>
                <Text>{props.label}</Text>
            </View>
            <ScrollView>
                <View style={props.height ? { ...styles.input, height: props.height } : styles.input}>
                    <TextInput
                        // ref={textInputReference}
                        placeholder={props.placeholder ? props.placeholder : props.label}
                        placeholderTextColor="gray"
                        value={props.text}
                        onChangeText={(text) => props.setText(text)}
                        autoFocus
                        multiline
                        keyboardType="default"
                    // onFocus={() => setIsLabel(true)}
                    // onBlur={() => { props.title == "" ? setIsLabel(false) : null }}
                    />
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        // borderWidth: 2,
        // borderColor: "black",
        backgroundColor: "white", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 5, // Amount of spacing between border and first/last letter
        marginStart: 25, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: 3, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    inputContainer: {
        borderWidth: 1, // Create border
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 0.75,
        padding: 10,
        borderColor: "gray",
        borderRadius: 7,
        zIndex: 0
    },
});

export default CustomTextInput;