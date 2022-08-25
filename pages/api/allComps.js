import dbConnect from "../../utility/dbConnect"; 
import Composition from '../../models/Composition'
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET': 
      try {
        const allComps = await Composition.find({});
        res.status(200).json({ success: true, data: allComps});
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    case 'POST':
      try {
        const newComp = await Composition.create(req.body);
        res.status(201).json({ success: true, data: newComp });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}