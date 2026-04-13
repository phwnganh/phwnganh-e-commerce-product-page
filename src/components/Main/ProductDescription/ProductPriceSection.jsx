
const ProductPriceSection = () => {
    return (
        <div className={"flex flex-row justify-between sm:flex-col gap-2"}>
        <div aria-label={"product price"} aria-labelledby={"discount"} className={"flex items-start gap-4"}>
                <h1 id={"discount"} className={"text-preset-2 leading-preset-2 font-preset-2 text-grey-950"}>$125.00</h1>
            <div className={"flex justify-center items-center self-start bg-grey-950 rounded-6"}>
                <p className={" text-white text-preset-3 leading-preset-3 font-preset-3 rounded-6 px-2"}>50%</p>
            </div>
        </div>
            <h2 aria-label={"original price"} className={"text-preset-3 leading-preset-3 font-preset-3 text-grey-500 line-through"}>$250.00</h2>
        </div>
    );
};

export default ProductPriceSection;