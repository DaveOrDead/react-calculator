const Button = ({text, ...props}) => {
    return (
        <button
            {...props}
            className="c-button"
        >
            {text}
        </button>
        )
};

export default Button;
