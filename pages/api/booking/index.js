import {
  getAll,
  createBooking,
} from "../../../server/controllers/bookingController";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.jochalets.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      await getAll(req, res);
      //   res.status(200).json({ id, name: `User ${id}` });
      break;
    case "POST":
      // Update or create data in your database
      await createBooking(req, res);

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
