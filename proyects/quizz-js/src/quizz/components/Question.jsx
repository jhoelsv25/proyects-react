import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useQuestionStore } from "../store/questions";
export const Question = ({ info }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);

  const handleClick = (answerId) => () => {
    selectAnswer(info.id, answerId);
  };
  const bgColor = (info, index) => {
    const { correctAnswer, userSelectedAnswer } = info;
    if (userSelectedAnswer == null) return "transparent";
    if (index !== correctAnswer && index !== userSelectedAnswer) {
      return "tranparent";
    }
    if (index === correctAnswer) return "green";
    if (index === userSelectedAnswer) return "red";
    return "transparent";
  };

  return (
    <Card variant="outlined">
      <header>paginacion</header>
      <Typography variant="h6">{info.question}</Typography>
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <List disablePadding sx={{ bgcolor: "#FFFFFF" }}>
        {info.answers.map((answer, index) => {
          return (
            <ListItem disablePadding divider>
              <ListItemButton
                key={index}
                sx={{ bgcolor: bgColor(info, index) }}
                disabled={info.userSelectedAnswer != null}
                onClick={handleClick(index)}
              >
                <ListItemText primary={answer} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
