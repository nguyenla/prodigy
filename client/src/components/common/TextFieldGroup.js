import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
    disabled,
    error,
    info,
    name,
    onChange,
    placeholder,
    type,
    value,
}) => {
    return (
        <div className="form-group">
            {info && <small className="form-text text-muted">{info}</small>}
            <input
                type={type}
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error,
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    disabled: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
    type: "text",
};

export default TextFieldGroup;
