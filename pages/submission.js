import Head from "next/head";
import Success from "../components/Success";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - About Us</title>
        <meta
          name="description"
          content="Learn more about Beyond Limits, a Social Media Marketing Agency (SMMA) that specializes in marketing consulting, paid social ads, social media campaigns, and Search Engine Optimization (SEO)."
        />
      </Head>
      <Success />
    </div>
  );
}
