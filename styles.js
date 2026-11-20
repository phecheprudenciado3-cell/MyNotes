
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingTop: 60
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#263238",
    textAlign: "center"
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 25
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    minHeight: 55,
    marginBottom: 10
  },

  addButton: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15
  },

  noteItem: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },

  noteText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 10
  },

  editButton: {
    backgroundColor: "#F9A825",
    padding: 10,
    borderRadius: 7
  },

  deleteButton: {
    backgroundColor: "#E53935",
    padding: 10,
    borderRadius: 7
  },

  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 20
  },

  cancelText: {
    color: "#E53935",
    textAlign: "center",
    marginTop: 12
  }

});

export default styles;
