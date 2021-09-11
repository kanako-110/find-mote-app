import PolandImg from './images/polish.avif';
import ChinaImg from './images/chinese.avif';
import RussiaImg from './images/russia.avif';
import ItalyImg from './images/italiy.avif';
import SamoaImg from './images/samoa.avif';
import IndiaImg from './images/indian.avif';
import AmericaCanadaImg from './images/american.avif';
import BrazilImg from './images/brazilian.avif';
import ThaiNepalImg from './images/thai.avif';

export interface ResultType {
	country: string;
	img: string; //optionalとる
	description: string;
	link: string;
}

interface MapType {
	[key: string]: ResultType;
}

export const countryChoiceMap: MapType = {
	110: {
		country: 'China',
		img: ChinaImg,
		description:
			'自分に自信があり、堂々としている中国男子。女性に優しく、家族も大事にします。',
		link: 'https://www.jal.co.jp/intltour/chn/index.html',
	},
	120: {
		country: 'Poland',
		img: PolandImg,
		description:
			'努力家が多く謙虚なポーランド男子。富裕層が多いのもポイント。信仰心が強い人も多いため、日本人女子はその点を理解しておくと良さそう。',
		link: 'https://www.jal.co.jp/intltour/jmb/poland/',
	},
	130: {
		country: 'Russia',
		img: RussiaImg,
		description:
			'一見冷たそうに見えて、陽気で涙もろいなど感情豊かなロシア男子。喜怒哀楽の怒の部分もしっかり忘れずに、キレやすい一面もあります。イメージ通りお酒好きが多いので、初デートは飲み行くので決まりです。',
		link: 'https://www.jal.co.jp/intltour/eur/ru/',
	},

	210: {
		country: 'Italy',
		img: ItalyImg,
		description:
			'陽気で楽観的な人が多いイタリア男子。何に対してもこだわりが強い・マザコン多めという一面もありますが、その分好きなことにエネルギッシュで人との繋がりを大切にします。',
		link: 'https://www.jal.co.jp/intltour/eur/it/',
	},

	220: {
		country: 'Samoa',
		img: SamoaImg,
		description:
			'体格が良く、喧嘩が強いサモア男子。頼りになりますね。強いだけでなく、陽気でフレンドリーでもあります。視力がめちゃくちゃいいです。遠くからでも見つけてくれそう！',
		link: 'https://www.expedia.co.jp/Samoa.d155.Travel?pwaLob=wizard-package-pwa',
	},

	230: {
		country: 'India',
		img: IndiaImg,
		description:
			'陽気でフレンドリー、話すことが大好きな人が多いです。ちょっと無口なあなたにピッタリ！！頭がいい、家族を大切にするのも特徴です。大ざっぱなところがあるので、几帳面のあなたには要チェックポイントです。',
		link: 'https://www.jal.co.jp/intltour/asi/ind/',
	},
	310: {
		country: 'America',
		img: AmericaCanadaImg,
		description:
			'オープンでフレンドリーなアメリカ男子。女性を優先するジェントルマンなところも超魅力的。感情表現もストレートで、細かいことは気にしません。スポーツ好きが多いので、初デートはスポーツ観戦でもいいかも！',
		link: 'https://www.jal.co.jp/intltour/ame/us',
	},
	320: {
		country: 'Brazil',
		img: BrazilImg,
		description:
			'イケメンが多いで有名なブラジル男子。とにかく明るく、積極的、ロマンチストなのが特徴的です。マイペースな一面もあり、ゆったり陽気なあなたと相性抜群！',
		link: 'https://www.jal.co.jp/intltour/ame/index.html',
	},
	330: {
		country: 'Thai',
		img: ThaiNepalImg,
		description:
			'女性にとにかく優しいタイ男子。合格です。アプローチが積極的で、家族を大切にします。細かいことは気にしない人が多いです。合言葉はマイペンライ（タイ語で大丈夫、問題ない）。',
		link: 'https://www.jal.co.jp/intltour/asi/thkh/',
	},
};

export const selections = [
	{
		id: 1,
		formLabel: 'あなたに1番近い体格を選んでください',
		options: [
			{ label: '細め', value: '1' },
			{ label: 'ぽっちゃり', value: '2' },
			{ label: 'グラマラス', value: '3' },
		],
	},
	{
		id: 2,
		formLabel: 'あなたに1番近い性格を選んでください',
		options: [
			{ label: '知的', value: '10' },
			{ label: '陽気', value: '20' },
			{ label: '家庭的', value: '30' },
		],
	},
];

export interface SelectionType {
	id: number;
	formLabel: string;
	options: {
		label: string;
		value: string;
	}[];
}
