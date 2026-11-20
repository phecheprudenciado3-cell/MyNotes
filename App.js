
import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";

import { getNotes, storeNotes } from "./StorageService";
import NoteItem from "./NoteItem";
import styles from "./styles";

export default function App() {

  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // READ: Load notes when the app starts
  useEffect(() => {
    const loadSavedNotes = async () => {
      const savedNotes = await getNotes();
      setNotes(savedNotes);
    };

    loadSavedNotes();
  }, []);

  // CREATE and UPDATE
  const handleSave = async () => {

    if (noteText.trim() === "") {
      Alert.alert("Warning", "Please enter a note.");
      return;
    }

    try {

      let updatedNotes;

      if (editingId !== null) {

        // UPDATE existing note
        updatedNotes = notes.map((note) =>
          note.id === editingId
            ? { ...note, text: noteText.trim() }
            : note
        );

      } else {

        // CREATE new note
        const newNote = {
          id: Date.now().toString(),
          text: noteText.trim()
        };

        updatedNotes = [...notes, newNote];
      }

      await storeNotes(updatedNotes);

      setNotes(updatedNotes);
      setNoteText("");
      setEditingId(null);

    } catch (error) {
      Alert.alert("Error", "Unable to save note.");
    }
  };

  // DELETE existing note
  const handleDelete = async (id) => {

    try {
      const updatedNotes = notes.filter(
        (note) => note.id !== id
      );

      await storeNotes(updatedNotes);
      setNotes(updatedNotes);

    } catch (error) {
      Alert.alert("Error", "Unable to delete note.");
    }
  };

  // Select a note for editing
  const handleEdit = (item) => {
    setNoteText(item.text);
    setEditingId(item.id);
  };

  // Cancel editing
  const handleCancel = () => {
    setNoteText("");
    setEditingId(null);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        My Notes App
      </Text>

      <Text style={styles.subtitle}>
        Keep your important notes organized.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your note..."
        value={noteText}
        onChangeText={setNoteText}
        multiline
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          {editingId !== null ? "Update Note" : "Add Note"}
        </Text>
      </TouchableOpacity>

      {editingId !== null && (
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelText}>
            Cancel Editing
          </Text>
        </TouchableOpacity>
      )}

      <Text style={styles.sectionTitle}>
        My Saved Notes ({notes.length})
      </Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No notes yet. Add your first note!
          </Text>
        }
      />

    </View>
  );
}

