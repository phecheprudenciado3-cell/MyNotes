
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@my_notes";

// READ: Retrieve saved notes
export const getNotes = async () => {
  try {
    const savedNotes = await AsyncStorage.getItem(STORAGE_KEY);

    return savedNotes !== null
      ? JSON.parse(savedNotes)
      : [];
  } catch (error) {
    console.log("Error loading notes:", error);
    return [];
  }
};

// SAVE: Store notes locally
export const storeNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(notes)
    );
  } catch (error) {
    console.log("Error saving notes:", error);
    throw error;
  }
};
