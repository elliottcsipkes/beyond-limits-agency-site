import Head from "next/head";
import ContactHero from "../components/ContactHero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - Contact Us</title>
        <meta
          name="description"
          content="Contact our team with any questions that you may have or for a free consultation"
        />
      </Head>
      <ContactHero />
    </div>
  );
}
