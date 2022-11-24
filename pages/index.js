import Head from "next/head";
import Hero from "../components/Hero";
import How from "../components/How";
import What from "../components/What";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - Social Media Marketing and SEO</title>
        <meta
          name="description"
          content="Beyond Limits is a Social Media Marketing Agency (SMMA) that specializes in paid social ads, social media campaigns, and Search Engine Optimization (SEO)."
        />
      </Head>
      <Hero />
      <What />
      <How />
    </div>
  );
}
