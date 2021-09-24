import React, { useMemo, useState } from 'react';
import { ResultTemplate } from './components/ResultTemplate';
import { FirstViewTemplate } from './components/FirstViewTemplate';
import { choiceCountryMap } from './data';
import { selections } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const initialValue = useMemo(() => Array(selections.length).fill('0'), []);

	const [formData, setFormData] = useState<string[]>(initialValue);

	const totalValue = formData.join('_');

	// now: rendered on ever render => 必要な時だけレンダーされる方法は？:選択肢全てそろったときのみとか。 note:memoだとresultではレンダーされない
	const disabled = useMemo(() => {
		return formData.includes('0');
	}, [formData]);

	// ユーザーが選択した全ての値を配列に追加する関数。
	// 選択肢グループ（性格、体格など）のindexを渡し、配列のそのindexの場所にクリックした値を入れる。
	const updateSelections = (index: number, value: string) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		setFormData(newFormData);
	};

	// TODO: callback
	const resetData = () => {
		setFormData(initialValue);

		setIsSubmitted(false);
	};

	return (
		<div className="min-h-screen p-8 flex justify-center items-center text-center">
			{!isSubmitted ? (
				<FirstViewTemplate
					onSubmit={() => setIsSubmitted(true)}
					onRadioButtonChange={updateSelections}
					selections={selections}
					disabled={disabled}
				/>
			) : (
				<ResultTemplate
					//countryChoiceMapの中から、ユーザーが選択した合計値とkeyが一致するものを渡す
					result={choiceCountryMap[totalValue]}
					onReturnButtonClick={resetData}
				/>
			)}
		</div>
	);
}

export default App;
