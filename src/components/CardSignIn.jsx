import CardInput from '../common/CardInput';
import { useFormik } from 'formik';
import Joi from 'joi';
import { joiValidation } from '../joiValidate';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const CardSignIn = () => {
  const { logIn: signIn, user } = useAuth();
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: '',
      password: '',
    },
    validate: joiValidation({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string()
        .regex(strongPasswordRegex)

        .required(),
    }),
    onSubmit: async (values) => {
      try {
        await signIn({ ...values });
      } catch ({ response }) {
        setError(response.data);
      }
    },
  });
  useEffect(() => {
    if (!user) return;
    toast('Welcome');
    if (user.biz) {
      navigate('/my-cards');
    } else {
      navigate('/');
    }
  }, [user]);
  return (
    <>
      <form className="form" onSubmit={form.handleSubmit} noValidate>
        {error && <p className="error">{error}</p>}
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

        <button className="btn " type="submit">
          sign in
        </button>
      </form>
    </>
  );
};

export default CardSignIn;
