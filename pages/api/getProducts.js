import connectDb from '../../middlewares/mongodb'
import product from '../../models/product'


const handler = async (req, res) => {
  if (req.method === 'GET') {
    let p = await product.find()
    res.status(200).json(p);
  } else {
    res.status(400).send('bad request')
  }
}


export default connectDb(handler);