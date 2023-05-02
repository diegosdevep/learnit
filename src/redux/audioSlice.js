import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  questionAudios: {},
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addQuestionAudio: (state, action) => {
      const { question, audio } = action.payload;
      if (!state.questionAudios[question]) {
        state.questionAudios[question] = [
          {
            duration: audio._finalDurationMillis,
            date: new Date().toISOString(),
            file: audio._uri,
          },
        ];
      } else {
        state.questionAudios[question].push({
          duration: audio._finalDurationMillis,
          date: new Date().toISOString(),
          file: audio._uri,
        });
      }
    },
  },
});

export const { setUser, addQuestionAudio } = audioSlice.actions;
export default audioSlice.reducer;
