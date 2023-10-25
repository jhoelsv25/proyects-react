import { create } from "zustand";

export const useQuestionStore = create((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit) => {
      const res = await fetch(`http://localhost:5173/data.json`);
      const data = await res.json();
      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
    selectAnswer: (questionId, answerIndex) => {
      const { questions } = get();
      const newQuestions = structuredClone(questions);
      const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
      const questionInfo = newQuestions[questionIndex];
      const isCorrectUserAnswer = questionInfo.correctAnser === answerIndex;

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      };
      set({ questions: newQuestions });
    },
  };
});
