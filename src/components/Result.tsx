import React from 'react';
import { resultType } from '../App';
import { Button } from './atoms/Button';
import Image from '../images/polishman.png';

interface Props {
	result: resultType;
}

export const Result = ({ result }: Props) => {
	return (
		<div>
			<img src={Image} alt="あなたに合う国の男性写真サンプル" />
			<p>{result.country} </p>
			<Button />
		</div>
	);
};
