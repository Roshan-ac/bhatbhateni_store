import connectDb from '../../middlewares/mongodb'
import authentication from '../../middlewares/authentication'
import User from '../../models/user'
import NextCors from 'nextjs-cors'

const handler = async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    if (req.method === 'POST') {
        try {
            const auth = await authentication(req, res);
            if (auth) {
                const { firstname, lastname, phonenumber, address } = req.body
                const { email } = auth
                const user = await User.findOne({ email }).select('-password');
                await user.updateMany({ $set: {firstname:firstname} }, { $set: { lastname: lastname } }, { $set: { phonenumber: phonenumber } }, { $set: { address: address } }, (err, result) => {
                    console.log(result)
                });

                res.status(200).send({ success: true })
            }
        }
        catch (err) {
            res.status(400).send('bad request');
        }
    }
}

export default connectDb(handler)