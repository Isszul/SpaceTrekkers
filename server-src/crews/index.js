 
/*
 * GET home page.
 */

var db = require('../db');

exports.get = function (req, res) {
    res.send(_crews);
};

exports.getCrews = function(callback) {
	callback(_crews);
};


_crews = {
	crew: [
		{
			name: "Bob",
			level: 8,
			specialisation: "Pilot",
			icon: "plane",
			hp: 99,
			exp: 10
		}, {
			name: "Willy",
			level: 9,
			specialisation: "Gunner",
			icon: "fire",
			hp: 100,
			exp: 14
		}, {
			name: "Mark",
			level: 12,
			specialisation: "Engineer",
			icon: "wrench",
			hp: 60,
			exp: 99
		}
	] 
}


