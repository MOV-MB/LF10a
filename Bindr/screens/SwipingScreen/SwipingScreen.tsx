import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swipe-cards';

// @ts-ignore
import testCardImage = require('./testcard.jpg');

const SwipingScreen: React.FC = () => {
  const cards = [{image: testCardImage}];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLike = (card: any) => {
    // Handle when a card is swiped right
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDislike = (card: any) => {
    // Handle when a card is swiped left
  };

  return (
    <View>
      <Text>Swiping Screen</Text>
      <Swiper
        cards={cards}
        renderCard={(cardData: {
          name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal;
        }) => (
          <View>
            <Text>{cardData.name}</Text>
            {/* Other card content */}
          </View>
        )}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </View>
  );
};

export default SwipingScreen;
