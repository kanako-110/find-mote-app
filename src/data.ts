import PolandImg from './images/polish.avif';
import ChinaImg from './images/chinese.avif';
import RussiaImg from './images/russia.avif';
import ItalyImg from './images/italiy.avif';
import SamoaImg from './images/samoa.avif';
import IndiaImg from './images/indian.avif';
import AmericaCanadaImg from './images/american.avif';
import BrazilImg from './images/brazilian.avif';
import ThaiImg from './images/thai.avif';
import ChineseWomanImg from './images/chinesewoman.avif';
import ThaiWomanImg from './images/thaiwoman.avif';
import KoreanWomanImg from './images/koreanwoman.avif';
import SamoaWomanImg from './images/samoawoman.avif';
import PolandWomanImg from './images/polandwoman.avif';
import PhilippinesWomanImg from './images/Philippinewoman.avif';
import AmericaWomanImg from './images/americawoman.avif';
import FranceWomanImg from './images/francewoman.avif';
import BrazilWomanImg from './images/francewoman.avif';

export interface ResultType {
	country: string;
	img: string;
	description: string;
	link: string;
}

interface MapType {
	[key: string]: ResultType;
}

// keyは、ユーザーが選ぶ選択肢の合計値に値する。
export const countryChoiceMap: MapType = {
	FemaleSlenderSmart: {
		country: 'China',
		img: ChinaImg,
		description:
			'自分に自信があり、堂々としている中国男子。女性に優しく、家族も大事にします。',
		link: 'https://www.jal.co.jp/intltour/chn/index.html',
	},
	FemaleSlenderCheerful: {
		country: 'Italy',
		img: ItalyImg,
		description:
			'陽気で楽観的な人が多いイタリア男子。何に対してもこだわりが強い・マザコン多めという一面もありますが、その分好きなことにエネルギッシュで人との繋がりを大切にします。',
		link: 'https://www.jal.co.jp/intltour/eur/it/',
	},
	FemaleSlenderHomemaker: {
		country: 'Russia',
		img: RussiaImg,
		description:
			'一見冷たそうに見えて、陽気で涙もろいなど感情豊かなロシア男子。喜怒哀楽の怒の部分もしっかり忘れずに、キレやすい一面もあります。イメージ通りお酒好きが多いので、初デートは飲み行くので決まりです。',
		link: 'https://www.jal.co.jp/intltour/eur/ru/',
	},
	FemaleChubbySmart: {
		country: 'Poland',
		img: PolandImg,
		description:
			'努力家が多く謙虚なポーランド男子。富裕層が多いのもポイント。信仰心が強い人も多いため、日本人女子はその点を理解しておくと良さそう。',
		link: 'https://www.jal.co.jp/intltour/jmb/poland/',
	},
	FemaleChubbyCheerful: {
		country: 'Samoa',
		img: SamoaImg,
		description:
			'体格が良く、喧嘩が強いサモア男子。頼りになりますね。強いだけでなく、陽気でフレンドリーでもあります。視力がめちゃくちゃいいです。遠くからでも見つけてくれそう！',
		link: 'https://www.expedia.co.jp/Samoa.d155.Travel?pwaLob=wizard-package-pwa',
	},
	FemaleChubbyHomemaker: {
		country: 'India',
		img: IndiaImg,
		description:
			'陽気でフレンドリー、話すことが大好きな人が多いです。ちょっと無口なあなたにピッタリ！！頭がいい、家族を大切にするのも特徴です。大ざっぱなところがあるので、几帳面のあなたには要チェックポイントです。',
		link: 'https://www.jal.co.jp/intltour/asi/ind/',
	},
	FemaleGlamorousSmart: {
		country: 'America',
		img: AmericaCanadaImg,
		description:
			'オープンでフレンドリーなアメリカ男子。女性を優先するジェントルマンなところも超魅力的。感情表現もストレートで、細かいことは気にしません。スポーツ好きが多いので、初デートはスポーツ観戦でもいいかも！',
		link: 'https://www.jal.co.jp/intltour/ame/us',
	},
	FemaleGlamorousCheerful: {
		country: 'Brazil',
		img: BrazilImg,
		description:
			'イケメンが多いで有名なブラジル男子。とにかく明るく、積極的、ロマンチストなのが特徴的です。マイペースな一面もあり、ゆったり陽気なあなたと相性抜群！',
		link: 'https://www.jal.co.jp/intltour/ame/index.html',
	},
	FemaleGlamorousHomemaker: {
		country: 'Thai',
		img: ThaiImg,
		description:
			'女性にとにかく優しいタイ男子。合格です。アプローチが積極的で、家族を大切にします。細かいことは気にしない人が多いです。合言葉はマイペンライ（タイ語で大丈夫、問題ない）。',
		link: 'https://www.jal.co.jp/intltour/asi/thkh/',
	},
	MaleSlenderSmart: {
		country: 'China',
		img: ChineseWomanImg,
		description: '',
		link: '',
	},
	MaleSlenderCheerful: {
		country: 'Thai',
		img: ThaiWomanImg,
		description: '',
		link: '',
	},
	MaleSlenderHomemaker: {
		country: 'Korea',
		img: KoreanWomanImg,
		description: '',
		link: '',
	},
	MaleChubbySmart: {
		country: 'Samoa',
		img: SamoaWomanImg,
		description: '',
		link: '',
	},
	MaleChubbyCheerful: {
		country: 'Poland',
		img: PolandWomanImg,
		description: '',
		link: '',
	},
	MaleChubbyHomemaker: {
		country: 'The Philippines',
		img: PhilippinesWomanImg,
		description: '',
		link: '',
	},
	MaleGlamorousSmart: {
		country: 'America',
		img: AmericaWomanImg,
		description: '',
		link: '',
	},
	MaleGlamorousCheerful: {
		country: 'Brazil',
		img: BrazilWomanImg,
		description: '',
		link: '',
	},
	MaleGlamorousHomemaker: {
		country: 'France',
		img: FranceWomanImg,
		description: '',
		link: '',
	},
};

export interface SelectionType {
	id: number;
	formLabel: string;
	options: {
		label: string;
		value: string;
	}[];
}

export const selections = [
	{
		id: 0,
		formLabel: 'あなたの性別を選んでください',
		options: [
			{ label: '女性', value: 'Female' },
			{ label: '男性', value: 'Male' },
		],
	},
	{
		id: 1,
		formLabel: 'あなたに1番近い体格を選んでください',
		options: [
			{ label: '細め', value: 'Slender' },
			{ label: 'ぽっちゃり', value: 'Chubby' },
			{ label: 'グラマラス・ 筋肉質', value: 'Glamorous' },
		],
	},
	{
		id: 2,
		formLabel: 'あなたに1番近い性格を選んでください',
		options: [
			{ label: '知的・真面目・堂々としてる', value: 'Smart' },
			{ label: '陽気・明るい', value: 'Cheerful' },
			{ label: '家庭的・優しい', value: 'Homemaker' },
		],
	},
];
