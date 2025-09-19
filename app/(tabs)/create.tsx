import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleCreate = () => {
    if (!description.trim()) {
      Alert.alert("Validation Error", "Please complete all required fields to proceed");
      return;
    }
    
    // Simulate blockchain interaction
    Alert.alert(
      "Blockchain Network Unavailable", 
      "LITMUS network is currently experiencing high traffic. Your idea will be queued for verification once the network stabilizes.",
      [{ text: "Queue Idea", style: "default" }]
    );
    
    // Clear form after submission
    setTimeout(() => {
      setTitle("");
      setDescription("");
      setDifficulty("Beginner");
    }, 1000);
  };

  const difficultyOptions = ["Beginner", "Intermediate", "Advanced"];

  return (
    <View style={styles.container}>
      {/* Futuristic Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>LITMUS Upload</Text>
          <Text style={styles.headerSubtitle}>Share knowledge with the collective</Text>
        </View>
        <View style={styles.networkStatus}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Network Active</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Title Input */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Idea Title</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your idea title..."
                placeholderTextColor="#666"
                value={title}
                onChangeText={setTitle}
                maxLength={100}
              />
              <Text style={styles.charCount}>{title.length}/100</Text>
            </View>
          </View>

          
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>TITLE</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="TITLE"
                placeholderTextColor="#666"
                value={title}
                onChangeText={setTitle}
                numberOfLines={1}
                maxLength={100}
                textAlignVertical="top"
              />
              <Text style={styles.charCount}>{title.length}/100</Text>
            </View>
          </View>

          
          {/* Description Input */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Description</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Describe your idea in detail..."
                placeholderTextColor="#666"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={6}
                maxLength={500}
                textAlignVertical="top"
              />
              <Text style={styles.charCount}>{description.length}/500</Text>
            </View>
          </View>

      
       

          {/* Blockchain Info */}
          <View style={styles.blockchainInfo}>
            <Ionicons name="information-circle-outline" size={20} color="#FFD93D" />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Blockchain Verification</Text>
              <Text style={styles.infoText}>
                Your idea will be verified on LITMUS and receive a unique hash identifier
              </Text>
            </View>
          </View>

          {/* Upload Button */}
          <TouchableOpacity style={styles.uploadButton} onPress={handleCreate}>
            <View style={styles.uploadButtonContent}>
              <Ionicons name="cloud-upload-outline" size={24} color="#000" />
              <Text style={styles.uploadButtonText}>Upload to LITMUS</Text>
            </View>
            <View style={styles.uploadButtonGlow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: '#0a0a0a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: '#FFD93D',
    letterSpacing: 1,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#999',
    fontWeight: '400',
  },
  networkStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00ff88',
  },
  statusText: {
    fontSize: 12,
    color: '#00ff88',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
    paddingBottom: 140,
  },
  inputSection: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  textArea: {
    height: 140,
    textAlignVertical: 'top',
    paddingTop: 16,
  },
  charCount: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
  difficultyGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  difficultyCard: {
    flex: 1,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'center',
  },
  difficultyCardSelected: {
    backgroundColor: '#FFD93D',
    borderColor: '#FFD93D',
  },
  difficultyBeginner: {
    // Additional styling for beginner if needed
  },
  difficultyIntermediate: {
    // Additional styling for intermediate if needed
  },
  difficultyAdvanced: {
    // Additional styling for advanced if needed
  },
  difficultyIcon: {
    marginBottom: 8,
  },
  difficultyLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 1,
  },
  difficultyLabelSelected: {
    color: '#000',
  },
  blockchainInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFD93D10',
    borderWidth: 1,
    borderColor: '#FFD93D30',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD93D',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#ccc',
    lineHeight: 18,
  },
  uploadButton: {
    position: 'relative',
    backgroundColor: '#FFD93D',
    borderRadius: 12,
    overflow: 'hidden',
  },
  uploadButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    gap: 12,
  },
  uploadButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 0.5,
  },
  uploadButtonGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    borderRadius: 12,
  },
});

