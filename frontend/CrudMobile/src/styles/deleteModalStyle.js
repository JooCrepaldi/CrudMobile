import { StyleSheet } from "react-native"

export const deleteStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1C1C1E",
        marginBottom: 6,
    },
    message: {
        fontSize: 14,
        color: "#8E8E93",
        marginBottom: 24,
    },
    name: {
        fontWeight: "600",
        color: "#1C1C1E",
    },
    buttons: {
        flexDirection: "row",
        gap: 10,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#E5E5EA",
        alignItems: "center",
    },
    cancelText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#1C1C1E",
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 50,
        backgroundColor: "#FF3B30",
        alignItems: "center",
    },
    confirmText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#FFFFFF",
    }
})