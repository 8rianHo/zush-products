import Head from "next/head";
import { FC } from "react";

interface INextHeadProps {
  title?: string;
  description?: string;
}

const NextHead: FC<INextHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title || "Zush Products"}</title>
      <meta name="description" content={description || "Products by Zush"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default NextHead;
