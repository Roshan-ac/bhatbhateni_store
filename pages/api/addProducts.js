import connectDb from '../../middlewares/mongodb'
import product from '../../models/product'
import NextCors from 'nextjs-cors'

const handler = async (req, res) => {
    const data = req.body
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    if (req.method === 'POST') {
        for (let i = 0; i < data.length; i++) {
            const p =  new product({
                title: data[i].title,
                slug: data[i].slug,
                desc: data[i].desc,
                img: data[i].img,
                price: data[i].price,
                size: data[i].size
            })
            await p.save()
        }
        res.status(200).send({ success: 'data uploaded successfully' });
    } else {
        res.status(400).send('bad request')
    }
}


export default connectDb(handler);