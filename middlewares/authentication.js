const jwt = require("jsonwebtoken");

const verifyToken = (req, res) => {
    const token =
        req.body.token || req.query.token || req.headers["auth-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        return decoded;
    } catch (err) {
        res.status(401).send({ success: false, message: 'unauthorize access' });
    }
};

export default verifyToken;
