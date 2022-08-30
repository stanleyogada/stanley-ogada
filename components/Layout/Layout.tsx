import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  head: {
    title: string;
    description: string;
    linkFaviconImageHref?: string;
  };
};

function Layout({ children, head }: Props) {
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href={head.linkFaviconImageHref || "/favicon.ico"} />
      </Head>

      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
