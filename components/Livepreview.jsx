"use client";
import { encode } from "qss";
import React from "react";

const LivePreview = ({
  url,
  width = 400,
  height = 250,
  className = "",
}) => {
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 2,
    "viewport.height": height * 2,
  });

  const src = `https://api.microlink.io/?${params}`;

  return (
    <img
      src={src}
      width={width}
      height={height}
      alt="Live site preview"
      className={`object-cover rounded-xl w-full h-full ${className}`}
      loading="lazy"
    />
  );
};

export default LivePreview;