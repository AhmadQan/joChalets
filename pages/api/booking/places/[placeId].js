import { getPlaceAvailablityById } from "../../../../server/controllers/placesController";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.jochalets.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  const { method } = req;

  switch (method) {
    case "GET":
      await getPlaceAvailablityById(req, res);

      break;
    // case "POST":
    //   await PlaceAvailablityById(req, res);

    //   break;
    // case "DELETE":
    //   await PlaceAvailablityById(req, res);

    //   break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
