import React from "react"
import { Modal, View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import modalStyles from "../../styles/modalStyles"

export default function ActionModal({ visible, onClose, onEdit, onDelete, personName }) {
    return (

        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <TouchableOpacity
                style={modalStyles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <TouchableOpacity //container
                    style={modalStyles.container}
                    activeOpacity={1}
                    onPress={() => {}}
                >

                    <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
                        <Ionicons name="close" size={18} color="#8E8E93" />
                    </TouchableOpacity>

                    <Text style={modalStyles.title}>
                        {personName ?? "Person"}
                    </Text>

                    <Text style={modalStyles.subtitle}>
                        What would you like to do?
                    </Text>

                    <View style={modalStyles.buttonsRow}>
                        <TouchableOpacity style={modalStyles.outlineButton} onPress={onEdit}>
                            <Text style={modalStyles.outlineButtonText}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.solidButton} onPress={onDelete}>
                            <Text style={modalStyles.solidButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>

    )

}