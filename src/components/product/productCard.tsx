import Image from "next/image";
import Link from "next/link"

const ProductCard = ({ product }) => {
    const hasImgUrl = !!product.imgUrl;
    const hasImgHover = !!product.imgHover;
    return (
        <Link href={`/products/${product.id}`} className="product-card">
            <div className="product-card-img">
                <Image src={product.imgUrl} alt="" fill />
                <Image src={product.imgHover} alt="" fill />
            </div>
            <div className="product-card-content">
                <h3 className="product-card-title">
                    {product.title}
                </h3>
                <div className="product-card-price">
                    {product.price}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;