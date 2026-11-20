
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

      <Text style={styles.noteText}>
        {item.text}
      </Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
