import Head from "next/head";
import ContactForm from "../components/ContactForm";

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
      <ContactForm />
    </div>
  );
}
