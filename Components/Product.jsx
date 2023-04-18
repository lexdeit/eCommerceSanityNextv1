import Link from "next/link";
import { urlFor } from "@/lib/client";
import Image from "next/image";


const Product = ({ product: { details, image, name, price, slug, id } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card" >

          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </>
  )
}

export default Product;