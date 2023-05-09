import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from '../../components/Carousel/Carousel';
import { colors } from '../../constant/colors';
import { styles } from './home.styles';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={[styles.category, { color: colors.deepPurple }]}>
            Learnit
          </Text>
          <Icon
            type='material-community'
            name='heart'
            size={24}
            color={colors.deepPurple}
          />
        </View>

        <View style={styles.divider} />

        <View>
          <ImageBackground
            style={styles.img}
            source={require('../../../assets/header.png')}
            borderRadius={10}
          >
            <Text style={styles.title}>Start Talking</Text>
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.category}>More Popular</Text>
          <Carousel />
        </View>
        <View>
          <Text style={styles.category}>Our Recommendation</Text>

          <View>
            <Text style={styles.text}>Job Interview</Text>
            <Image
              style={styles.recommendation}
              source={require('../../../assets/talk.png')}
            />
            <Text style={styles.text}>Travel</Text>
            <Image
              style={styles.recommendation}
              source={require('../../../assets/avion.png')}
            />
            <Text style={styles.text}>Meetings</Text>
            <Image
              style={styles.recommendation}
              source={require('../../../assets/talking.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
