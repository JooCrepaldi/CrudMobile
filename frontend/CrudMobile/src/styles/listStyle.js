import { StyleSheet } from "react-native"

export const listStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 16,
    paddingTop: 10
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 10
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E5E5EA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  avatarText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E"
  },

  info: {
    flex: 1
  },

  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1C1C1E"
  },

  subtitle: {
    fontSize: 13,
    color: "#8E8E93",
    marginTop: 2
  },

  menuButton: {
    padding: 6
  },

  menuText: {
    fontSize: 20,
    color: "#8E8E93",
    fontWeight: "600"
  }
})