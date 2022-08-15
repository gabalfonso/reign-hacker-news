import React from "react";

const SelectCombo = ({ options, optionSelected, onOptionSelected }) => {
    const renderOption = (option, index) => {
        return (
            <option key={index} value={option}>
                {option}
            </option>
        );
    };

    console.log("opción seleccionada:" + optionSelected);
    return (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => onOptionSelected(event.target.value)}
            value={optionSelected}
        >
            {options.map((option, index) => renderOption(option, index))}
        </select>
    );
};

export default SelectCombo;
