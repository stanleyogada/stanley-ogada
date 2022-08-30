import React from "react";
import NextLink from "next/link";
import { Link as Link_ } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  href: string;
  [x: string]: any;
};

function Link({ href, children, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <Link_ {...rest}>{children}</Link_>
    </NextLink>
  );
}

export default Link;
