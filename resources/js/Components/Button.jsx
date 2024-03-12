import propTypes from "prop-types";

Button.propTypes = {
    type: propTypes.oneOf(["button", "submit", "danger", "light"]),
    className: propTypes.string,
    variant: propTypes.oneOf([
        "primary",
        "warning",
        "light-outline",
        "white-outline",
    ]),
    preprocesing: propTypes.bool,
    children: propTypes.node,
};

export default function Button({
    type,
    className = "",
    variant = "primary",
    preprocesing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center ${
                preprocesing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={preprocesing}
        >
            {children}
        </button>
    );
}
