
const Button = ({children, ...props}) => {
    return (
        <button className={"whitespace-nowrap flex items-center justify-center gap-4 bg-orange-500 hover:bg-orange-300 rounded-10 px-22 py-4 font-bold"} {...props}>
            {children}
        </button>
    );
};

export default Button;