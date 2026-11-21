
import React from "react";

import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

export default function NoteItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.noteItem}>

      <View style={styles.noteHeader}>
        <View style={styles.noteTag}>
          <Text style={styles.noteTagText}>
            PERSONAL NOTE
          </Text>
        </View>

        <Text style={styles.noteDate}>
          {item.date || "Saved note"}
        </Text>
      </View>

      <Text style={styles.noteText}>
        {item.text}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(item)}
          activeOpacity={0.7}
        >
          <Text style={styles.editText}>
            ✎  Edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteText}>
            ✕  Delete
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

