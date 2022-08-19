
import connectDb from '../../middlewares/mongodb'
import bcrypt from 'bcryptjs'
import User from '../../models/user'
import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body
            // Validate user input
            if (!(email && password)) {
                res.status(400).send('All inputs should not be empty')
            }

            // check whether user using email already exist on database
            const user = await User.findOne({ email })
            if (!user) {
                res.status(400).send({ success: false, message: 'Incorrect email address' })
            }
            const encryptedPassword = await bcrypt.compare(password, user.password)
            if (user && encryptedPassword) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                //issue token
                user.token = token;
                //send data to client
                res.status(200).send({ success: true, user: user })
            } else {
                res.status(400).send({ success: false, message: 'Incorrect password' })
            }

            // if any errors occurred
        } catch (err) {
            console.log(err);

        }
        //incase of bad request
    } else {
        res.status(400).send('bad request')
    }
}

export default connectDb(handler);