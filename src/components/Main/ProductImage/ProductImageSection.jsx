import {useState} from "react";
import PreviousIcon from '../../../assets/icon-previous.svg'
import NextIcon from '../../../assets/icon-next.svg'
import ProductImageDetail from "./ProductImageDetail.jsx";
const ProductImageSection = ({products}) => {
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const productImage = PRODUCT_IMG_THUMBNAILS[currentIndex]
    const [openImageDetail, setOpenImageDetail] = useState(false)
    const handleOpenProductImage = (index) => {
        setCurrentIndex(index);
    }

    const handleOpenProductImageDetail = () => {
        setOpenImageDetail(true)
    }

    const handleCloseProductImageDetail = () => {
        setOpenImageDetail(false)
    }

    const handleNext = () => {
        setCurrentIndex(prev => prev === PRODUCT_IMG_THUMBNAILS.length - 1 ? 0 : (prev + 1))
    }

    const handlePrevious = () => {
        setCurrentIndex(prev => prev === 0 ? (PRODUCT_IMG_THUMBNAILS.length - 1) : (prev - 1))
    }
    return (
        <div className={"flex flex-col gap-8"}>
            <div className={"relative"}>
                <button type={"button"} aria-label={"open to see bigger product image"} onClick={handleOpenProductImageDetail}>
                <img src={productImage.img} alt={productImage.title} className={"rounded-5 w-full"}/>
                </button>
                <div className={"absolute inset-0 flex items-center md:hidden justify-between px-4"}>
                    <button onClick={handlePrevious} type={"button"} aria-label={"click to view previous product img"} className={"flex justify-center items-center w-10 h-10 shrink-0 bg-white rounded-20"}>
                        <img src={PreviousIcon} alt={"previous"}/>
                    </button>

                    <button onClick={handleNext} type={"button"} aria-label={"click to view next product img"} className={"flex justify-center items-center w-10 h-10 shrink-0 bg-white rounded-20"}>
                        <img src={NextIcon} alt={"next"}/>
                    </button>
                </div>
            </div>
            <div className={"hidden md:flex gap-8"}>
                {PRODUCT_IMG_THUMBNAILS.map((img, index) =>
                    <button key={img.id} aria-label={"click to view product image"} aria-labelledby={img.title} type={"button"} onClick={() => handleOpenProductImage(index)} className={`hover:opacity-50 rounded-10 aspect-square ${currentIndex === index ? "opacity-75 ring-2 ring-orange-500" : ""}`}>
                        <img id={img.title} src={img.imgThumbnail} alt={img.title} className={"rounded-10 h-full"}/>
                    </button>
                )}
            </div>
            {openImageDetail && <ProductImageDetail productImgs={PRODUCT_IMG_THUMBNAILS}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onClose={handleCloseProductImageDetail}/>}
        </div>
    );
};

export default ProductImageSection;