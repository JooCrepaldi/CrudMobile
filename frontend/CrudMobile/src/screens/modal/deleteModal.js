import { View, Text, TouchableOpacity, Modal } from "react-native"
import { deleteStyles } from "../../styles/deleteModalStyle"

export default function DeleteModal({ visible, onClose, onConfirm, personName }) {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={deleteStyles.overlay}>
                <View style={deleteStyles.container}>
                    <Text style={deleteStyles.title}>Deletar pessoa</Text>
                    <Text style={deleteStyles.message}>
                        Tem certeza que deseja deletar{" "}
                        <Text style={deleteStyles.name}>{personName}</Text>?
                    </Text>
                    <View style={deleteStyles.buttons}>
                        <TouchableOpacity
                            style={deleteStyles.cancelButton}
                            onPress={onClose}
                        >
                            <Text style={deleteStyles.cancelText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={deleteStyles.confirmButton}
                            onPress={onConfirm}
                        >
                            <Text style={deleteStyles.confirmText}>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}