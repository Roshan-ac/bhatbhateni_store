
import connectDb from '../../middlewares/mongodb'
import bcrypt from 'bcryptjs'
import User from '../../models/user'
import NextCors from 'nextjs-cors'

const handler = async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    if (req.method === 'POST') {
        try {
            const { firstname, lastname, username, email, password } = req.body
            // Validate user input
            if (!(username && email && password && firstname && lastname)) {
                res.status(400).send({ success: false, message: 'input field should not be empty' })
            }

            // check whether user using email already exist on database
            const isAlreadyUser = await User.findOne({ email })
            if (isAlreadyUser) {
                return res.status(400).send({ success: false, message: 'Sorry ! email already used' })
            }

            //Encrypt user password
            const encryptedPassword = await bcrypt.hash(password, 10);

            // created user with encrypted password
            const user = await User.create({
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email.toLowerCase(),
                password: encryptedPassword,
            })
            // Create token
            res.status(200).send({ success: true, user: user })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.status(400).send('bad request')
    }
}

export default connectDb(handler);