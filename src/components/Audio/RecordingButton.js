import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function RecordButton({
  recording,
  startRecording,
  stopRecording,
  setMessage,
}) {
  function onPress() {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  return (
    <Button
      title={recording ? 'Stop Recording' : 'Start Recording'}
      onPress={onPress}
      style={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 16,
  },
});
