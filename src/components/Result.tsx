import React from 'react';
import { resultType } from '../App';
import { Button } from './atoms/Button';

interface Props {
	result: resultType;
}

export const Result = ({ result }: Props) => {
	return (
		<div>
			<img alt="あなたに合う国の男性写真サンプル" />
			<p>{result.country} </p>
			<Button />
		</div>
	);
};
