import { getAll } from "../../../server/controllers/farmsController";
import { connectDB } from "../../../server/utils/db";
import FarmModel from "../../../server/models/farmModel";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      getAll(req, res);
      //   res.status(200).json({ id, name: `User ${id}` });
      break;
    case "POST":
      // Update or create data in your database
      const { name } = req.body;

      await connectDB();

      console.log("connected");
      const newFarm = await FarmModel.create({ name: name });

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
  console.log(method);
  res.status(200).json({ name: "John Doe" });
}
