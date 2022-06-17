import { useEffect, useCallback, useMemo  } from "react";
import GameContainer from './GameContainer';
import GameIntro from './GameIntro';
import GameCredits from './GameCredits';

import './style/main.css';

function App() {
  return (
    <div className='container'>
      <GameIntro />
      <GameContainer />
      <GameCredits />
    </div>
  )
}

export default App
