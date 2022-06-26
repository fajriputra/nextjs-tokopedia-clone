import { useEffect } from "react";
import Layout from "components/Layout";
import Banner from "parts/Home/Banner";
// import Promotions from "parts/Home/Promotions";

export default function Home() {
  useEffect(() => {
    document.title = "FStore | Home";
  }, []);

  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
