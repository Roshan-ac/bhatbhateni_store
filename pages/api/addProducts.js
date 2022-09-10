import connectDb from '../../middlewares/mongodb'
import product from '../../models/product'
import NextCors from 'nextjs-cors'

const handler = async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            const p =  new product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                price: req.body[i].price,
                size: req.body[i].size
            })
            await p.save()
        }
        res.status(200).send({ success: 'data uploaded successfully' });
    } else {
        res.status(400).send('bad request')
    }
}


export default connectDb(handler);