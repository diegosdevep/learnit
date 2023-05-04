import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Sharing from 'expo-sharing';
import { styles } from './audio.styles';
import { colors } from '../../constant/colors';

const RecordingLines = ({ recordings }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const now = new Date();
  const formattedDate = now.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const playSound = async (sound) => {
    setIsPlaying(true);
    await sound.replayAsync();
    setIsPlaying(false);
  };

  const shareFile = async (file) => {
    await Sharing.shareAsync(file);
  };

  return (
    <>
      {recordings.map((recordingLine, index) => {
        return (
          <View key={index} style={styles.row}>
            <Text style={styles.fill}>
              {formattedDate} {index + 1} - {recordingLine.duration}
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => playSound(recordingLine.sound)}
            >
              <Text style={styles.btnText}>
                {isPlaying ? 'Playing' : 'Play'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: colors.deepPurple }]}
              onPress={() => shareFile(recordingLine.file)}
            >
              <Text style={styles.btnText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelete}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default RecordingLines;
