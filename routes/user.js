
/*
 * GET home page.
 */

exports.userLogin = function (req, res) {


    var username = req.query["username"];

    validLogin = ("test" === username);

    console.log(username);

    res.send({
        validLogin: validLogin
    });

};
