
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert,
  Keyboard,
} from "react-native";

import { getNotes, storeNotes } from "./StorageService";
import NoteItem from "./NoteItem";
import styles from "./styles";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await getNotes();
      setNotes(savedNotes);
    } catch (error) {
      Alert.alert("Error", "Unable to load your notes.");
    } finally {
      setLoading(false);
    }
  };

  const saveNotes = async (updatedNotes) => {
    try {
      await storeNotes(updatedNotes);
      setNotes(updatedNotes);
      return true;
    } catch (error) {
      Alert.alert("Error", "Unable to save your notes.");
      return false;
    }
  };

  const handleSaveNote = async () => {
    const trimmedText = noteText.trim();

    if (!trimmedText) {
      Alert.alert("Empty Note", "Please write something first.");
      return;
    }

    let updatedNotes;

    if (editingId) {
      updatedNotes = notes.map((note) =>
        note.id === editingId
          ? { ...note, text: trimmedText }
          : note
      );
    } else {
      const newNote = {
        id: Date.now().toString(),
        text: trimmedText,
        date: new Date().toLocaleDateString(),
      };

      updatedNotes = [newNote, ...notes];
    }

    const saved = await saveNotes(updatedNotes);

    if (saved) {
      setNoteText("");
      setEditingId(null);
      Keyboard.dismiss();
    }
  };

  const handleEdit = (note) => {
    setNoteText(note.text);
    setEditingId(note.id);
  };

  const handleCancelEdit = () => {
    setNoteText("");
    setEditingId(null);
    Keyboard.dismiss();
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            const updatedNotes = notes.filter(
              (note) => note.id !== id
            );
            await saveNotes(updatedNotes);
          },
        },
      ]
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderNote = ({ item }) => (
    <NoteItem
      item={item}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F5F0E8"
        barStyle="dark-content"
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.greeting}>YOUR PERSONAL SPACE</Text>
              <Text style={styles.title}>My Notes.</Text>
              <Text style={styles.subtitle}>
                A quiet place for your thoughts and ideas.
              </Text>
            </View>

            <View style={styles.searchContainer}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search your notes..."
                placeholderTextColor="#A99D8D"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>

            <View style={styles.inputCard}>
              <Text style={styles.inputLabel}>
                {editingId ? "EDIT YOUR NOTE" : "WRITE SOMETHING"}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Start writing your thoughts..."
                placeholderTextColor="#A99D8D"
                multiline
                textAlignVertical="top"
                value={noteText}
                onChangeText={setNoteText}
              />

              <View style={styles.inputActions}>
                {editingId && (
                  <TouchableOpacity
                    onPress={handleCancelEdit}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleSaveNote}
                >
                  <Text style={styles.buttonText}>
                    {editingId ? "Save Changes" : "+ Add Note"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Your Collection</Text>
              <Text style={styles.noteCount}>
                {filteredNotes.length} NOTES
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>✎</Text>
            <Text style={styles.emptyTitle}>
              {loading ? "Loading notes..." : "Nothing here yet"}
            </Text>
            <Text style={styles.emptySubtitle}>
              {loading
                ? "Please wait a moment."
                : searchText
                ? "No notes match your search."
                : "Your thoughts will find a home here."}
            </Text>
          </View>
        }
      />
    </View>
  );
}
