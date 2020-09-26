const Validator = require("validator");
const isEmpty = require("./is-empty");

/*
 * Verify all fields when registering a new user:
 * name: not empty, between 2 and 30 chars
 * username: not empty, between 6 and 30 chars
 * email: not empty, valid form
 * password: not empty, between 6 and 30 chars
 * password2: must match passsword
 */

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = "Name must be between 2 and 30 characters";
    }

    if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
        errors.username = "Username must be between 6 and 30 characters";
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required.";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required.";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid.";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required.";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password =
            "Password field must be at least 6 and at most 30 characters.";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required.";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match!";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
