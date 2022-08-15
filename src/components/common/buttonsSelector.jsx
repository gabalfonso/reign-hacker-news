import React from "react";

const ButtonsSelector = ({ options, optionSelected, onOptionClicked }) => {
    const renderButton = (option, index) => {
        const clsName = `btn btn-outline-${
            option === optionSelected ? "primary" : "secondary"
        }`;
        return (
            <button
                type="button"
                key={index}
                className={clsName}
                onClick={() => onOptionClicked(option)}
            >
                {option}
            </button>
        );
    };

    return (
        <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
        >
            {options.map((option, index) => renderButton(option, index))}
        </div>
    );
};

export default ButtonsSelector;
