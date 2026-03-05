import { StyleSheet } from "react-native"

const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 24,
        width: "90%",
        alignItems: "center",
    },
    closeButton: {
        position: "absolute",
        top: 14,
        right: 14,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1C1C1E",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: "#8E8E93",
        textAlign: "center",
        marginBottom: 24,
    },
    buttonsRow: {
        flexDirection: "column", 
        gap: 10,
        width: "100%",
    },
    outlineButton: {
        borderWidth: 1.5,
        borderColor: "#E0E0E0",
        borderRadius: 50,
        paddingVertical: 14,
        alignItems: "center",
    },
    outlineButtonText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#1C1C1E",
    },
    solidButton: {
        backgroundColor: "#FF3B30",
        borderRadius: 50,
        paddingVertical: 14,
        alignItems: "center",
    },
    solidButtonText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#fff",
    },
})

export default modalStyles