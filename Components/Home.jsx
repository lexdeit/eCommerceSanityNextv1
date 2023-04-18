import { Product, FooterBanner, HeroBanner } from './index';


const Home = ({ products, bannerData }) => {


    return (
        <>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

            <div className="products-heading">
                <h1>Best Selling Products</h1>
                <p>Speakers of many variations</p>
            </div>

            <div className="products-container">
                {products.map(product => <Product product={product} />)}
            </div>

            <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
        </>
    )
}

export default Home;