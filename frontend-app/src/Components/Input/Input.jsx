const Input = ({ placeholder, value, inputHandler }) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onInput={inputHandler}
        ></input>
    );
};
export default Input;
