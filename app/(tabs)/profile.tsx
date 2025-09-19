import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useAbstraxionAccount, useAbstraxionSigningClient } from '@burnt-labs/abstraxion-react-native';

export default function Profile() {
  const { data: account, isConnected } = useAbstraxionAccount();
  const [isConnecting, setIsConnecting] = useState(false);
  
  // Sample profile data when connected
  const sampleProfile = {
    username: "crypto_dev",
    displayName: "Alex Thompson",
    bio: "Full-stack developer passionate about blockchain technology and decentralized applications.",
    followers: 1247,
    following: 892,
    ideas: 23,
    avatar: "https://i.pravatar.cc/150?img=5",
    verified: true,
    joinDate: "March 2023",
    interests: ["DeFi", "NFTs", "Smart Contracts", "Web3"],
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // This would trigger the Abstraxion wallet connection
      // For demo purposes, we'll show an alert
      Alert.alert(
        "Connect Wallet",
        "Please connect your crypto wallet to access your profile.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Connect", onPress: () => console.log("Wallet connection initiated") }
        ]
      );
    } catch (error) {
      console.error("Connection error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    Alert.alert(
      "Disconnect Wallet",
      "Are you sure you want to disconnect your wallet?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Disconnect", style: "destructive", onPress: () => console.log("Disconnected") }
      ]
    );
  };

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <View style={styles.connectContainer}>
          <View style={styles.connectIcon}>
            <Ionicons name="wallet-outline" size={64} color="#FFD93D" />
          </View>
          <Text style={styles.connectTitle}>Connect Your Wallet</Text>
          <Text style={styles.connectDescription}>
            Sign in with your crypto wallet to access your profile and interact with the blockchain.
          </Text>
          
          <TouchableOpacity 
            style={[styles.connectButton, isConnecting && styles.connectButtonDisabled]} 
            onPress={handleConnect}
            disabled={isConnecting}
          >
            <Ionicons name="wallet" size={20} color="#000" style={{ marginRight: 8 }} />
            <Text style={styles.connectButtonText}>
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </Text>
          </TouchableOpacity>

          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>With a connected wallet you can:</Text>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#FFD93D" />
              <Text style={styles.featureText}>Create and share ideas on-chain</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#FFD93D" />
              <Text style={styles.featureText}>Earn tokens for quality content</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#FFD93D" />
              <Text style={styles.featureText}>Access exclusive features</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.settingsButton} onPress={handleDisconnect}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: sampleProfile.avatar }} style={styles.profileImage} />
          {sampleProfile.verified && (
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark" size={16} color="#000" />
            </View>
          )}
        </View>
        
        <Text style={styles.displayName}>{sampleProfile.displayName}</Text>
        <Text style={styles.username}>@{sampleProfile.username}</Text>
        <Text style={styles.bio}>{sampleProfile.bio}</Text>
        
        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{sampleProfile.ideas}</Text>
            <Text style={styles.statLabel}>Ideas</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{sampleProfile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{sampleProfile.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.interestsContainer}>
          {sampleProfile.interests.map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Account Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.accountInfo}>
          <View style={styles.accountRow}>
            <Text style={styles.accountLabel}>Joined</Text>
            <Text style={styles.accountValue}>{sampleProfile.joinDate}</Text>
          </View>
          <View style={styles.accountRow}>
            <Text style={styles.accountLabel}>Wallet</Text>
            <Text style={styles.accountValue}>
              {account?.bech32Address ? 
                `${account.bech32Address.slice(0, 8)}...${account.bech32Address.slice(-8)}` 
                : "Connected"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  // Connect Screen Styles
  connectContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  connectIcon: {
    marginBottom: 24,
  },
  connectTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  connectDescription: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD93D',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 32,
  },
  connectButtonDisabled: {
    opacity: 0.7,
  },
  connectButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  featuresContainer: {
    width: '100%',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#ccc',
    marginLeft: 12,
  },
  // Profile Screen Styles
  profileHeader: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  settingsButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFD93D',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD93D',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#999',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  stats: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginRight: 12,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  shareButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  interestTag: {
    backgroundColor: '#FFD93D20',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFD93D40',
  },
  interestText: {
    fontSize: 14,
    color: '#FFD93D',
    fontWeight: '500',
  },
  accountInfo: {
    gap: 16,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountLabel: {
    fontSize: 16,
    color: '#999',
  },
  accountValue: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});

