import { StyleSheet } from "react-native"

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F7",
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 24,
        gap: 12,
    },
    label: {
        fontSize: 13,
        fontWeight: "500",
        color: "#8E8E93",
        marginBottom: 4,
        marginLeft: 4,
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#1C1C1E",
        borderWidth: 0,
        margin: 10
    },
    inputFocused: {
        borderWidth: 1.5,
        borderColor: "#1C1C1E",
    },
    inputGroup: {
        marginBottom: 8,
    },
    submitButton: {
        backgroundColor: "#1C1C1E",
        borderRadius: 50,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 16,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
    },
})