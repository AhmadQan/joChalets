import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeAppBar from "../components/organisms/HomeAppBar";
import Hero from "../components/sections/Hero";
import PlacesGrid from "../components/sections/PlacesGrid";

import { useSelector } from "react-redux";

import AddPlaceForm from "../components/organisms/AddPlaceForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const PlacesStore = useSelector((state) => state.places);
  const { showAddModel } = PlacesStore;
  return (
    <>
      <Head>
        <title>Jo Chalets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        style={{
          background:
            "linear-gradient(to right bottom, #126f9a, #145d88, #154c75, #143b63, #122b50)",
        }}
        className=" h-auto"
      >
        <HomeAppBar />
        <Hero />
        <PlacesGrid />
        {showAddModel && (
          <div className="h-full w-full bg-primary bg-opacity-25 backdrop-blur-lg absolute top-0 left-0">
            <AddPlaceForm />
          </div>
        )}
      </main>
    </>
  );
}
