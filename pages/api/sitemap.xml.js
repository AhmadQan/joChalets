import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { getAll } from "../../server/controllers/placesController";
import https from "../../axios/axiosInstance";

const generateSitemap = async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.jochalets.com",
    });

    // Add URLs to the sitemap
    smStream.write({ url: "/" });
    smStream.write({ url: "/places" });
    // Add more URLs as needed

    const places = await https.get(`places/`);

    places.forEach((place) => {
      const url = `/places/${place._id}`; // Adjust the URL structure based on your dynamic route
      smStream.write({ url });
    });

    smStream.end();

    const sitemap = await streamToPromise(Readable.from(smStream)).then(
      (data) => data.toString()
    );

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default generateSitemap;
