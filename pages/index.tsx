import Head from "next/head";
import List from "../Components/List";

export default function Home() {
  return (
    <>
      <Head>
        <title>mango</title>
        <meta name="description" content="mango study" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List />
    </>
  );
}
