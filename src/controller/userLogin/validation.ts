const validation = {
  create: {
    email: {
      errorMessage: 'Email is invalid',
      in: ['body'],
      regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
      required: true,
    },
    password : {
      errorMessage: 'Password is invalid',
      in: ['body'],
      required: true,
    },
  },
};
export default validation;
