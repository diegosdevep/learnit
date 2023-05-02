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

  return (
    <SafeAreaView>
      {currentQuestion ? (
        <ScrollView>
          <Image
            style={styles.img}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1677838848138-82699f276319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxhaXJwbGFuZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            }}
          />
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
