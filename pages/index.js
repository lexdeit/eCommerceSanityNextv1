import Home from "@/Components/Home";
import { client } from "@/lib/client";

const index = ({ products, bannerData }) => {
  return (
    <>
      <Home products={products} bannerData={bannerData} />

    </>
  )
}

export const getServerSideProps = async () => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default index;