import Head from "next/head";
import PrivacyPolicyInfo from "../components/PrivacyPolicyInfo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - Privacy Policy</title>
        <meta
          name="description"
          content="Learn about our privacy policy and how we keep our clients' info secure."
        />
      </Head>
      <PrivacyPolicyInfo />
    </div>
  );
}
