

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // MAIN SCREEN
  container: {
    flex: 1,
    backgroundColor: "#F8F7FC",
    paddingHorizontal: 22,
    paddingTop: 55
  },

  // HEADER
  header: {
    marginBottom: 25
  },

  greeting: {
    fontSize: 12,
    color: "#8B7CF6",
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 8
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#29263D",
    letterSpacing: -1
  },

  subtitle: {
    fontSize: 13,
    color: "#9290A3",
    marginTop: 7,
    lineHeight: 20
  },

  // SEARCH BAR
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 52,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EEEAF7"
  },

  searchIcon: {
    fontSize: 23,
    color: "#8B7CF6",
    marginRight: 10
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#29263D"
  },

  // INPUT CARD
  inputCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#EEEAF7"
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#8B7CF6",
    letterSpacing: 1.5,
    marginBottom: 12
  },

  input: {
    fontSize: 15,
    color: "#29263D",
    minHeight: 65,
    textAlignVertical: "top",
    paddingTop: 5
  },

  // ADD BUTTON
  addButton: {
    backgroundColor: "#8B7CF6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
    shadowColor: "#8B7CF6",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14
  },

  cancelText: {
    color: "#8B7CF6",
    textAlign: "center",
    marginTop: 13,
    fontWeight: "600",
    fontSize: 13
  },

  // NOTES SECTION
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#29263D"
  },

  noteCount: {
    backgroundColor: "#EAE5FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    color: "#7868D6",
    fontWeight: "bold",
    fontSize: 10
  },

  listContent: {
    paddingBottom: 30,
    flexGrow: 1
  },

  // NOTE CARD
  noteItem: {
    backgroundColor: "#FFFFFF",
    padding: 17,
    borderRadius: 17,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#EEEAF7",
    elevation: 2,
    shadowColor: "#29263D",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13
  },

  noteTag: {
    backgroundColor: "#EAE5FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8
  },

  noteTagText: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#7868D6",
    letterSpacing: 1
  },

  noteDate: {
    fontSize: 11,
    color: "#A5A0B5"
  },

  noteText: {
    fontSize: 15,
    lineHeight: 23,
    color: "#39364D",
    marginBottom: 17
  },

  // EDIT AND DELETE BUTTONS
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 9
  },

  editButton: {
    backgroundColor: "#F1EDFF",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 9
  },

  deleteButton: {
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 9
  },

  editText: {
    color: "#7868D6",
    fontWeight: "bold",
    fontSize: 12
  },

  deleteText: {
    color: "#D96B75",
    fontWeight: "bold",
    fontSize: 12
  },

  // EMPTY STATE
  emptyContainer: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 40
  },

  emptyIcon: {
    fontSize: 42,
    marginBottom: 12
  },

  emptyTitle: {
    fontSize: 16,
    color: "#39364D",
    fontWeight: "bold"
  },

  emptySubtitle: {
    fontSize: 12,
    color: "#9290A3",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 19
  }

});

export default styles;
