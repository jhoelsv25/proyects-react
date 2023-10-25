import { useState } from "react";
import { Button } from "@mui/material";
import { useQuestion } from "../hooks/useQuestion";
const LIMIT_QUESTIONS = 10;
export const Start = () => {
  //const [currentPage, setCurrentPage] = useState(0);
  const { fetchQuestions } = useQuestion();

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };
  return (
    <Button onClick={handleClick} variant="contained">
      ¡Emepzar!
    </Button>
  );
};
