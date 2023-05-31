import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const generateSitemap = async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://https://www.jochalets.com",
    });

    // Add URLs to the sitemap
    smStream.write({ url: "/" });
    smStream.write({ url: "/places" });
    // Add more URLs as needed

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
