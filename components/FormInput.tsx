import { useController, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function FormInput({ name, label, rules, nextFocus, style, ...props }) {
    const form = useFormContext();
    const { field } = useController({ control: form.control, name, rules });
    return (
        <View style={styles.formInput}>
            <Pressable onPress={() => form.setFocus(name)}>
                <Text style={{ marginBottom: 5 }}>{label}</Text>
            </Pressable>
            <TextInput
                {...field}
                {...props}
                onChangeText={field.onChange}
                blurOnSubmit={!nextFocus}
                returnKeyType={nextFocus ? 'next' : props.returnKeyType}
                onSubmitEditing={e => {
                    if (nextFocus) form.setFocus(nextFocus);
                    props.onSubmitEditing?.(e);
                }}
                style={styles.textBox}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formInput: {
        margin: 10,
    },
    textBox: {
        backgroundColor: "#FAF9F6",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5
    }
})