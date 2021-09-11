import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';
import { countryChoiceMap } from './data';
import { selections } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const initialValue = Array(selections.length).fill('0');
	const [formData, setFormData] = useState<string[]>(initialValue);

	const totalNumber = formData.join('');

	const disabled = formData.includes('0');

	const updateSelections = (index: number, value: string) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		setFormData(newFormData);
	};

	const handleClick = () => {
		setIsSubmitted(true);
	};

	return (
		<div className="px-16 py-6 flex justify-center align-middle text-center sm:py-16 ">
			{!isSubmitted ? (
				<FirstView
					onClick={handleClick}
					selections={selections}
					setFormData={setFormData}
					updateSelections={updateSelections}
					disabled={disabled}
				/>
			) : (
				<Result
					result={countryChoiceMap[totalNumber]}
					setIsSubmitted={setIsSubmitted}
					setFormData={setFormData}
					initialValue={initialValue}
				/>
			)}
		</div>
	);
}

export default App;
