const { verifyToken } = require("../services/userService");

module.exports = () => (req, res, next) => {
    const token = req.cookies['token'];
    if (token) {
        
        try {
            const userData = verifyToken(token);
            req.user = userData;
            res.locals.username = userData.username;
        } catch(err){
            res.clearCookie('token');
            res.redirect('/login');
            return;
        }
    }

    next();
}