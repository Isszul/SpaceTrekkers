/*
 * GET home page.
 */

var db = require('../db');

exports.get = function (req, res) {


    res.send({

        ship : _ships
        
    });

};


exports.getShips = function() {
    return {ship : _ships};
}

_ships = [
            {
                icon: "plane",
                name: "SS SuperPants",
                level: 9,
                damage: 96
            }, {
                icon: "plane",
                name: "SS SuperPants II",
                level: 16,
                damage: 60
            }
        ] 