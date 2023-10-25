import { useQuestionStore } from "../store/questions";

export const useQuestion = () => {
  const questions = useQuestionStore((state) => state.questions);
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);
  return {
    questions,
    selectAnswer,
    currentQuestion,
    fetchQuestions,
  };
};
