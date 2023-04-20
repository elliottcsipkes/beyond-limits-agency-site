import Head from "next/head";
import Success from "../components/Success";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - Success</title>
        <meta
          name="description"
          content="Thanks for submitting your contact information! We will be in touch soon."
        />
      </Head>
      <Success />
    </div>
  );
}
