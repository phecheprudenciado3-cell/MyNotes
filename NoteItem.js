
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function NoteItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.noteItem}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTag}>PERSONAL NOTE</Text>
        <Text style={styles.noteDate}>
          {item.date || "Saved note"}
        </Text>
      </View>

      <Text style={styles.noteText}>{item.text}</Text>

      <View style={styles.noteDivider} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(item)}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


