import useScripts from './useScripts';

export default () => {
	useScripts();
	return (
		<>
			<hr />
			<div>
				<div className="scores-container">
					<div className="score-container">0</div>
					<div className="best-container">0</div>
				</div>
			</div>

			<div className="game-container">
				<div className="game-message">
					<p></p>
					<div className="lower">
						<a className="keep-playing-button">Keep going</a>
						<a className="retry-button">Try again</a>
					</div>
				</div>

				<div className="grid-container">
					<div className="grid-row">
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
					</div>
					<div className="grid-row">
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
					</div>
					<div className="grid-row">
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
					</div>
					<div className="grid-row">
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
						<div className="grid-cell"></div>
					</div>
				</div>

				<div className="tile-container"></div>
			</div>
		</>
	);
};
