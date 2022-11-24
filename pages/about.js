import Head from "next/head";
import History from "../components/History";
import Mission from "../components/Mission";
import OtherHero from "../components/OtherHero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - About Us</title>
        <meta
          name="description"
          content="Learn more about Beyond Limits, a Social Media Marketing Agency (SMMA) that specializes in paid social ads, social media campaigns, and Search Engine Optimization (SEO)."
        />
      </Head>
      <OtherHero link1="#mission" link2="#history" />
      <Mission />
      <History />
    </div>
  );
}
