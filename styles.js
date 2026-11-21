
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E8",
    paddingTop: 12,
  },

  listContent: {
    paddingHorizontal: 22,
    paddingBottom: 35,
  },

  header: {
    marginTop: 30,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 10,
    letterSpacing: 3,
    color: "#9A8977",
    fontWeight: "600",
    marginBottom: 12,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#39342F",
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 13,
    color: "#918577",
    marginTop: 8,
    lineHeight: 20,
  },

  searchContainer: {
    height: 50,
    backgroundColor: "#FFFCF7",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8DFD2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 25,
    color: "#918577",
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#39342F",
  },

  inputCard: {
    backgroundColor: "#FFFCF7",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E8DFD2",
    marginBottom: 30,
  },

  inputLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#9A8977",
    marginBottom: 14,
  },

  input: {
    minHeight: 100,
    fontSize: 14,
    lineHeight: 22,
    color: "#39342F",
    padding: 0,
  },

  inputActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 15,
  },

  addButton: {
    backgroundColor: "#8A7968",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFFCF7",
    fontSize: 12,
    fontWeight: "600",
  },

  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginRight: 8,
  },

  cancelText: {
    color: "#8A7968",
    fontSize: 12,
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#39342F",
  },

  noteCount: {
    fontSize: 10,
    letterSpacing: 1,
    color: "#9A8977",
    fontWeight: "600",
  },

  noteItem: {
    backgroundColor: "#FFFCF7",
    padding: 18,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E8DFD2",
    marginBottom: 13,
  },

  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  noteTag: {
    fontSize: 9,
    letterSpacing: 1.5,
    color: "#9A8977",
    fontWeight: "700",
  },

  noteDate: {
    fontSize: 10,
    color: "#A99D8D",
  },

  noteText: {
    fontSize: 14,
    lineHeight: 23,
    color: "#39342F",
  },

  noteDivider: {
    height: 1,
    backgroundColor: "#EEE7DD",
    marginTop: 17,
    marginBottom: 12,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  editButton: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginRight: 5,
  },

  deleteButton: {
    paddingVertical: 7,
    paddingHorizontal: 14,
  },

  editText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8A7968",
  },

  deleteText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#A36F61",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 45,
  },

  emptyIcon: {
    fontSize: 32,
    color: "#B5A693",
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#39342F",
    marginBottom: 7,
  },

  emptySubtitle: {
    fontSize: 12,
    color: "#A99D8D",
    textAlign: "center",
  },
});

export default styles;
