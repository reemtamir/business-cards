import React, { useState } from 'react';
import CardInput from '../common/CardInput';
import { useFormik } from 'formik';
import Joi from 'joi';
import { joiValidation } from '../joiValidate';
import { createUser } from '../userService/httpService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardSignUp = () => {
  const [error, setError] = useState('');
  const [isBiz, setIsBiz] = useState(false);
  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: joiValidation({
      name: Joi.string().min(2).max(1024).required(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().regex(strongPasswordRegex).required(),
    }),
    onSubmit: async (values) => {
      try {
        await createUser({ ...values, biz: isBiz });
        toast('Successfully registered ✔');
        navigate('/sign-in');
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <form className="form" onSubmit={form.handleSubmit} noValidate>
        {<p className="error">{error}</p>}

        <CardInput
          inputClass={'input'}
          label="Name"
          type="text"
          name="name"
          id="name"
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps('name')}
          onChange={form.handleChange}
        />
        <CardInput
          inputClass={'input'}
          label="Email"
          type="email"
          name="email"
          id="email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps('email')}
          onChange={form.handleChange}
        />
        <CardInput
          inputClass={'input'}
          label="Password"
          type="password"
          name="password"
          id="password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps('password')}
          onChange={form.handleChange}
        />
        <CardInput
          label="Business"
          type="checkbox"
          name="isBiz"
          id="isBiz"
          checked={isBiz}
          onChange={() => setIsBiz(!isBiz)}
        />
        <button className="btn " type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default CardSignUp;
