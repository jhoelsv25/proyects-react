

import { Spotify } from './spotify/Spotify'
import { ShowPlayerProvider } from './spotify/context/PlayerContext'


function App() {

  return (
    < ShowPlayerProvider>
      <Spotify />
    </ShowPlayerProvider>


  )
}

export default App
