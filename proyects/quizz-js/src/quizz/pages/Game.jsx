import { IconButton, Stack } from "@mui/material";
import { Question } from "../components/Question";
import { useQuestion } from "../hooks/useQuestion";
export const Game = () => {
  const { questions, currentQuestion } = useQuestion();

  console.log(questions);
  const questionInfo = questions[currentQuestion];
  return <Question info={questionInfo} />;
};
