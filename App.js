

import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StatusBar,
  Keyboard
} from "react-native";

import { getNotes, storeNotes } from "./StorageService";
import NoteItem from "./NoteItem";
import styles from "./styles";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // READ: Load saved notes when the app first opens
  useEffect(() => {
    const loadSavedNotes = async () => {
      try {
        const savedNotes = await getNotes();
        setNotes(savedNotes);
      } catch (error) {
        Alert.alert("Error", "Unable to load your notes.");
      }
    };

    loadSavedNotes();
  }, []);

  // CREATE and UPDATE
  const handleSave = async () => {
    if (noteText.trim() === "") {
      Alert.alert("Empty Note", "Please enter a note first.");
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
          text: noteText.trim(),
          date: new Date().toLocaleDateString()
        };

        updatedNotes = [...notes, newNote];
      }

      // Save first, then update the screen
      await storeNotes(updatedNotes);

      setNotes(updatedNotes);
      setNoteText("");
      setEditingId(null);
      Keyboard.dismiss();

    } catch (error) {
      Alert.alert("Error", "Unable to save your note.");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      const updatedNotes = notes.filter(
        (note) => note.id !== id
      );

      await storeNotes(updatedNotes);
      setNotes(updatedNotes);

      if (editingId === id) {
        setEditingId(null);
        setNoteText("");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to delete your note.");
    }
  };

  // EDIT
  const handleEdit = (item) => {
    setNoteText(item.text);
    setEditingId(item.id);
  };

  // CANCEL EDITING
  const handleCancel = () => {
    setNoteText("");
    setEditingId(null);
    Keyboard.dismiss();
  };

  // SEARCH
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F8F7FC"
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          YOUR PERSONAL SPACE
        </Text>

        <Text style={styles.title}>
          My Notes
        </Text>

        <Text style={styles.subtitle}>
          Keep your thoughts organized, one note at a time.
        </Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search your notes..."
          placeholderTextColor="#A5A0B5"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* NOTE INPUT */}
      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>
          {editingId !== null ? "EDIT YOUR NOTE" : "NEW NOTE"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="What's on your mind today?"
          placeholderTextColor="#A5A0B5"
          value={noteText}
          onChangeText={setNoteText}
          multiline
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {editingId !== null ? "✓  Save Changes" : "+  Add Note"}
          </Text>
        </TouchableOpacity>

        {editingId !== null && (
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelText}>
              Cancel Editing
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* NOTES HEADER */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          My Notes
        </Text>

        <Text style={styles.noteCount}>
          {notes.length} {notes.length === 1 ? "NOTE" : "NOTES"}
        </Text>
      </View>

      {/* NOTES LIST */}
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📝</Text>

            <Text style={styles.emptyTitle}>
              {searchText
                ? "No notes found"
                : "Nothing here yet"}
            </Text>

            <Text style={styles.emptySubtitle}>
              {searchText
                ? "Try another search."
                : "Add your first note and keep your thoughts here."}
            </Text>
          </View>
        }
      />
    </View>
  );
}
