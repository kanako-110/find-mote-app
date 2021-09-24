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

// TODO: type folder
export interface ResultType {
	country: string;
	img: string;
	description: string;
	link: string;
}

interface MapType {
	[key: string]: ResultType;
}

const BRAZIL_LINK = 'https://www.jal.co.jp/intltour/ame/index.html';
const CHINA_LINK = 'https://www.jal.co.jp/intltour/chn/index.html';
const ITALY_LINK = 'https://www.jal.co.jp/intltour/eur/it/';
const RUSSIA_LINK = 'https://www.jal.co.jp/intltour/eur/ru/';
const POLAND_LINK = 'https://www.jal.co.jp/intltour/jmb/poland/';
const SAMOA_LINK =
	'https://www.expedia.co.jp/Samoa.d155.Travel?pwaLob=wizard-package-pwa';
const INDIA_LINK = 'https://www.jal.co.jp/intltour/asi/ind/';
const AMERICA_LINK = 'https://www.jal.co.jp/intltour/ame/us';
const THAI_LINK = 'https://www.jal.co.jp/intltour/asi/thkh/';
const FRANCE_LINK = 'https://www.jal.co.jp/intltour/eur/france/';
const KOREA_LINK = 'https://www.jal.co.jp/jp/ja/intltour/jaldp/sel/';
const PHILIPPINES_LINK = 'https://www.jal.co.jp/intltour/asi/phmy/';

