import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ScreenTwo({ navigation, route }) {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>
                {route.params.message}
            </label>

            <button
                style={styles.button}
                onTap={() => navigation.goBack()}
            >
                Go Back
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
    text: {
        fontSize: 24,
        color: "white",
        margin: 20,
        textAlignment: "center",
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