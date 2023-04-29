const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      //   await getAll(req, res);
      //   res.status(200).json({ id, name: `User ${id}` });
      break;
    case "POST":
      // Update or create data in your database
      client.messages
        .create({
          body: "Your appointment is coming up on July 21 at 3PM",
          from: "+14346085544",
          to: "+962798033926",
        })
        .then((message) => {
          res.status(200).json({ message: "Message sent successfully" });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: error });
        });

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
