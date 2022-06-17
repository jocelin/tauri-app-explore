import { useEffect, useState } from 'react';

const scriptsToLoad = [
	'jquery-1.11.0.min',
	'bind_polyfill',
	'classlist_polyfill',
	'animframe_polyfill',
	'keyboard_input_manager',
	'html_actuator',
	'grid',
	'tile',
	'local_storage_manager',
	'game_manager',
	'application',
];
const useScripts = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (!loaded) {
			scriptsToLoad.forEach(
				async (script) => await import(`./js/${script}.js`),
			);
			setLoaded(true);
		}
	}, [loaded]);
};

export default useScripts;
