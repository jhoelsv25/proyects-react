import { Container, Stack, Typography } from "@mui/material";
import { JavaScript } from "./assets/JavaScript";
import { Start } from "./quizz/pages/Start";
import { Game } from "./quizz/pages/Game";
import { useQuestion } from "./quizz/hooks/useQuestion";
function App() {
  const { questions } = useQuestion();

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          marginTop={5}
          direction="row"
          justifyContent="center"
          gap={2}
          alignItems="center"
        >
          <JavaScript />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
