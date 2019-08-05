import { API_URL } from './config';

const recordStreamUrl = prefix => `https://air.radiorecord.ru:805/${prefix || 'rr'}_320`;
const recordText = prefix => `${API_URL}xml/${prefix}_online_v8.txt`;

const stations = [
	{
		id: 1,
		prefix: 'brks',
		name: 'Breaks',
		url: recordStreamUrl('brks'),
		textUrl: recordText('brks')
	},
	{
		id: 2,
		prefix: 'chil',
		name: 'Chill-out',
		url: recordStreamUrl('chil'),
		textUrl: recordText('chil')
	},
	{
		id: 3,
		prefix: 'club',
		name: 'EDM',
		url: recordStreamUrl('club'),
		textUrl: recordText('club')
	},
	{
		id: 4,
		prefix: 'dc',
		name: 'Dance-core',
		url: recordStreamUrl('dc'),
		textUrl: recordText('dc')
	},
	{
		id: 5,
		prefix: 'deep',
		name: 'Deep',
		url: recordStreamUrl('deep'),
		textUrl: recordText('deep')
	},
	{
		id: 6,
		prefix: 'dub',
		name: 'Dubstep',
		url: recordStreamUrl('dub'),
		textUrl: recordText('dub')
	},
	{
		id: 7,
		prefix: 'gop',
		name: 'Гоп ФМ',
		url: recordStreamUrl('gop'),
		textUrl: recordText('gop')
	},
	{
		id: 8,
		prefix: 'mdl',
		name: 'Медляк ФМ',
		url: recordStreamUrl('mdl'),
		textUrl: recordText('mdl')
	},
	{
		id: 9,
		prefix: 'ps',
		name: 'Пиратская Станция',
		url: recordStreamUrl('ps'),
		textUrl: recordText('ps')
	},
	{
		id: 10,
		prefix: 'pump',
		name: 'Old School',
		url: recordStreamUrl('pump'),
		textUrl: recordText('pump')
	},
	{
		id: 11,
		prefix: 'rus',
		name: 'Russian MIX',
		url: recordStreamUrl('rus'),
		textUrl: recordText('rus')
	},
	{
		id: 12,
		prefix: 'sd90',
		name: 'Супердискотека 90',
		url: recordStreamUrl('sd90'),
		textUrl: recordText('sd90')
	},
	{
		id: 13,
		prefix: 'teo',
		name: 'HardStyle',
		url: recordStreamUrl('teo'),
		textUrl: recordText('teo')
	},
	{
		id: 14,
		prefix: 'tm',
		name: 'Trancemission',
		url: recordStreamUrl('tm'),
		textUrl: recordText('tm')
	},
	{
		id: 15,
		prefix: 'trap',
		name: 'Trap',
		url: recordStreamUrl('trap'),
		textUrl: recordText('trap')
	},
	{
		id: 16,
		prefix: 'vip',
		name: 'Vip House',
		url: recordStreamUrl('vip'),
		textUrl: recordText('vip')
	},
	{
		id: 17,
		prefix: 'yo',
		name: 'Black',
		url: recordStreamUrl('yo'),
		textUrl: recordText('yo')
	},
	{
		id: 18,
		prefix: 'rock',
		name: 'Rock',
		url: recordStreamUrl('rock'),
		textUrl: recordText('rock')
	},
	{
		id: 19,
		prefix: 'mix',
		name: 'Megamix',
		url: recordStreamUrl('mix'),
		textUrl: recordText('mix')
	},
	{
		id: 20,
		prefix: 'techno',
		name: 'Techno',
		url: recordStreamUrl('techno'),
		textUrl: recordText('techno')
	},
	{
		id: 21,
		prefix: 'technopop',
		name: 'Technopop',
		url: recordStreamUrl('technopop'),
		textUrl: recordText('technopop')
	},
	{
		id: 22,
		prefix: 'rr',
		name: 'Radio Record',
		url: recordStreamUrl('rr'),
		textUrl: recordText('rr')
	},
	{
		id: 23,
		prefix: 'mf',
		name: 'Маятник Фуко',
		url: recordStreamUrl('mf'),
		textUrl: recordText('mf')
	},
	{
		id: 24,
		prefix: 'ibiza',
		name: 'Inniocense',
		url: recordStreamUrl('ibiza'),
		textUrl: recordText('ibiza')
	},
	{
		id: 25,
		prefix: 'gold',
		name: 'Gold',
		url: recordStreamUrl('gold'),
		textUrl: recordText('gold')
	},
	{
		id: 26,
		prefix: 'elect',
		name: 'Electro',
		url: recordStreamUrl('elect'),
		textUrl: recordText('elect')
	},
	{
		id: 27,
		prefix: 'progr',
		name: 'Progressive',
		url: recordStreamUrl('progr'),
		textUrl: recordText('progr')
	},
	{
		id: 28,
		prefix: 'househits',
		name: 'House Hits',
		url: recordStreamUrl('househits'),
		textUrl: recordText('househits')
	},
	{
		id: 29,
		prefix: 'bighits',
		name: 'Big Hits',
		url: recordStreamUrl('bighits'),
		textUrl: recordText('bighits')
	},
	{
		id: 30,
		prefix: 'dream',
		name: 'Dream Dance',
		url: recordStreamUrl('dream'),
		textUrl: recordText('dream')
	},
	{
		id: 31,
		prefix: 'houseclss',
		name: 'House Classics',
		url: recordStreamUrl('houseclss'),
		textUrl: recordText('houseclss')
	},
	{
		id: 32,
		prefix: 'edmhits',
		name: 'EDM Hits',
		url: recordStreamUrl('edmhits'),
		textUrl: recordText('edmhits')
	},
	{
		id: 33,
		prefix: '1980',
		name: 'Disco-80',
		url: recordStreamUrl('1980'),
		textUrl: recordText('1980')
	}, 
	{
		id: 34,
		prefix: 'complextro',
		name: 'Complextro',
		url: recordStreamUrl('complextro'),
		textUrl: recordText('complextro')
	},
	{
		id: 35,
		prefix: 'autoradio',
		name: 'Autoradio',
		url: 'http://cast.radiogroup.com.ua:8000/avtoradio',
		textUrl: '',
	},
	{
		id: 36,
		prefix: 'bestfm',
		name: 'Best FMFm',
		url: 'http://radio.bestfm.fm:8080/bestfm',
		textUrl: '',
	},
	{
		id: 37,
		prefix: 'djfm',
		name: 'DJ FM',
		url: 'http://media.brg.ua:8010/;stream.nsv',
		textUrl: '',
	},
	{
		id: 38,
		prefix: 'hitfm',
		name: 'HIT FM',
		url: 'http://online-hitfm.tavrmedia.ua/HitFM',
		textUrl: '',
	},
	{
		id: 39,
		prefix: 'jamfm',
		name: 'JAM FM',
		url: 'http://cast.jamfm.com.ua/jamfm',
		textUrl: '',
	},
	{
		id: 40,
		prefix: 'perecfm',
		name: 'Perec FM',
		url: 'http://radio.stilnoe.fm:8080/radio-stilnoe',
		textUrl: '',
	},
	{
		id: 41,
		prefix: 'nasheradio',
		name: 'Nashe Radio',
		url: 'http://cast.radiogroup.com.ua:8000/nashe.aac',
		textUrl: '',
	},
	{
		id: 42,
		prefix: 'russkoefm',
		name: 'Russkoe Radio',
		url: 'http://online-rusradio.tavrmedia.ua:8000/RusRadio',
		textUrl: '',
	},
	{
		id: 43,
		prefix: 'krainafm',
		name: 'Kraina FM',
		url: 'http://live.radioec.com.ua:8000/kiev',
		textUrl: '',
	},
	{
		id: 44,
		prefix: 'luxfm',
		name: 'LUX FM',
		url: 'http://icecast.luxnet.ua/lux_mp3',
		textUrl: '',
	},
];

export default stations;