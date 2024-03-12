import { useEffect, useRef } from "react";
import propTypes from "prop-types";

TextInput.propTypes = {
    type: propTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    variant: propTypes.oneOf(["primary", "primary-outline", "error"]),
    autoComplete: propTypes.string,
    required: propTypes.bool,
    handleChange: propTypes.func,
    placeholder: propTypes.string,
    isError: propTypes.bool,
};

export default function TextInput({
    type = "text",
    name,
    defaultValue,
    variant = "primary",
    autoComplete,
    required,
    placeholder,
    isError,
    className = "",
    isFocused = false,
    value,
    id,
    ref,
    ...props
}) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <input
            {...props}
            type={type}
            name={name}
            variant={variant}
            value={value}
            autoComplete={autoComplete}
            required={required}
            defaultValue={defaultValue}
            placeholder={placeholder}
            id={id}
            onChange={(e) => handleChange(e)}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
        />
    );
}
