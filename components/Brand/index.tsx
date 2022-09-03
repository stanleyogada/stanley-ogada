import Image from "next/image";
import React from "react";

type Props = {};

function Brand({}: Props) {
  return (
    <Image src="/images/profile.JPG" alt="logo" width="40px" height="40px" />
  );
}

export default Brand;
