import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import data from './data.json'

export default function Home() {
  const ideas = data.ideas;
  
  const renderIdeaCard = (idea: any) => (
    <View key={idea.id} style={styles.ideaCard}>
      {/* Header with user info and blockchain status */}
      <View style={styles.cardHeader}>
        <View style={styles.userSection}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{idea.username.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{idea.username}</Text>
            <Text style={styles.timeAgo}>{idea.timeAgo} ago</Text>
          </View>
        </View>
        
        <View style={styles.blockchainStatus}>
          <View style={[styles.statusIndicator, idea.verified && styles.statusVerified]}>
            <Ionicons 
              name={idea.verified ? "shield-checkmark" : "shield-outline"} 
              size={16} 
              color={idea.verified ? "#00ff88" : "#666"} 
            />
          </View>
          <Text style={[styles.statusText, idea.verified && styles.statusTextVerified]}>
            {idea.verified ? "VERIFIED" : "PENDING"}
          </Text>
        </View>
      </View>

      {/* Main content */}
      <View style={styles.contentSection}>
        <Text style={styles.ideaTitle}>{idea.title}</Text>
        <Text style={styles.ideaDescription}>{idea.description}</Text>
        
        <View style={styles.metaInfo}>
          <View style={styles.blockchain}>
            <Ionicons name="cube-outline" size={14} color="#FFD93D" />
            <Text style={styles.blockchainText}>Chain ID: {Math.random().toString(16).slice(2, 10)}</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="flash" size={18} color="#FFD93D" />
          <Text style={styles.actionText}>{idea.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses-outline" size={18} color="#999" />
          <Text style={styles.actionText}>{idea.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={18} color="#999" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.actionButton, styles.bookmarkButton]}>
          <Ionicons name="bookmark-outline" size={18} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Futuristic Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.appTitle}>LITMUS</Text>
          <Text style={styles.appSubtitle}>Ideas</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="search" size={24} color="#FFD93D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="notifications-outline" size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Ionicons name="flash" size={16} color="#FFD93D" />
            <Text style={styles.statText}>Network Active</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="people" size={16} color="#00ff88" />
            <Text style={styles.statText}>{ideas.length} Ideas Live</Text>
          </View>
        </View>
        
        {ideas.map(renderIdeaCard)}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: '#0a0a0a',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFD93D',
    letterSpacing: 2,
  },
  appSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
    opacity: 0.8,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 8,
  },
  feed: {
    flex: 1,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: '#111',
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 12,
    color: '#ccc',
    fontWeight: '500',
  },
  ideaCard: {
    backgroundColor: '#111',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#222',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD93D20',
    borderWidth: 2,
    borderColor: '#FFD93D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD93D',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 2,
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
  },
  blockchainStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIndicator: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  statusVerified: {
    backgroundColor: '#00ff8820',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#666',
    letterSpacing: 1,
  },
  statusTextVerified: {
    color: '#00ff88',
  },
  contentSection: {
    padding: 16,
  },
  ideaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 12,
    lineHeight: 26,
  },
  ideaDescription: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
    marginBottom: 16,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  difficultyBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  difficultyBeginner: {
    backgroundColor: '#00ff8820',
    borderColor: '#00ff88',
  },
  difficultyIntermediate: {
    backgroundColor: '#FFD93D20',
    borderColor: '#FFD93D',
  },
  difficultyAdvanced: {
    backgroundColor: '#ff444420',
    borderColor: '#ff4444',
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  blockchain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    opacity: 0.7,
  },
  blockchainText: {
    fontSize: 12,
    color: '#FFD93D',
    fontFamily: 'monospace',
  },
  actionsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    backgroundColor: '#0f0f0f',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginRight: 20,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  bookmarkButton: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  actionText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
});

