import connectDb from '../../middlewares/mongodb'
import oder from '../../models/oder'
import NextCors from 'nextjs-cors'

const handler = async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    if (req.method === 'POST') {
        res.send('api working')
    } else {
        res.status(400).send('bad request')
    }
}


export default connectDb(handler);