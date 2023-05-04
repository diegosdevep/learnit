import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { categories } from '../../constant/categories';
import { styles } from './question.styles';
import RecordingLines from '../../components/Audio/RecordingLines';
import { colors } from '../../constant/colors';
import { useNavigation } from '@react-navigation/native';
import AudioFn from '../../components/Audio/AudioFn';

const Questions = ({ route }) => {
  const { categoryId } = route.params;
  const navigation = useNavigation();

  const [img, setImg] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState('');

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useLayoutEffect(() => {
    if (selectedCategory !== null) {
      navigation.setOptions({
        headerShown: true,
        title: selectedCategory.category,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
        headerStyle: {
          backgroundColor: colors.secondary,
          height: 110,
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
        },
        headerLeft: () => (
          <Icon
            name='chevron-left'
            type='material-community'
            size={45}
            color='white'
            onPress={() => navigation.navigate('category')}
          />
        ),
      });
    }
  }, [selectedCategory, navigation]);

  useEffect(() => {
    const category = categories.find((category) => category.id === categoryId);
    setSelectedCategory(category);
    setQuestions(category.questions);
    setCurrentQuestion(category.questions[0]);
  }, [categoryId]);

  useEffect(() => {
    if (selectedCategory && selectedCategory.id === categoryId) {
      setImg(selectedCategory.img);
    }
  }, [selectedCategory, categoryId]);

  return (
    <SafeAreaView>
      {currentQuestion ? (
        <ScrollView>
          {img ? (
            <Image style={styles.img} source={{ uri: img }} />
          ) : (
            <Image
              style={styles.img}
              source={{
                uri: 'https://media.istockphoto.com/id/591813764/es/foto/palabra-en-ingl%C3%A9s-hecha-con-letras-de-madera-de-bloque-junto-a-un.jpg?s=612x612&w=0&k=20&c=5u_MF_VKCZFbzNH5s2uX4LZUJzuaiysU2arGQaHopig=',
              }}
            />
          )}

          <Text style={styles.question}>{currentQuestion}</Text>

          {questions && (
            <AudioFn
              recordings={recordings}
              setRecordings={setRecordings}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              setQuestions={setQuestions}
            />
          )}

          <RecordingLines recordings={recordings} />

          <Text>{message}</Text>
        </ScrollView>
      ) : (
        <Text>No hay preguntas disponibles</Text>
      )}
    </SafeAreaView>
  );
};

export default Questions;
