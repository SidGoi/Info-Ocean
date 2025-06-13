import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Alerts from "@/components/Alerts/Alerts";

export default function Home() {
  return (
    <>
      <Head>
        <title>InfoOcean</title>
        <meta name="description" content="Welcome to InfoOcean Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.svg" />
      </Head>
      <main>
        <Navbar />
        <Hero />

        {/* Temp. Alert for Under Development status! */}
        {/* <Alerts /> */}
      </main>
    </>
  );
}
