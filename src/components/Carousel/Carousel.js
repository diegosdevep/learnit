import { View, Text, ScrollView, Image } from 'react-native';
import { morePopular } from '../../constant/morePopular';
import { styles } from './carousel.styles';

const Carousel = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {morePopular.map((item) => (
        <View key={item.id} style={styles.item}>
          {item.img ? <Image source={item.img} style={styles.img} /> : null}
          <View style={styles.box}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Carousel;
