import Head from "next/head";
import SolutionsNames from "../components/SolutionsNames";
import SolutionsHero from "../components/SolutionsHero";
import SolutionsList from "../components/SolutionsList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Limits - Our Services</title>
        <meta
          name="description"
          content="Learn more about Beyond Limits, a Social Media Marketing Agency (SMMA) that specializes in paid social ads, social media campaigns, and Search Engine Optimization (SEO)."
        />
      </Head>
      <SolutionsHero link1="#coreSolutions" link2="#fullSolutions" />
      <SolutionsNames />
      <SolutionsList />
    </div>
  );
}
