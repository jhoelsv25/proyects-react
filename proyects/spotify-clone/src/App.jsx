import { Spotify } from "./spotify/Spotify";
import { PlayerProvider } from "./spotify/context/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <Spotify />
    </PlayerProvider>
  );
}

export default App;
