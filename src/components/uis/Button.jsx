
const Button = ({children, ...props}) => {
    return (
        <button className={"whitespace-nowrap flex items-center justify-center gap-4 bg-orange-500 rounded-10 px-22 py-4"} {...props}>
            {children}
        </button>
    );
};

export default Button;