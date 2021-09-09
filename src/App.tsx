import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';
import { countryChoiceMap } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [error, setError] = React.useState(false);

	const totalNumber = firstNumber + secondNumber;

	const handleClick = useCallback(() => {
		if (!firstNumber || !secondNumber) {
			setError(true);
			return;
		}

		setIsSubmitted(true);
		// 以前エラーになっていた場合は、そのstateが残っているのでリセットする
		error && setError(false);
	}, [error, firstNumber, secondNumber]);

	return (
		<div className="px-16 py-6 flex justify-center align-middle text-center sm:py-16 ">
			{!isSubmitted ? (
				<FirstView
					onClick={handleClick}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
					error={error}
				/>
			) : (
				<Result
					result={countryChoiceMap[totalNumber]}
					setIsSubmitted={setIsSubmitted}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
				/>
			)}
		</div>
	);
}

export default App;
