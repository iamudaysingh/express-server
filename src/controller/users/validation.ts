const validation = {
  create: {
    email: {
    errorMessage: 'Email is required',
    in: ['body'],
    regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
    required: true,
    },
    name: {
    errorMessage: 'Name is required',
    in: ['body'],
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    required: true,
    },
    role: {
    errorMessage: 'role is required',
    in: ['body'],
    required: true,
    },
    },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
     },
  },
  update: {
    dataToUpdate: {
      custom : (dataToUpdate) => { console.log('Data to Update ====>' , dataToUpdate); },
      in: ['body'],
      isObject: true,
      required: true,
  },
    id: {
        in: ['body'],
        required: true,
        string: true,
    },
  },
};
export default validation;
