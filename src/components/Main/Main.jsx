import ProductDescriptionSection from "./ProductDescription/ProductDescriptionSection.jsx";
import ProductImageSection from "./ProductImage/ProductImageSection.jsx";

const Main = () => {
    return (
        <main className={"flex flex-col md:flex-row items-center gap-12 md:gap-32"}>
                <ProductImageSection/>
                <ProductDescriptionSection/>
        </main>
    );
};

export default Main;