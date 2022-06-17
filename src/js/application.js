import GameManager from './game_manager';
import KeyboardInputManager from './keyboard_input_manager';
import HTMLActuator from './html_actuator';
import LocalStorageManager from './local_storage_manager';

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function updateTileBackgrounds(){
	var Imgs = [
			["01_val2.jpg", "100% 100%", "center"],
			["02_val4.jpg","scale","center"],
			["03_val8.jpg","100% 100%","center"],
			["04_val16.jpg","scale","center"],
			["05_val32.jpg","scale","top"],
			["06_val64.png","100% 100%","center"],
			["07_val128.jpg","scale","center"],
			["08_val256.jpg","scale","top"],
			["09_val512.jpg","scale","center"],
			["10_val1024.jpg","scale","center"],
			["11_val2048.jpg","100% 100%","center"]
	];

	for(var i=2, j=0; j<Imgs.length; (i=i*2), j++){
		var targetClass = $(".tile.tile-"+i );
	}
}