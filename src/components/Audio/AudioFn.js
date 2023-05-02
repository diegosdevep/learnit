import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './audio.styles';
import { colors } from '../../constant/colors';
import { getDurationFormatted } from '../../utils/getDurationFormatted';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionAudio } from '../../redux/audioSlice';

const AudioFn = ({
  questions,
  setCurrentQuestion,
  currentQuestion,
  setRecordings,
  recordings,
}) => {
  const [recording, setRecording] = useState();
  const audioState = useSelector((state) => state.question);
  const questionAudios = audioState.questionAudios;
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    if (!questions) return;
    const remainingQuestions = questions.filter((q) => q !== currentQuestion);
    const nextQuestionIndex = Math.floor(
      Math.random() * remainingQuestions.length
    );
    const nextQuestion = remainingQuestions[nextQuestionIndex];
    setCurrentQuestion(nextQuestion);
  };

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
        dispatch(
          addQuestionAudio({
            question: currentQuestion,
            audio: recording,
          })
        );
      } else {
        setMessage('Please grant permission to app to access microphone');
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    await sound.getStatusAsync(); // wait for sound to load completely
    const duration = getDurationFormatted(status.durationMillis);
    updatedRecordings.push({
      sound: sound,
      duration: duration,
      file: recording.getURI(),
    });
    setRecordings(updatedRecordings);
  }

  return (
    <View style={styles.iconBox}>
      <Icon
        name='skip-previous'
        type='material-community'
        size={60}
        color={colors.deepPurple}
      />
      <Icon
        name={recording ? 'stop-circle' : 'play-circle'}
        type='material-community'
        size={80}
        color={colors.deepPurple}
        onPress={recording ? stopRecording : startRecording}
      />

      <Icon
        name='skip-next'
        type='material-community'
        size={60}
        color={colors.deepPurple}
        onPress={handleNextQuestion}
      />
    </View>
  );
};

export default AudioFn;
