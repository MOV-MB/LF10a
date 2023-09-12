import React, {useState, useRef} from 'react';
import {View, ScrollView, Animated, Dimensions, StyleSheet} from 'react-native';
import {Card, Text, Button, Portal, Modal} from 'react-native-paper';

const {width} = Dimensions.get('window');

const CARD_WIDTH = width - 40;

interface CardData {
  id: string;
  name: string;
  description: string;
  image: any;
}

const cards: CardData[] = [
  {
    id: '1',
    name: 'John Doe Farms',
    description: 'Fresh tomatoes, cucumbers, and more!',
    image: require('./farm1.jpg'),
  },
  {
    id: '2',
    name: "Mary's Organic Farm",
    description: 'Organic lettuce, carrots, and beets!',
    image: require('./farm2.jpg'),
  },
  {
    id: '3',
    name: 'Green Valley Farms',
    description: 'Locally grown kale, spinach, and radishes!',
    image: require('./farm3.jpg'),
  },
];

const SwipingScreen: React.FC = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const showModal = (card: CardData) => {
    setSelectedCard(card);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.cardsContainer}>
        {cards.map(card => (
          <Card key={card.id} style={[styles.card, {width: CARD_WIDTH}]}>
            <Card.Cover source={card.image} style={styles.cardImage} />
            <Card.Content>
              <Text style={styles.cardTitle}>{card.name}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
              <Button onPress={() => showModal(card)}>View Details</Button>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          {selectedCard && (
            <View style={styles.fullscreenCard}>
              <Card.Cover
                source={selectedCard.image}
                style={styles.fullscreenImage}
              />
              <Card.Content>
                <Text style={styles.fullscreenTitle}>{selectedCard.name}</Text>
                <Text style={styles.fullscreenDescription}>
                  {selectedCard.description}
                </Text>
                <Button onPress={hideModal}>Close</Button>
              </Card.Content>
            </View>
          )}
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    alignItems: 'center',
  },
  card: {
    height: 400,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardImage: {
    height: '70%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  fullscreenCard: {
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  fullscreenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullscreenDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SwipingScreen;
