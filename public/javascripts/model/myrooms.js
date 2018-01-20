
var rooms = { 
	"garage" : {
		"name" : "garage",
		"things" : ["light01", "light07"],
		"points" : [["160", "8"],["470","8"],["470","160"],["160","160"],["160","8"]],
		"mobilePoints" : [["440", "160"],["592","160"],["592","470"],["440","470"],["440","160"]],
		"path" : new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["170", "18"],
		"color": "orange",
		"energyConsumption" : null

	},
	"dining" : {
		"name" : "dining",
		"things" : ["light02" ],
		"points" : [["207", "165"],["395","165"],["395","281"],["475","281"],["475","233"],
			["538","233"],["538","331"],["391","331"],["391","446"],["207","446"],["207", "165"]],
		"mobilePoints" : [["154", "207"],["435","207"],["435","395"],["318","395"],["318","475"],
			["367","475"],["367","540"],["269","540"],["269","392"],["154","392"],["154", "207"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["217", "175"],
		"color" : 'grey',
		"energyConsumption" : null

	},

	"bathroom" : {
		"name" : "bathroom",
		"things" : ["light03" ],
		"points" : [["403", "165"],["470","165"],["470","276"],["403","276"],["403", "165"]],
		"mobilePoints" : [["323", "404"],["435","404"],["435","471"],["322","471"],["323", "404"]],
		"listener" : null,
		"path": new Path2D(),
		"on" : false,
		"iconPosition": ["413", "175"],
		"color" : 'blue',
		"energyConsumption" : null

	},
	"balcony" : {
	"name" : "balcony",
		"things" : ["light04" ],
		"points" : [["135", "253"],["202","253"],["202","448"],["135","448"],["135", "251"]],
		"mobilePoints" : [["153", "134"],["346","134"],["346","202"],["153","202"],["153", "134"]],
		"path": new Path2D(),
		"listener" :  null,
		"on" : false,
		"iconPosition": ["145", "263"],
		"color" : 'black',
		"energyConsumption" : null
	},
	"garden" : {
		"name" : "garden",
		"things" : ["light05"],
		"points" : [["9", "200"],["202","200"],["202","251"],["131","251"],["131","450"],["202","450"],["202","452"],["392","452"],
			["392","483"],["678","483"],["678","581"],["9","581"],["9", "200"]],
		"mobilePoints" : [["19", "11"],["400","11"],["400","202"],["350","202"],["350", "131"],["151", "131"],["151", "202"],["148", "202"],
			["148", "392"],["117", "392"],["117", "679"],["19", "679"],["19", "11"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["19", "210"],
		"color" : 'yellow',
		"energyConsumption" : null
	},
	"bedroom01" : {
		"name" : "bedroom01",
		"things" : ["light06" ],
		"points" : [["396", "336"],["553","336"],["553","478"],["396","478"],["396", "336"]],
		"mobilePoints" : [["122", "397"],["264","397"],["264","553"],["122","553"],["122", "397"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["406", "346"],
		"color" : 'green',
		"energyConsumption" : null

	},
	"bedroom02" : {
		"name" : "bedroom02",
		"things" : ["light08"],
		"points" : [["557", "336"],["726","336"],["726","478"],["557","478"],["557", "336"]],
		"mobilePoints" : [["122", "559"],["264","559"],["264","726"],["122","726"],["122", "559"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["567", "346"],
		"color" : 'pink',
		"energyConsumption" : null


	},
	"living" : {
		"name" : "living",
		"things" : ["light09"],
		"points" : [["544", "172"],["726","172"],["726","331"],["544","331"],["544", "172"]],
		"mobilePoints" : [["269", "544"],["428","544"],["428","726"],["269","726"],["269", "544"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["554", "182"],
		"color" : 'silver',
		"energyConsumption" : null

	},
	"bedroom03" : {
		"name" : "bedroom03",
		"things" : ["light10"],
		"points" : [["544", "46"],["726","46"],["726","167"],["544","167"],["544", "46"]],
		"mobilePoints" : [["432", "544"],["554","544"],["554","726"],["432","726"],["432", "544"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["554", "56"],
		"color" : 'purple',
		"energyConsumption" : null

	},
	"bedroom04" : {
		"name" : "bedroom04",
		"things" : ["light11"],
		"points" : [["731", "172"],["885","172"],["885","331"],["731","331"],["731", "172"]],
		"mobilePoints" : [["269", "731"],["428","731"],["428","886"],["269","886"],["269", "731"]],
		"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["741", "182"],
		"color" : 'red',
		"energyConsumption" : null

	},
	"boundary":{
		"name" : "boundary",
		"things" : [],
		"points" : [["156", "4"],["474","4"],["474","227"],["539","227"],["539", "41"],["731","41"],
			["731","167"],["890", "167"],["890","334"],["731","335"],["731","483"],["685","483"],["683","586"],
			["5","586"],["5","195"],["203","195"],["203","165"],["156","165"],["156","0"],["0","0"],["0","600"],
			["900","600"],["900","0"],["156","0"],["156","4"]],
		"mobilePoints": [["14", "5"], ["405", "5"], ["405", "203"], ["434", "203"], ["434", "156"], ["595", "156"], ["595", "475"],
			["372", "475"], ["372", "539"], ["559", "539"], ["559", "731"], ["432", "731"], ["432", "890"], ["264", "890"], ["264", "731"],
			["117", "731"], ["117", "684"], ["14", "684"], ["14", "0"], ["0", "0"], ["0", "900"], ["600", "900"], ["600", "0"], ["14", "0"], ["14", "5"]],

"path": new Path2D(),
		"listener" : null,
		"on" : false,
		"iconPosition": ["166", "14"],
		"color" : 'orange',
		"energyConsumption" : null
	}

}
	
		

