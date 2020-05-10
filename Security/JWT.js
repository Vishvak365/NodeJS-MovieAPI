
const jwt = require('njwt')
const SECRET_PHRASE = "a*(USD#$)FDLJ#"
function genJWT(username) {
    const claims = { username: username };
    const token = jwt.create(claims, SECRET_PHRASE).setExpiration();
    return token;
}
async function verifyJWT(token) {
    var returnval;
    await jwt.verify(token, SECRET_PHRASE, async function (err, verifiedJWT) {
        if (err) {
            returnVal = false;
        } else {
            returnval = verifiedJWT;
        }
    })
    return returnval;
}
module.exports.GenerateJWT = genJWT;
module.exports.VerifyJWT = verifyJWT;