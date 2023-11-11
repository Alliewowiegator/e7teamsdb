import Composition from '../../models/Composition'
import dbConnect from "../../utility/dbConnect";
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { headers } = req;
  switch ( headers.service ) {
    case 'allComps':
      try {
        const allComps = await Composition.find({});
        res.status(200).json({ success: true, data: allComps});
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    case 'submitComp':
      try {
        const newComp = await Composition.create(req.body);
        res.status(201).json({ success: true, data: newComp });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'compId':
      try {
        let allComps = await Composition.findById(headers.id)
        res.status(200).json({ success: true, data: allComps })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
  }
}