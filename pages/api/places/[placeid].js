import {
  getById,
  updateById,
  deleteById,
} from "../../../server/controllers/placesController";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getById(req, res);

      break;
    case "PUT":
      await updateById(req, res);

      break;
    case "DELETE":
      await deleteById(req, res);

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
