"use client"
import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

function ServerMap() {
  return <Map />;
}

export default ServerMap;
