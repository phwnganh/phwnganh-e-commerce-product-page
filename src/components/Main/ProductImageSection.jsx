import {useState} from "react";

const ProductImageSection = () => {
    const PRODUCT_IMG_THUMBNAILS = [
        {
            id: 1,
            title: "Product-1",
            img: "./image-product-1.jpg",
            imgThumbnail: "./image-product-1-thumbnail.jpg"
        },
        {
            id: 2,
            title: "Product-2",
            img: "./image-product-2.jpg",
            imgThumbnail: "./image-product-2-thumbnail.jpg"
        },
        {
            id: 3,
            title: "Product-3",
            img: "./image-product-3.jpg",
            imgThumbnail: "./image-product-3-thumbnail.jpg"
        },
        {
            id: 4,
            title: "Product-4",
            img: "./image-product-4.jpg",
            imgThumbnail: "./image-product-4-thumbnail.jpg"
        }
        ];

    const [productImage, setProductImage] = useState(PRODUCT_IMG_THUMBNAILS[0]);
    const handleOpenProductImage = (img) => {
        setProductImage(img);
    }
    return (
        <div className={"flex flex-col gap-8"}>
            <div className={"md:max-w-md w-full"}>
                <img src={productImage.img} alt={productImage.title} className={"rounded-5 w-full"}/>
            </div>
            <div className={"hidden md:flex gap-8"}>
                {PRODUCT_IMG_THUMBNAILS.map((img) =>
                    <button key={img.id} aria-label={"click to view product image"} aria-labelledby={img.title} type={"button"} onClick={() => handleOpenProductImage(img)} className={`${productImage.id === img.id ? "opacity-75 ring-2 ring-orange-500" : ""} rounded-10 w-22 h-22`}>
                        <img id={img.title} src={img.imgThumbnail} alt={img.title} className={"rounded-10"}/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductImageSection;