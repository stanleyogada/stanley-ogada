import { Box } from "@chakra-ui/react";
import Image_ from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  quality?: number;
  objectFit?: string;
  objectPosition?: string;
  [x: string]: any;
};

const Image = ({
  width,
  height,
  src,
  alt,
  quality,
  objectFit = "cover",
  objectPosition = "center",
  ...rest
}: Props) => {
  return (
    <Box
      width={width}
      height={height}
      overflow="hidden"
      position="relative"
      {...rest}
    >
      <Image_
        src={src}
        alt={alt}
        quality={quality}
        width="100%"
        height="100%"
        // @ts-ignore
        objectFit={objectFit}
        objectPosition={objectPosition}
        layout="fill"
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Image;
