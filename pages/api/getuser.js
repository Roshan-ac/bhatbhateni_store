import connectDb from '../../middlewares/mongodb'
import authentication from '../../middlewares/authentication'
import User from '../../models/user'

const handler = async (req, res) => {
    try {
        const auth = await authentication(req, res);
        if (auth) {
            const { email } = auth
            const user = await User.findOne({ email }).select('-password');
            if (user) {
                res.status(200).send({ success: true, data: user });
            } else {
                res.status(200).send({ success: false, message: 'auth-token expired' });
            }
        }
    } catch (err) {
        res.status(400).send('bad request');
    }
}

export default connectDb(handler)