/**
 * @param {req} req The request from client
 * @description Checks if jwt key is valid and current
 */
async function checkJWT(req) {
    if (req['headers'].authorization && req['headers'].authorization.startsWith("Bearer ")) {
        const token = req['headers'].authorization.split(" ")[1] //Splits bearer and token into array
        const verified = await JWT.VerifyJWT(token);
        if (verified) {
            return [true]
        } else {
            return [false, { message: "Key expired or tampered with" }];
            // res.json({ message: "Key expired or tampered with" }).status(401);
        }
    } else {
        return [false, {
            message: "No auth found or improper format, proper format below",
            properFormat: [{ authorization: "Bearer <AUTH_TOKEN>" }]
        }]
    }
}
module.exports.checkJWT = checkJWT