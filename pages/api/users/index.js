import { createUser } from "../../../server/controllers/userController";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      await getAll(req, res);
      //   res.status(200).json({ id, name: `User ${id}` });
      break;
    case "POST":
      // Update or create data in your database
      await createUser(req, res);

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
