export default function InputLabel({
    value,
    className = "",
    children,
    htmlFor,
    ...props
}) {
    return (
        <label
            htmlFor={htmlFor}
            {...props}
            className={`text-base block mb-2` + className}
        >
            {value ? value : children}
        </label>
    );
}
