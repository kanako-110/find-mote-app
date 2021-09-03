import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';

function App() {
	const [isSubmtted, setIsSubmitted] = useState(false);

	const handleClick = useCallback(() => {
		setIsSubmitted(true);
	}, []);

	return (
		<div>{!isSubmtted ? <FirstView onClick={handleClick} /> : <Result />}</div>
	);
}

export default App;
