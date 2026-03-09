import { StyleSheet } from "react-native"

export const btnStyles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        left: "10%",
        right: "10%",
        backgroundColor: "#1C1C1E",
        borderRadius: 50,
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    fabText: {
        fontSize: 28,
        fontWeight: "300",
        color: "#FFFFFF",
        lineHeight: 32,
    }
})