import { ReactNode } from 'react';

import tile1 from '../lib/tile-assets/01_val2.jpg';
import tile2 from '../lib/tile-assets/02_val4.jpg';
import tile3 from '../lib/tile-assets/03_val8.jpg';
import tile4 from '../lib/tile-assets/04_val16.jpg';
import tile5 from '../lib/tile-assets/05_val32.jpg';
import tile6 from '../lib/tile-assets/06_val64.png';
import tile7 from '../lib/tile-assets/07_val128.jpg';
import tile8 from '../lib/tile-assets/08_val256.jpg';
import tile9 from '../lib/tile-assets/09_val512.jpg';
import tile10 from '../lib/tile-assets/10_val1024.jpg';
import tile11 from '../lib/tile-assets/11_val2048.jpg';

interface TileImgProps {
	children?: ReactNode;
	img: string;
}
const tableRowStyle = { height: '106.25px' };

const TileImg = ({ children, img }: TileImgProps) => (
	<td
		style={{
			width: '106.25px',
			backgroundSize: '100% 100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		{children}
		<img
			src={img}
			width="106.25px"
			height="106.25px"
			style={{ objectFit: 'fill' }}
		/>
	</td>
);

const GameHeader = () => (
	<>
		<div className="heading">
			<div className="title">Sunflower Movement 2048</div>
		</div>
		<hr />
		<div className="above-game">
			<p className="game-intro">以太陽花學運事件進化過程改版的2048遊戲</p>
			<a className="restart-button">New Game</a>
		</div>
	</>
);

const GameDescription = () => (
	<>
		<div>
			<p className="game-explanation">
				<strong>
					<a href="https://zh.wikipedia.org/zh-tw/2048" target="_blank">
						遊戲說明
					</a>
				</strong>
				:<br />
				使用<strong className="important">箭頭按鍵</strong>把方塊
				<strong className="important">上下左右</strong>
				移動。如果兩個相同圖案的方塊在移動過程中碰撞，它們會被合併成下一階段的圖案方塊。每次移動時，會有一個30秒通過服貿或學生開始霸佔立法院的圖案方塊出現。
				<br />
				遊戲目標是進化到學運過程的最後階段。
			</p>
		</div>
	</>
);

const GameProgressionTable = () => (
	<>
		<hr />
		<p>遊戲進程(由左到右上到下的演進過程)</p>
		<table>
			<tbody>
				<tr style={tableRowStyle}>
					<TileImg img={tile1}>2</TileImg>
					<TileImg img={tile2}>4</TileImg>
					<TileImg img={tile3}>8</TileImg>
					<TileImg img={tile4}>16</TileImg>
				</tr>
				<tr style={tableRowStyle}>
					<TileImg img={tile5}>32</TileImg>
					<TileImg img={tile6}>64</TileImg>
					<TileImg img={tile7}>128</TileImg>
					<TileImg img={tile8}>256</TileImg>
				</tr>
				<tr style={tableRowStyle}>
					<TileImg img={tile9}>512</TileImg>
					<TileImg img={tile10}>1024</TileImg>
					<TileImg img={tile11}>2048</TileImg>
					<td></td>
				</tr>
			</tbody>
		</table>
	</>
);

export const GameIntro = () => (
	<>
		<GameHeader />
		<GameDescription />
		<GameProgressionTable />
	</>
);
