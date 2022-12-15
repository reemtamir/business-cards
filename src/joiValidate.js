import Joi from 'joi';
export const joiValidation = (schema) => {
  const stringPasswordError =
    'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum six in length';

  return (values) => {
    const { error } = Joi.object(schema).validate(values, {
      abortEarly: false,
    });
    if (!error) {
      return null;
    }
    const errors = {};

    for (const detail of error.details) {
      const errorKey = detail.path[0];
      errors[errorKey] =
        errorKey === 'password' || errorKey === 'bizPassword'
          ? stringPasswordError
          : detail.message;
    }

    return errors;
  };
};
