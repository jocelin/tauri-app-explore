import { GameContainer, GameIntro, GameCredits } from './game-controls';

import './lib/style/main.css';

function App() {
	return (
		<div className="container">
			<GameIntro />
			<GameContainer />
			<GameCredits />
		</div>
	);
}

export default App;
