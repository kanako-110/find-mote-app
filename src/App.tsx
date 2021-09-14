import React, { useState } from 'react';
import { Result } from './components/Result';
import { FirstView } from './components/FirstView';
import { countryChoiceMap } from './data';
import { selections } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const initialValue = Array(selections.length).fill('0');
	const [formData, setFormData] = useState<string[]>(initialValue);

	const totalNumber = formData.join('');

	const disabled = formData.includes('0');

	// ユーザーが選択した全ての値を配列に追加する関数。
	// 選択肢グループ（性格、体格など）のindexを渡し、配列のそのindexの場所にクリックした値を入れる。
	const updateSelections = (index: number, value: string) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		setFormData(newFormData);
	};

	const handleClick = () => {
		setIsSubmitted(true);
	};

	return (
		<div className="min-h-screen p-8 flex justify-center items-center text-center">
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
					//countryChoiceMapの中から、ユーザーが選択した合計値とkeyが一致するものを渡す
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