// keyは、ユーザーが選ぶ選択肢の合計値に値する。
export const choiceCountryMap: MapType = {
	female_slender_smart: {
		country: 'China',
		img: ChinaImg,
		description:
			'自分に自信があり、堂々としている中国男子。女性に優しく、家族も大事にします。',
		link: CHINA_LINK,
	},
	female_slender_cheerful: {
		country: 'Italy',
		img: ItalyImg,
		description:
			'陽気で楽観的な人が多いイタリア男子。何に対してもこだわりが強い・マザコン多めという一面もありますが、その分好きなことにエネルギッシュで人との繋がりを大切にします。',
		link: ITALY_LINK,
	},
	female_slender_homemaker: {
		country: 'Russia',
		img: RussiaImg,
		description:
			'一見冷たそうに見えて、陽気で涙もろいなど感情豊かなロシア男子。喜怒哀楽の怒の部分もしっかり忘れずに、キレやすい一面もあります。イメージ通りお酒好きが多いので、初デートは飲み行くので決まりです。',
		link: RUSSIA_LINK,
	},
	female_chubby_smart: {
		country: 'Poland',
		img: PolandImg,
		description:
			'努力家が多く謙虚なポーランド男子。富裕層が多いのもポイント。信仰心が強い人も多いため、日本人女子はその点を理解しておくと良さそう。',
		link: POLAND_LINK,
	},
	female_chubby_cheerful: {
		country: 'Samoa',
		img: SamoaImg,
		description:
			'体格が良く、喧嘩が強いサモア男子。頼りになりますね。強いだけでなく、陽気でフレンドリーでもあります。視力がめちゃくちゃいいです。遠くからでも見つけてくれそう！',
		link: SAMOA_LINK,
	},
	female_chubby_homemaker: {
		country: 'India',
		img: IndiaImg,
		description:
			'陽気でフレンドリー、話すことが大好きな人が多いです。ちょっと無口なあなたにピッタリ！！頭がいい、家族を大切にするのも特徴です。大ざっぱなところがあるので、几帳面のあなたには要チェックポイントです。',
		link: INDIA_LINK,
	},
	female_glamorous_smart: {
		country: 'America',
		img: AmericaCanadaImg,
		description:
			'オープンでフレンドリーなアメリカ男子。女性を優先するジェントルマンなところも超魅力的。感情表現もストレートで、細かいことは気にしません。スポーツ好きが多いので、初デートはスポーツ観戦でもいいかも！',
		link: AMERICA_LINK,
	},
	female_glamorous_cheerful: {
		country: 'Brazil',
		img: BrazilImg,
		description:
			'イケメンが多いで有名なブラジル男子。とにかく明るく、積極的、ロマンチストなのが特徴的です。マイペースな一面もあり、ゆったり陽気なあなたと相性抜群！',
		link: BRAZIL_LINK,
	},
	female_glamorous_homemaker: {
		country: 'Thai',
		img: ThaiImg,
		description:
			'女性にとにかく優しいタイ男子。合格です。アプローチが積極的で、家族を大切にします。細かいことは気にしない人が多いです。合言葉はマイペンライ（タイ語で大丈夫、問題ない）。',
		link: THAI_LINK,
	},
	male_slender_smart: {
		country: 'China',
		img: ChineseWomanImg,
		description:
			'自分のことをストレートに表現し、素直な人が多い中国人女性。家族をとても大切にするのも特徴です。将来の生活や結婚を意識できる男性と交際したがる傾向があるので、そこをアピールできると良さそうです！！',
		link: CHINA_LINK,
	},
	male_slender_cheerful: {
		country: 'Thai',
		img: ThaiWomanImg,
		description:
			'スタイルが良く美意識の高いタイ女子。整形している人も多いため、気になる人は気を付けましょう。面倒見が良く、とことん尽くしてくれます。絶対に自分からは謝らない一面もあるため、喧嘩したら是非あなたから謝ってあげてくさい。',
		link: THAI_LINK,
	},
	male_slender_homemaker: {
		country: 'Korea',
		img: KoreanWomanImg,
		description:
			'言わずもがな、美意識の高く美人・肌のきれいな人が多いコレアンガール。愛情深く、仲良くなると家族のように親身になってくれます。やきもち屋さんが多いので、プレイボーイなあなたは気を付けて！',
		link: KOREA_LINK,
	},
	male_chubby_smart: {
		country: 'Samoa',
		img: SamoaWomanImg,
		description:
			'温厚で楽観的なサモア女性。のんびりとしています。その分いい加減な面もあります。どこの村出身か気にするので、あなたの出身地を言えるようにしておきましょう。',
		link: SAMOA_LINK,
	},
	male_chubby_cheerful: {
		country: 'Poland',
		img: PolandWomanImg,
		description:
			'かわいい・美人な人が多いポーランド。宗教色の強い国なので、その点への理解が必要です。その分、謙虚で真面目な人が多いです。小柄な人が多いのもポイント。',
		link: POLAND_LINK,
	},
	male_chubby_homemaker: {
		country: 'The Philippines',
		img: PhilippinesWomanImg,
		description:
			'明るくフレンドリーなフィリピン女子。ホスピタリティ精神が高く、初対面の人にも親切で明るく接してくれるので会話に困る事なしです！。家族に何かあったときは仕事を休むのが普通なほど家族思いです。',
		link: PHILIPPINES_LINK,
	},
	male_glamorousS_smart: {
		country: 'America',
		img: AmericaWomanImg,
		description:
			'主張がハッキリしていて、自分の感情をストレートに表現するアメリカ女性。掃除は得意ですが、料理が苦手な人が多いので、一緒に料理すると良さそうです。',
		link: AMERICA_LINK,
	},
	male_glamorous_cheerful: {
		country: 'Brazil',
		img: BrazilWomanImg,
		description:
			'とてもロマンチックで愛情表現豊かなブラジル女性。フレンドリーでポジティブなのも特徴です。ロマンチストが多いため、サプライズをして喜ばせてあげましょう。',
		link: BRAZIL_LINK,
	},
	male_glamorous_homemaker: {
		country: 'France',
		img: FranceWomanImg,
		description:
			'主張がハッキリしていて、自分の感情をストレートに表現するフランス女性。マナーがしっかりしていて、品があるのも特徴的です。北フランスと南フランスで性格が異なり、南はオープンで楽観的などラテン気質が強いです。一方、北は思索や議論を好む人が多く知的な女性が多いです。自分のタイプに合わせて見てみると良いでしょう。',
		link: FRANCE_LINK,
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
			{ label: '女性', value: 'female' },
			{ label: '男性', value: 'male' },
		],
	},
	{
		id: 1,
		formLabel: 'あなたに1番近い体格を選んでください',
		options: [
			{ label: '細め', value: 'slender' },
			{ label: 'ぽっちゃり', value: 'chubby' },
			{ label: 'グラマラス・ 筋肉質', value: 'glamorous' },
		],
	},
	{
		id: 2,
		formLabel: 'あなたに1番近い性格を選んでください',
		options: [
			{ label: '知的・真面目・堂々としてる', value: 'smart' },
			{ label: '陽気・明るい', value: 'cheerful' },
			{ label: '家庭的・優しい', value: 'homemaker' },
		],
	},
];
