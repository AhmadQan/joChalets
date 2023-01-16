import React from "react";
import { useRouter } from "next/router";

export default function PlaceDetailPage() {
  const router = useRouter();
  const { placeID } = router.query;

  return (
    <section className="flex flex-col justify-center items-center">
      {placeID}
    </section>
  );
}
