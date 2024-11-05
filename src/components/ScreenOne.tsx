import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ScreenOne({ navigation }) {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.title}>
                Welcome! 🎉
            </label>
            
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Hello!")}
            >
                Tap Me
            </button>

            <button
                style={styles.button}
                onTap={() => navigation.navigate("Two", { message: "Hello!" })}
            >
                Next Screen
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff69b4",
    },
    title: {
        fontSize: 24,
        color: "white",
        margin: 20,
    },
    button: {
        fontSize: 18,
        color: "#2e6ddf",
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
    },
});